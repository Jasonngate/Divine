"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";

export default function BookSession() {
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#2a0015] via-[#480026] to-[#2a0015] px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-cormorant sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Book a{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Session
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-200/80 max-w-xl mx-auto">
          Pick a time that works for you and let’s connect 
        </p>
      </motion.div>

      {/* Calendly Embed Card */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-4">
        <div
          className="calendly-inline-widget rounded-lg"
          data-url="https://calendly.com/369divinemiracle/30min"
          style={{ minWidth: "320px", height: "650px", backgroundColor: "black" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block px-6 py-3 text-white font-medium bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl shadow hover:shadow-lg transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
