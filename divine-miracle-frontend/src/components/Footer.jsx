
import React from "react";

import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Globe,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0a0f] via-[#111117] to-[#0d0d12] text-[#FEF2CD] overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7246B3]/5 via-transparent to-transparent"></div>

      {/* Top glowing border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7246B3]/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Divine Miracle Logo"
                  className="h-14 w-14 object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 8px rgba(114, 70, 179, 0.4)) drop-shadow(0 0 16px rgba(114, 70, 179, 0.2))",
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FBD051] to-[#FFD700] text-transparent bg-clip-text inline-flex items-baseline">
                  Divine Miracle
                  <span className="text-xs text-[#FBD051]/70 ml-0.5">®</span>
                </h2>
              </div>
            </div>
            <p className="text-sm text-[#d1cfcf] leading-relaxed max-w-xs">
              Guiding souls with spiritual wisdom & divine insight towards
              enlightenment and inner peace.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089340828302&sk=reels_tab"
                className="group p-3 bg-gradient-to-br from-[#222] to-[#333] rounded-xl hover:from-[#d4af37] hover:via-[#ffd700] hover:to-[#b8860b] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <Facebook
                  size={18}
                  className="text-[#FEF2CD] group-hover:text-[#3a0d1e]"
                />
              </a>
              <a
                href="https://www.instagram.com/369divinemiracle?igsh=Y3UxZzd6dnNpbTYy"
                className="group p-3 bg-gradient-to-br from-[#222] to-[#333] rounded-xl hover:from-[#d4af37] hover:via-[#ffd700] hover:to-[#b8860b] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <Instagram
                  size={18}
                  className="text-[#FEF2CD] group-hover:text-[#3a0d1e]"
                />
              </a>
              <a
                href="https://www.google.com/search?sca_esv=c8099ca82f4112b0&rlz=1C1ONGR_en-GBIN1089IN1089&sxsrf=AE3TifOqHLFs-m9EHfYHL25dYZN871q_3w:1760080759495&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7zdQ4OwZBvw7dVc_QGcweQ8Mulbk4NxdiC3h9rv3v4WMICPdyWArS1QQQh3-o4Zq-i4navAj6tW8pHWJwr5ZRlIY4bt&q=Divine+Miracle+Reviews&sa=X&ved=2ahUKEwj9lMjji5mQAxUGUGwGHcupFgQQ0bkNegQIIhAE"
                className="group p-3 bg-gradient-to-br from-[#222] to-[#333] rounded-xl hover:from-[#d4af37] hover:via-[#ffd700] hover:to-[#b8860b] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <Globe
                  size={18}
                  className="text-[#FEF2CD] group-hover:text-[#3a0d1e]"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#FBD051] relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#FBD051] to-[#FFD700]"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-[#d1cfcf] hover:text-[#FBD051] transition-all duration-300"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#FBD051] relative">
              Contact Info
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#FBD051] to-[#FFD700]"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gradient-to-br from-[#7246B3]/20 to-[#5210AD]/20 rounded-lg group-hover:from-[#7246B3]/30 group-hover:to-[#5210AD]/30 transition-all duration-300">
                  <Phone size={16} className="text-[#FBD051]" />
                </div>
                <a
                  href="tel:9136913355"
                  className="text-sm text-[#d1cfcf] hover:text-[#FBD051] transition-colors duration-300"
                >
                  9136913355
                </a>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gradient-to-br from-[#7246B3]/20 to-[#5210AD]/20 rounded-lg group-hover:from-[#7246B3]/30 group-hover:to-[#5210AD]/30 transition-all duration-300">
                  <Mail size={16} className="text-[#FBD051]" />
                </div>
                <a
                  href="mailto:369divinemiracle@gmail.com"
                  className="text-sm text-[#d1cfcf] hover:text-[#FBD051] transition-colors duration-300 break-all"
                >
                  369divinemiracle@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#FBD051] relative">
              Our Location
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#FBD051] to-[#FFD700]"></div>
            </h3>
            <div className="flex items-start space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-[#7246B3]/20 to-[#5210AD]/20 rounded-lg group-hover:from-[#7246B3]/30 group-hover:to-[#5210AD]/30 transition-all duration-300 flex-shrink-0">
                <MapPin size={16} className="text-[#FBD051]" />
              </div>
              <div className="text-sm text-[#d1cfcf] leading-relaxed">
                311, Ground Floor, Raghuleela Mega Mall, near Poisar Depot, 
                <br/>
                Jai Bhim Sanjay Nagar, 
                <br/>
                Kandivali West, 
                <br/>
                Mumbai, Maharashtra 400067
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-[#333] to-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#b5b5b5]">
              © {new Date().getFullYear()} Divine Miracle®. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#7246B3]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FBD051]/5 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
