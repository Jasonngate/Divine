"use client";
import React, { useState, useEffect } from "react";

const VideoTestimonials = () => {
  const videos = [
    {
      id: 1,
      reelUrl: "https://www.instagram.com/reel/DPoNMCgj44_/?igsh=czZ3bG1yNXh3dDVv",
    },
    {
      id: 2,
      reelUrl: "https://www.instagram.com/reel/DPq9-tyiAFC/?igsh=MW1pZ29tM2sxdXk5dA==",
    },
    {
      id: 3,
      reelUrl: "https://www.instagram.com/reel/DP77PhZADhH/?igsh=N20wZzRzMDV1MDFv",
    },
    {
      id: 4,
      reelUrl: "https://www.instagram.com/reel/DP_bHwQD6CF/?igsh=MTdxZ2ZuNDQ2ZWVhZg==",
    },
    {
      id: 5,
      reelUrl: "https://www.instagram.com/reel/C-XWamEtHoU/?igsh=MWcwb3dxZ245Z2p5eA==",
    },
    {
      id: 6,
      reelUrl: "https://www.instagram.com/reel/DQMPzsED0gr/?igsh=MTkxbHRqNXdneGs4cw==",
    },
    {
      id: 7,
      reelUrl: "https://www.instagram.com/reel/DOV764ej-JC/?igsh=MTc5eGk3bzVwMTd6eg==",
    },
    {
      id: 8,
      reelUrl: "https://www.instagram.com/reel/C-w56SPNnwY/?igsh=eG02c2hhMDk5bHBv",
    },
  ];

  // Convert Instagram reel URL to embed URL
  const getEmbedUrl = (reelUrl) => {
    try {
      const reelId = reelUrl.match(/reel\/([^\/?]+)/)?.[1];
      if (reelId) {
        return `https://www.instagram.com/p/${reelId}/embed/`;
      }
    } catch (error) {
      console.error('Error parsing Instagram URL:', error);
    }
    return null;
  };



  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Create duplicated array for infinite scrolling
  const duplicatedVideos = [...videos, ...videos];

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex >= videos.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000); // Wait for transition to complete
    }
  }, [currentIndex, videos.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-5 mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-4">
          Featured Reels
        </h1>
        <p className="text-yellow-200 text-lg p-2">
          A glimpse into our spiritual journey through curated Instagram reels capturing messages, rituals, and moments that reflect our purpose and practice.
        </p>

      </div>

      <div className="max-w-full mx-auto">
        {/* Infinite Looping Reels */}
        <div className="overflow-hidden">
          <div 
            className={`flex gap-10 p-10 ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * (300 + 40)}px)`, // 300px card width + 40px gap
            }}
          >
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${Math.floor(index / videos.length)}`}
                className="flex-shrink-0"
              >
                <VideoCard video={video} getEmbedUrl={getEmbedUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Instagram iframe embed component
const VideoCard = ({ video, getEmbedUrl }) => {
  const embedUrl = getEmbedUrl(video.reelUrl);

  if (!embedUrl) {
    return null;
  }

  return (
    <div className="w-full aspect-[9/16] shadow-md transition-all duration-300 hover:scale-105 h-[90%]">
      <iframe
        src={embedUrl}
        className="w-full h-full rounded-2xl"
        allow="encrypted-media"
        loading="lazy"
        scrolling="no"
      />
    </div>
  );
};

export default VideoTestimonials;
