"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }).map((_, i) => ({
      key: i,
      left: `${(Math.random() * 100).toFixed(6)}%`,
      top: `${(Math.random() * 100).toFixed(6)}%`,
      animation: `float 15s ease-in-out ${i * 0.7}s infinite`,
    }));
    setDots(generated);
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#cta-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="cta-section"
      className="relative py-20 md:pt-20 md:pb-32 text-[#FEF2CD] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating elements */}
        {dots.map((d) => (
          <div
            key={d.key}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full opacity-20"
            style={{ left: d.left, top: d.top, animation: d.animation }}
          />
        ))}
      </div>

      {/* Main Glowing Blobs - More subtle */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Main Content */}
      <div className="relative max-w-[85%] mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div
            className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl font-cormorant md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FBD051] to-[#FFD700] text-transparent bg-clip-text">
              Find Your True Path
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-[#f5e7c6]">
              With over a decade of experience,{" "}
              <strong className="text-[#FFD700]">Dr. Jinel K</strong> has guided
              thousands of souls through the ancient arts of divination. Based
              in Kandivali West, her practice combines timeless wisdom with
              modern understanding for profound, transformative healing.
            </p>
            <Link
              href="booksession"
              className="relative group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30"
            >
              <span className="relative z-10">Book a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </Link>
          </div>

          {/* Right Side: Minimalistic Logo Container */}
          <div
            className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fff2a900] to-[#f0c956] rounded-full blur-md opacity-10 animate-pulse"></div>

              {/* Decorative frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[#FFD700]/20 absolute"></div>
                <div className="w-[90%] h-[90%] rounded-full border border-[#FBD051]/10 absolute"></div>
              </div>

              {/* Main Logo with minimal glow */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-[#FFD700]/5 rounded-full blur-sm"></div>
                </div>
                <img
                  src="/logo.png"
                  alt="Divine Miracle Logo"
                  className="w-4/5 h-4/5 object-contain drop-shadow-lg z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
