'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = '919136913355'; // Your WhatsApp number
  const message = 'Hello! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
            <div className="text-sm font-medium">Chat with us on WhatsApp</div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        )}

        {/* Main Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group-hover:shadow-[#25D366]/50"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          
          {/* Pulse animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        </a>

        {/* Notification Badge (optional - can be enabled for unread messages) */}
        {/* <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
          1
        </span> */}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
