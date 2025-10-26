'use client'
import React, { useState } from 'react';
import { ServiceCardGallery } from '@/components/ServiceCardGallery.jsx';

// Filter Button Component
const FilterButton = ({ category, label, activeFilter, onFilterChange }) => {
  const isActive = activeFilter === category;
  
  return (
    <button
      onClick={() => onFilterChange(category)}
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e]'
          : 'text-yellow-200 hover:text-yellow-400 hover:bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40'
      }`}
    >
      {label}
    </button>
  );
};

// Main Sacred Gallery Component
const SacredGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const spellImages = [
    '/spells/1.jpeg',
    '/spells/2.jpeg',
    // '/spells/3.jpeg',
    '/spells/4.jpeg',
    '/spells/5.jpeg',
    '/spells/6.jpeg',
    '/spells/7.jpeg',
    '/spells/8.jpeg',
    '/spells/9.jpeg',
    '/spells/10.jpeg',
    '/spells/11.jpeg',
    '/spells/12.jpeg'
  ]

  const tarotImages = [
    '/tarot_reading/tt1.png',
    '/tarot_reading/tt2.jpg',
    '/tarot_reading/tt3.jpg',
    '/tarot_reading/tt4.jpg',
    '/tarot_reading/tt5.jpg',
    '/tarot_reading/tt6.jpg'
  ]

  const vastuImages = [
    '/vastu_consultation/vc_v_1.mp4',
    '/vastu_consultation/vc_v_2.mp4',
    '/vastu_consultation/vc_v_3.mp4',
    '/vastu_consultation/vc_v_4.mp4',
    '/vastu_consultation/vc_v_5.mp4'
  ]

  const NumerologyImages = [
    "numerology/n_v_1.mp4"
  ]

  // Gallery data
  const galleryData = [

    // Spells (12 items)
    ...spellImages.map((media, index) => ({
      id: index + 1,
      title: `SPELLS`,
      category: "SPELLS",
      filterCategory: "spells",
      media: media
    })),

    // Tarot Reading (6 items)
    ...tarotImages.map((media, index) => ({
      id: spellImages.length + index + 1,
      title: `TAROT READING`,
      category: "TAROT READING",
      filterCategory: "tarot",
      media: media
    })),

    // Vastu Consultation (5 items)
    ...vastuImages.map((media, index) => ({
      id: spellImages.length + tarotImages.length + index + 1,
      title: `VASTU CONSULTATION  `,
      category: "VASTU CONSULTATION",
      filterCategory: "vastu consultation",
      media: media
    })),

    ...NumerologyImages.map((media, index) => ({
      id: spellImages.length + tarotImages.length + vastuImages.length + index + 1,
      title: `NUMEROLOGY`,
      category: "NUMEROLOGY",
      filterCategory: "numerology",
      media: media
    })),

    // Other services (keeping as they were)
    {
      id: spellImages.length + tarotImages.length + vastuImages.length + NumerologyImages.length + 1,
      title: "ANGEL HEALING",
      category: "ANGEL HEALING",
      filterCategory: "angel"
    },
    {
      id: spellImages.length + tarotImages.length + vastuImages.length + NumerologyImages.length + 2,
      title: "ASTROLOGY READING",
      category: "ASTROLOGY",
      filterCategory: "astrology"
    },
  ];

  // Filter categories
  const filterCategories = [
    { category: 'all', label: 'All' },
    { category: 'spells', label: 'Spells' },
    { category: 'tarot', label: 'Tarot Reading' },
    { category: 'angel', label: 'Angel Healing' },
    { category: 'vastu consultation', label: 'Vastu Consultation' },
    { category: 'astrology', label: 'Astrology' },
    { category: 'numerology', label: 'Numerology' },
  ];

  // Filter gallery data
  const filteredData = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.filterCategory === activeFilter);

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] relative overflow-hidden">
      {/* Decorative glowing orbs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-800/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-yellow-400/10 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center pb-12 px-4 relative z-10">
        <h1 className="text-4xl font-cormorant md:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-3 pb-5">
          Sacred Gallery
        </h1>
        <p className="text-yellow-200 text-xl max-w-3xl mx-auto leading-relaxed">
          Explore the mystical world of spiritual practices through our curated collection of sacred tools, healing spaces, and divine moments.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-[90%] mx-auto px-4 mb-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {filterCategories.map(({ category, label }) => (
            <FilterButton
              key={category}
              category={category}
              label={label}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[90%] mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCardGallery {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-4">
          Experience the Sacred
        </h2>
        <p className="text-yellow-200 text-lg mb-8 leading-relaxed">
          Ready to create your own spiritual experience? Book a session and begin your transformative journey with Dr. Jinal K.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/booksession" className="relative group bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30">
            <span className="relative z-10">Book Your Session</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </a>
          <a href="/about" className="border border-yellow-400/40 text-yellow-400 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400/10 hover:border-yellow-400/60 transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SacredGallery;
