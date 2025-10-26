"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl font-cormorant">
                Divine Miracle
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl lg:text-3xl font-semibold">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-xl">
                Guided by the Stars, Revealed by Tarot
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience the profound wisdom of ancient spiritual practices with
              Dr. Jinel K. Unlock your destiny through tarot, astrology, and
              divine healing in Mumbai's heart.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a href="/booksession">
                <button className="relative group px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30">
                  <span className="relative z-10">Book Your Reading</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </button>
              </a>

              <button className="relative group px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <a href="/services">
                  <span className="relative z-10 group-hover:text-yellow-300 transition-colors duration-300">
                    Explore Services
                  </span>
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </button>
            </div>
          </div>

          {/* Right Side - Spinning Tarot Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
              <Image
                src="/hero_img_tarot_circle.png"
                alt="Tarot Circle"
                fill
                sizes="( max-width: 768px) 100vw, ( max-width: 1200px) 50vw, 33vw"
                className="object-contain animate-spin drop-shadow-2xl"
                style={{ animationDuration: "20s" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-300/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-yellow-500/30 rounded-full animate-pulse delay-5000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
