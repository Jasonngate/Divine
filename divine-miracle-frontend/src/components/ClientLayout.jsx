'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const ClientLayout = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Don't render splash screen during SSR
  if (!isClient) {
    return (
      <div className="flex flex-col min-h-screen text-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`flex flex-col min-h-screen text-white transition-opacity duration-300 ${
        showSplash ? 'opacity-0' : 'opacity-100'
      }`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;