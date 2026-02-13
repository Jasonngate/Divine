'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsLoading(true);
    
    // Small delay to show loading state
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] flex items-center justify-center transition-opacity duration-300">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#FEF2CD] text-lg animate-pulse">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Page Content */}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {displayChildren}
      </div>
    </>
  );
};

export default PageTransition;
