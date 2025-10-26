"use client";

import { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, Calendar, 
  Send, MessageCircle, Instagram, Facebook, Globe 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "",
    preferredDate: "", preferredTime: "", message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  
  const services = ["Tarot Reading", "Numerology", "Angel Healing", "Vastu", "Astrology", "Spells"];
  const timeSlots = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "311, Ground Floor, Raghuleela Mega Mall, near Poisar Depot,Jai Bhim Sanjay Nagar,Kandivali West,Mumbai, Maharashtra 400067" , link: "https://www.google.com/maps/place/Divine+Miracle/@19.2140312,72.8488939,17z/data=!3m1!5s0x3be7b7ca0312f959:0x1cd27381cdac6e65!4m14!1m7!3m6!1s0x3be7b7268e057ac5:0x90bff264e35fad0c!2sDivine+Miracle!8m2!3d19.2140312!4d72.8488939!16s%2Fg%2F11tnbx_585!3m5!1s0x3be7b7268e057ac5:0x90bff264e35fad0c!8m2!3d19.2140312!4d72.8488939!16s%2Fg%2F11tnbx_585?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D" },
    { icon: Phone, label: "Phone", value: "+91 91369 13355", link: "tel:+919136913355" },
    { icon: Mail, label: "Email", value: "369divinemiracle@gmail.com", link: "mailto:369divinemiracle@gmail.com" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 10 AM - 8 PM" }
  ];

  const socialLinks = [
    { icon: MessageCircle, name: "WhatsApp", url: "https://wa.me/9136913355", color: "text-green-500" },
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/369divinemiracle?igsh=Y3UxZzd6dnNpbTYy", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/profile.php?id=100089340828302&sk=reels_tab", color: "text-blue-500" },
    { icon: Globe, name: "Google", url: "https://www.google.com/search?sca_esv=c8099ca82f4112b0&rlz=1C1ONGR_en-GBIN1089IN1089&sxsrf=AE3TifOqHLFs-m9EHfYHL25dYZN871q_3w:1760080759495&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7zdQ4OwZBvw7dVc_QGcweQ8Mulbk4NxdiC3h9rv3v4WMICPdyWArS1QQQh3-o4Zq-i4navAj6tW8pHWJwr5ZRlIY4bt&q=Divine+Miracle+Reviews&sa=X&ved=2ahUKEwj9lMjji5mQAxUGUGwGHcupFgQQ0bkNegQIIhAE", color: "text-blue-400" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setError("Please fill in all required fields.");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name, email: formData.email, phone: formData.phone,
          service: formData.service, date: formData.preferredDate, 
          time: formData.preferredTime, message: formData.message
        })
      });

      if (!res.ok) throw new Error("Failed to book appointment");

      setSuccess("✅ Appointment booked successfully! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "", service: "", preferredDate: "", preferredTime: "", message: "" });
    } catch (err) {
      setError("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border border-[#d4af37]/30 bg-white/5 rounded-lg p-3 text-[#FEF2CD] placeholder-[#FEF2CD]/60 focus:border-[#d4af37] focus:outline-none transition-colors";

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-cormorant md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            Book Your Session
          </h1>
          <p className="text-lg md:text-xl text-[#FEF2CD]/80 max-w-2xl mx-auto">
            Schedule your consultation and discover divine guidance on your spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#d4af37]/20">
            <h2 className="text-2xl font-semibold flex items-center mb-6 text-[#FBD051]">
              <Calendar className="w-6 h-6 mr-2" />
              Schedule Appointment
            </h2>

            {success && <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-3 mb-4 text-green-300">{success}</div>}
            {error && <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 mb-4 text-red-300">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name *" value={formData.name} 
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))} 
                  className={inputClass} required />
                <input type="email" placeholder="Email *" value={formData.email} 
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} 
                  className={inputClass} required />
              </div>
              
              <input type="tel" placeholder="Phone Number *" value={formData.phone} 
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))} 
                className={inputClass} required />
              
              <div className="relative">
                <select value={formData.service} 
                  onChange={(e) => setFormData(prev => ({...prev, service: e.target.value}))} 
                  className={`${inputClass} pr-10 appearance-none`} required>
                  <option value="" className="bg-[#2a0015] text-[#FEF2CD] py-2 border-b border-[#d4af37]/20">Select Service *</option>
                  {services.map((service, index) => (
                    <option key={service} value={service} className={`bg-[#2a0015] text-[#FEF2CD] py-2 ${index < services.length - 1 ? 'border-b border-[#d4af37]/20' : ''}`}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input type="date" value={formData.preferredDate} 
                  onChange={(e) => setFormData(prev => ({...prev, preferredDate: e.target.value}))} 
                  min={new Date().toISOString().split("T")[0]} className={inputClass} />
                <div className="relative">
                  <select value={formData.preferredTime} 
                    onChange={(e) => setFormData(prev => ({...prev, preferredTime: e.target.value}))} 
                    className={`${inputClass} pr-10 appearance-none`}>
                    <option value="" className="bg-[#2a0015] text-[#FEF2CD] py-2 border-b border-[#d4af37]/20">Select Time</option>
                    {timeSlots.map((time, index) => (
                      <option key={time} value={time} className={`bg-[#2a0015] text-[#FEF2CD] py-2 ${index < timeSlots.length - 1 ? 'border-b border-[#d4af37]/20' : ''}`}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <textarea placeholder="Message (optional)" value={formData.message} 
                onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))} 
                className={`${inputClass} min-h-[100px] resize-none`} />
              
              <button type="submit" disabled={loading}
                className="relative group w-full bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30 disabled:opacity-50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {loading ? "Booking..." : "Send Request"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </button>
            </form>
          </div>

          {/* Contact Info & Social - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#d4af37]/20">
              <h3 className="text-xl font-semibold mb-4 text-[#FBD051]">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, link }, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 mt-1 text-[#FBD051] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#FEF2CD]">{label}</p>
                      {link ? (
                        <a href={link} className="text-[#FEF2CD]/80 hover:text-[#FBD051] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#FEF2CD]/80 whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#d4af37]/20">
              <h3 className="text-xl font-semibold mb-4 text-[#FBD051]">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, name, url, color }, index) => (
                  <a key={index} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:bg-white/10 transition-all duration-300">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-sm">{name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#d4af37]/20">
              <h3 className="text-xl font-semibold mb-4 text-[#FBD051]">What to Expect</h3>
              <ul className="space-y-2 text-[#FEF2CD]/80">
                {[
                  "Confirmation within 24 hours",
                  "Peaceful session environment", 
                  "Recordings available on request",
                  "Follow-up guidance included"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-[#FBD051] rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}