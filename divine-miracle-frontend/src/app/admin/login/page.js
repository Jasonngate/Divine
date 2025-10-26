"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Sparkles } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Attempting login to:", `${API_BASE_URL}/auth/login`);
      
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Store valid JSON data
      const adminData = {
        id: data.admin?.id || "admin",
        name: data.admin?.name || "Admin",
        email: data.admin?.email || formData.email
      };

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("admin", JSON.stringify(adminData));
      
      console.log("Login successful, redirecting...");
      
      // Redirect to appointments page
      router.push("/admin/appointments");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="relative min-h-screen py-10 text-[#FFD700] overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2a0015] bg-opacity-80"></div>
      
      <div className="relative z-10 bg-[#3b0022] rounded-2xl shadow-2xl p-8 w-full max-w-md border border-yellow-100/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-300 mr-2" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
              Admin Portal
            </h1>
          </div>
          <p className="text-yellow-100/80">Access the divine dashboard</p>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-400 text-red-200 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-yellow-200 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@divinemiracle.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full border border-yellow-100/20 bg-[#3b0022] rounded-lg px-4 py-3 text-yellow-200 placeholder-yellow-200/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-200 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full border border-yellow-100/20 bg-[#3b0022] rounded-lg px-4 py-3 pr-12 text-yellow-200 placeholder-yellow-200/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-300 hover:text-yellow-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFD700] text-[#2a0015] font-bold py-3 px-4 rounded-lg hover:bg-[#FFE066] focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#3b0022] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#2a0015] mr-2"></div>
                Signing in...
              </div>
            ) : (
              "Enter Sacred Space"
            )}
          </button>
        </form>

        {/* Test credentials reminder
        <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-600/50 rounded-lg">
          <p className="text-sm text-yellow-200 text-center">
            <strong>Test Credentials:</strong><br />
            Email: raneeyy18@gmail.com<br />
            Password: AstroPredictions18
          </p>
        </div> */}
      </div>
    </div>
  );
}