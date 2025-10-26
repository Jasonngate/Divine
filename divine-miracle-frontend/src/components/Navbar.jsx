"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav
      // className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled
      //     ? "bg-[#0a0a0f] backdrop-blur-md bg-opacity-95 border-b border-[#222] shadow-xl"
      //     : "bg-gradient-to-b from-[#111117] to-[#0d0d12] border-b border-[#222]"
      // }`}
      className={` backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>


      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 group transition-transform hover:scale-105"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Divine Miracle Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
              Divine Miracle®
            </span>
          </Link>

          {/* Desktop Nav (1024px and up) */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-sm font-medium transition-all duration-300 px-2 py-1 rounded-lg whitespace-nowrap ${isActive(item.path)
                  ? "text-[#FBD051] bg-gradient-to-r from-yellow-500/10 to-yellow-600/10"
                  : "text-[#FEF2CD] hover:text-[#FBD051] hover:bg-white/5"
                  }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              href="/booksession"
              className="bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 whitespace-nowrap" 
            >
              <span className="relative z-10">Book Session</span>
            </Link>
          </div>

          {/* Tablet Nav (768px to 1024px) */}
          <div className="hidden md:xl:hidden md:flex items-center space-x-3">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-xs font-medium transition-all duration-300 px-2 py-1 rounded-lg whitespace-nowrap ${isActive(item.path)
                  ? "text-[#FBD051] bg-gradient-to-r from-yellow-500/10 to-yellow-600/10"
                  : "text-[#FEF2CD] hover:text-[#FBD051] hover:bg-white/5"
                  }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
                )}
              </Link>
            ))}
            {/* Dropdown for remaining items */}
            <div className="relative group">
              <button className="text-[#FEF2CD] hover:text-[#FBD051] text-xs font-medium px-2 py-1 rounded-lg transition-all duration-300">
                More ▾
              </button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-[#111117] border border-[#d4af37]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`block text-xs font-medium transition-all duration-300 px-3 py-2 rounded-lg ${isActive(item.path)
                      ? "text-[#FBD051] bg-gradient-to-r from-yellow-500/10 to-yellow-600/10"
                      : "text-[#FEF2CD] hover:text-[#FBD051] hover:bg-white/5"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/booksession"
              className="bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-1.5 px-3 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 text-xs whitespace-nowrap" 
            >
              Book Session
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#FEF2CD] bg-gradient-to-r from-[#d4af37]/20 to-[#ffd700]/20 p-2 rounded-lg hover:from-[#d4af37]/30 hover:to-[#ffd700]/30 border border-[#d4af37]/30 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mobile-nav-container py-4 bg-gradient-to-b from-[#111117] to-[#0a0a0f] rounded-b-xl mx-2 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col space-y-3 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-3 rounded-lg transform hover:scale-[1.02] hover:shadow-lg border ${isActive(item.path)
                    ? "text-[#FBD051] bg-gradient-to-r from-yellow-500/15 to-yellow-600/15 border-[#d4af37]/30 shadow-md"
                    : "text-[#FEF2CD] hover:text-[#FBD051] hover:bg-white/8 border-transparent hover:border-[#d4af37]/40"
                    }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInFromLeft 0.4s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-3">
                <Link
                  href="/booksession"
                  className="relative group w-full bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 overflow-hidden text-center block transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30"
                  style={{
                    animationDelay: `${navItems.length * 50}ms`,
                    animation: isOpen ? 'slideInFromLeft 0.4s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Book Session</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          .mobile-nav-container {
            border: 1px solid rgba(212, 175, 55, 0.25);
            border-top: 2px solid rgba(212, 175, 55, 0.3);
          }
          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </nav>
  );
};

export default Navbar;
