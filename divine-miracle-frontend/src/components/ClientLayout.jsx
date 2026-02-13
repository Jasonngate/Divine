'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [hasShownSplash, setHasShownSplash] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
      setHasShownSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasShownSplash(true);
    sessionStorage.setItem('splashShown', 'true');
  };

  // Don't render splash screen during SSR
  if (!isClient) {
    return (
      <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015]">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-16 h-16 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showSplash && !hasShownSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`flex flex-col min-h-screen text-white transition-opacity duration-500 ${
        showSplash ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}>
        <Navbar />
        <PageTransition key={pathname}>
          {children}
        </PageTransition>
        <Footer />
      </div>
      {!showSplash && <WhatsAppButton />}
    </>
  );
};

export default ClientLayout;