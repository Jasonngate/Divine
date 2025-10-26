"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Calendar, User, Clock, Mail, Phone, MessageCircle, RefreshCw } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(null);
  const [searchDate, setSearchDate] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("adminToken");
    const adminData = localStorage.getItem("admin");
    
    console.log("Token:", token);
    console.log("Admin data:", adminData);
    
    // ✅ Fixed: Check if adminData exists and is valid JSON
    if (!token || !adminData || adminData === "undefined" || adminData === "null") {
      console.log("No valid auth data, redirecting to login");
      router.push("/admin/login");
      return;
    }
    
    try {
      // ✅ Fixed: Parse only if valid JSON
      const parsedAdmin = JSON.parse(adminData);
      setAdmin(parsedAdmin);
      fetchAppointments(token);
    } catch (parseError) {
      console.error("Error parsing admin data:", parseError);
      // Clear invalid data and redirect to login
      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");
      router.push("/admin/login");
    }
  };

  const fetchAppointments = async (token, isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError("");

    try {
      console.log("Fetching appointments with token:", token);
      
      const res = await fetch(`${API_BASE_URL}/api/appointments`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        // Token expired or invalid
        logout();
        return;
      }

      if (!res.ok) {
        throw new Error(`Failed to fetch appointments: ${res.status}`);
      }

      const data = await res.json();
      
      // ✅ Sort appointments by latest first (new appointments at top)
      const sortedAppointments = data.sort((a, b) => {
        // Use createdAt if available, otherwise use _id timestamp
        const dateA = a.createdAt ? new Date(a.createdAt) : 
                     a._id ? new Date(a._id.toString().substring(0, 8) * 1000) : new Date();
        const dateB = b.createdAt ? new Date(b.createdAt) : 
                     b._id ? new Date(b._id.toString().substring(0, 8) * 1000) : new Date();
        
        return dateB - dateA; // Latest first (descending order)
      });
      
      setAppointments(sortedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Failed to load appointments. Please check if the backend is running.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("adminToken");
    
    try {
      const res = await fetch(`${API_BASE_URL}/api/appointments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (res.status === 401) {
        logout();
        return;
      }

      if (!res.ok) throw new Error("Failed to update status");

      // Refresh the list to get updated data
      fetchAppointments(token, true);
    } catch (error) {
      console.error("Error updating appointment:", error);
      setError("Failed to update appointment status");
    }
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment? This action cannot be undone.')) {
      return;
    }

    const token = localStorage.getItem("adminToken");
    setError(""); // Clear any existing errors
    
    try {
      const res = await fetch(`${API_BASE_URL}/api/appointments/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 401) {
        logout();
        return;
      }

      if (res.status === 404) {
        setError("Appointment not found. It may have been already deleted.");
        return;
      }

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete appointment");
      }

      // Show success message
      setError(""); // Clear any errors
      fetchAppointments(token, true);
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setError(error.message || "Failed to delete appointment. Please try again.");
    }
  };

  const handleRefresh = () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      fetchAppointments(token, true);
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    router.push("/admin/login");
  };

  // ✅ Clear any existing invalid data on component mount
  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (adminData === "undefined" || adminData === "null") {
      localStorage.removeItem("admin");
      localStorage.removeItem("adminToken");
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg.png')" }}>
        <div className="min-h-screen bg-[#2a0015] bg-opacity-90 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
            <p className="mt-4 text-yellow-200">Loading divine appointments...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      {/* Background Overlay */}
      <div className="min-h-screen bg-[#2a0015] bg-opacity-90">
        {/* Header - Fixed at top */}
        <header className="bg-[#3b0022] border-b border-yellow-100/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
                  Divine Dashboard
                </h1>
                <p className="text-yellow-100/80">
                  {admin ? `Welcome, ${admin.name}` : 'Sacred Space'}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                {admin && (
                  <span className="text-sm text-yellow-200 hidden md:block">
                    Connected as: {admin.email}
                  </span>
                )}
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors border border-red-400"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Added pt-8 for spacing below fixed header */}
        <div className="container mx-auto px-4 py-8">
          {error && (
            <div className="bg-red-900/50 border border-red-400 text-red-200 px-4 py-3 rounded-lg mb-6">
              {error}
              <button 
                onClick={() => window.location.reload()}
                className="ml-4 text-sm underline"
              >
                Retry
              </button>
            </div>
          )}

          <div className="bg-[#3b0022] rounded-2xl shadow-lg p-6 border border-yellow-100/20">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-yellow-200 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-yellow-400" />
                  Appointment Requests 
                  <span className="ml-2 bg-yellow-500 text-[#2a0015] px-2 py-1 rounded-full text-sm">
                    {appointments.length}
                  </span>
                </h2>
                <button 
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-[#2a0015] rounded-lg hover:bg-yellow-400 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
                  {refreshing ? "Refreshing..." : "Refresh"}
                </button>
              </div>

              {/* Search and Sort Controls */}
              <div className="flex flex-wrap gap-4 items-center bg-[#2a0015] p-4 rounded-lg border border-yellow-100/20">
                <div className="flex-1 min-w-[200px]">
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full px-4 py-2 bg-[#3b0022] text-yellow-200 rounded-lg border border-yellow-100/20 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full px-4 py-2 bg-[#3b0022] text-yellow-200 rounded-lg border border-yellow-100/20 focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="pending">Pending First</option>
                    <option value="approved">Approved First</option>
                    <option value="cancelled">Cancelled First</option>
                  </select>
                </div>
                {searchDate && (
                  <button
                    onClick={() => setSearchDate("")}
                    className="px-4 py-2 bg-yellow-600/20 text-yellow-200 rounded-lg hover:bg-yellow-600/30 transition-colors text-sm border border-yellow-400/20"
                  >
                    Clear Date Filter
                  </button>
                )}
              </div>
            </div>
            
            {(() => {
              // Filter and sort appointments
              let filteredAppointments = [...appointments];
              
              // Apply date filter
              if (searchDate) {
                filteredAppointments = filteredAppointments.filter(
                  appt => appt.date === searchDate
                );
              }
              
              // Apply sorting
              filteredAppointments.sort((a, b) => {
                switch (sortOrder) {
                  case "oldest":
                    return new Date(a.date) - new Date(b.date);
                  case "pending":
                    return (b.status === "Pending") - (a.status === "Pending");
                  case "approved":
                    return (b.status === "Approved") - (a.status === "Approved");
                  case "cancelled":
                    return (b.status === "Cancelled") - (a.status === "Cancelled");
                  default: // "latest"
                    return new Date(b.date) - new Date(a.date);
                }
              });

              if (filteredAppointments.length === 0) {
                return (
                  <div className="text-center py-12">
                    <div className="text-yellow-400 text-6xl mb-4">✨</div>
                    <p className="text-yellow-200 text-lg mb-4">
                      {searchDate 
                        ? `No appointments found for ${searchDate}` 
                        : "No appointments awaiting your guidance"}
                    </p>
                    <p className="text-yellow-200/70">
                      {searchDate 
                        ? "Try selecting a different date" 
                        : "New appointment requests will appear here"}
                    </p>
                  </div>
                );
              }

              return (
                <div className="space-y-6">
                  {filteredAppointments.map((appt) => (
                  <div key={appt._id} className="border border-yellow-100/20 rounded-xl p-6 bg-[#3b0022] hover:shadow-yellow-400/10 hover:shadow-lg transition-all">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Client Information */}
                      <div>
                        <h3 className="font-semibold text-yellow-300 mb-3 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Client Information
                        </h3>
                        <div className="space-y-2 text-yellow-200">
                          <p><strong>Name:</strong> {appt.fullName}</p>
                          <p className="flex items-center">
                            <Mail className="h-3 w-3 mr-2" />
                            {appt.email}
                          </p>
                          <p className="flex items-center">
                            <Phone className="h-3 w-3 mr-2" />
                            {appt.phone}
                          </p>
                        </div>
                      </div>
                      
                      {/* Appointment Details */}
                      <div>
                        <h3 className="font-semibold text-yellow-300 mb-3 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Appointment Details
                        </h3>
                        <div className="space-y-2 text-yellow-200">
                          <p><strong>Service:</strong> {appt.service}</p>
                          <p><strong>Date:</strong> {appt.date}</p>
                          <p className="flex items-center">
                            <Clock className="h-3 w-3 mr-2" />
                            {appt.time}
                          </p>
                          <p><strong>Status:</strong> 
                            <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
                              appt.status === 'Approved' ? 'bg-green-900/50 text-green-300 border border-green-600' :
                              appt.status === 'Cancelled' ? 'bg-red-900/50 text-red-300 border border-red-600' :
                              'bg-yellow-900/50 text-yellow-300 border border-yellow-600'
                            }`}>
                              {appt.status || 'Pending'}
                            </span>
                          </p>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div>
                        <h3 className="font-semibold text-yellow-300 mb-3">Actions</h3>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => updateStatus(appt._id, 'Approved')}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm border border-green-400"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(appt._id, 'Cancelled')}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm border border-red-400"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => updateStatus(appt._id, 'Pending')}
                            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm border border-yellow-400"
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => deleteAppointment(appt._id)}
                            className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors text-sm border border-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Client Message */}
                    {appt.message && (
                      <div className="mt-4 pt-4 border-t border-yellow-100/20">
                        <h4 className="font-semibold text-yellow-300 mb-2 flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Client Message:
                        </h4>
                        <p className="text-yellow-200 bg-[#2a0015] p-3 rounded-lg border border-yellow-100/10">
                          {appt.message}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}