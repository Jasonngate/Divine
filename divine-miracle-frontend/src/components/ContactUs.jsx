"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  MessageSquare,
  ClipboardList,
} from "lucide-react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 pt-24" // <-- extra padding for navbar
      style={{ backgroundColor: "#400022" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#2B0017] shadow-xl rounded-2xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden"
      >
        {/* Left Info Panel */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-10 flex flex-col items-center justify-center text-yellow-400 text-center"
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src="/logo.png" // your logo in /public
              alt="Divine Miracle Logo"
              className="h-28 w-28 object-contain drop-shadow-[0_0_20px_#FACC15]" // bigger + glowing
            />
          </div>

          {/* Heading + Text */}
          <h1 className="text-3xl font-bold mb-4">Book an Appointment Now</h1>
          <p className="mb-6 text-gray-300">
            Let’s chat and know more about you.
          </p>

          {/* Footer text */}
          <p className="mt-6 font-semibold text-yellow-500">
            Contact Us Now!!
          </p>
        </motion.div>



        {/* Right Form Panel */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-10 bg-[#1A0012]"
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            Appointment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="form-control">
              <label className="flex items-center gap-2 text-yellow-400 pb-2">
                <User className="w-4 h-4" /> Name *
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="input w-full bg-[#2A0020] text-white placeholder-gray-400 
                           border-yellow-500/30 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15] placeholder:italic"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="flex items-center gap-2 text-yellow-400 pb-2">
                <Mail className="w-4 h-4" /> Email *
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full bg-[#2A0020] text-white placeholder-gray-400 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15] placeholder:italic"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="flex items-center gap-2 text-yellow-400 pb-2">
                <Phone className="w-4 h-4" /> Phone
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="input w-full bg-[#2A0020] text-white placeholder-gray-400 
                           border-yellow-500/30 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15] placeholder:italic"
              />
            </div>

            {/* Purpose */}
            <div className="form-control">
              <label className="flex items-center gap-2 text-yellow-400 pb-2">
                <ClipboardList className="w-4 h-4" /> Purpose
              </label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                className="select w-full bg-[#2A0020] text-white 
                           border-yellow-500/30 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15]"
              >
                <option disabled value="">
                  Select Purpose
                </option>
                <option>Tarot Card Reading</option>
                <option>Numerology</option>
                <option>Angel Healing</option>
                <option>Herb Spells</option>
                <option>Astrology</option>
                <option>Vastu</option>
              </motion.select>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-yellow-400 pb-2">
                  <Calendar className="w-4 h-4" /> Date
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="input w-full bg-[#2A0020] text-white 
                             border-yellow-500/30 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-yellow-400 pb-2">
                  <Clock className="w-4 h-4" /> Time
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="input w-full bg-[#2A0020] text-white 
                             border-yellow-500/30 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="flex items-center gap-2 text-yellow-400 pb-2">
                <MessageSquare className="w-4 h-4" /> Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full bg-[#2A0020] text-white placeholder-gray-400 focus:border-yellow-400 focus:shadow-[0_0_10px_#FACC15] placeholder:italic"
                rows="4"
              ></motion.textarea>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black 
                         font-bold border-none shadow-lg hover:shadow-yellow-600/50"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
