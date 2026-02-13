'use client'
import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Filter, Search } from 'lucide-react';

// Product Card Component
const ProductCard = ({ id, name, price, originalPrice, image, rating, reviews, inStock, category, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/20 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-[#3a0d1e]/20 to-[#480026]/20">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingCart className="w-20 h-20 text-[#d4af37]/30" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!inStock && (
            <span className="bg-red-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
          {discount > 0 && (
            <span className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#3a0d1e] text-xs font-bold px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 hover:scale-110"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs text-[#d4af37] font-medium uppercase tracking-wider">
          {category}
        </span>

        {/* Product Name */}
        <h3 className="mt-2 text-lg font-semibold text-[#FEF2CD] line-clamp-2 min-h-[3.5rem]">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm text-[#FEF2CD]/70 line-clamp-2">
            {description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
              />
            ))}
          </div>
          <span className="text-sm text-[#FEF2CD]/70">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            ₹{price}
          </span>
          {originalPrice && (
            <span className="text-sm text-[#FEF2CD]/50 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!inStock}
          className={`w-full mt-4 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            inStock
              ? 'bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] hover:shadow-lg hover:shadow-[#d4af37]/50 hover:scale-[1.02]'
              : 'bg-gray-500/30 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

// Main Products Page
const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Sample products - replace with real data later
  const sampleProducts = [
    // You can add sample products here for testing
    // Example:
    // {
    //   id: 1,
    //   name: "Crystal Healing Set",
    //   price: 2999,
    //   originalPrice: 3999,
    //   image: "/products/crystal-set.jpg",
    //   rating: 4.5,
    //   reviews: 128,
    //   inStock: true,
    //   category: "Healing Tools",
    //   description: "Complete set of healing crystals for spiritual wellness"
    // },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'crystals', label: 'Crystals' },
    { id: 'healing-tools', label: 'Healing Tools' },
    { id: 'tarot', label: 'Tarot Cards' },
    { id: 'books', label: 'Books' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
  ];

  // Filter and sort products
  const filteredProducts = sampleProducts
    .filter(product => 
      (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       product.description?.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-800/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-4">
            Sacred Products
          </h1>
          <p className="text-lg md:text-xl text-[#FEF2CD]/80 max-w-2xl mx-auto">
            Discover authentic spiritual tools and accessories for your divine journey
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-6xl mx-auto mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d4af37]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-[#d4af37]/30 rounded-lg text-[#FEF2CD] placeholder-[#FEF2CD]/50 focus:border-[#d4af37] focus:outline-none transition-colors"
            />
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-[#d4af37]" />
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e]'
                      : 'text-yellow-200 hover:text-yellow-400 hover:bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-[#d4af37]/30 rounded-lg text-[#FEF2CD] focus:border-[#d4af37] focus:outline-none transition-colors appearance-none pr-10"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-[#2a0015] text-[#FEF2CD]">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          /* Coming Soon / Empty State */
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-[#d4af37]/20">
              <div className="inline-block p-6 bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/10 rounded-full mb-6">
                <ShoppingCart className="w-16 h-16 text-[#d4af37]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-4">
                Products Coming Soon
              </h2>
              
              <p className="text-lg text-[#FEF2CD]/80 mb-8 max-w-2xl mx-auto">
                We're carefully curating a collection of authentic spiritual products for your journey. 
                Stay tuned for crystals, healing tools, tarot cards, and more!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/booksession" 
                  className="relative group bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30"
                >
                  <span className="relative z-10">Book a Session Instead</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </a>
                
                <a 
                  href="/contact" 
                  className="border border-yellow-400/40 text-yellow-400 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400/10 hover:border-yellow-400/60 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>

              {/* Explore Alternatives */}
              <div className="mt-12 pt-8 border-t border-[#d4af37]/20">
                <p className="text-[#FEF2CD]/90 mb-6 text-lg">In the meantime, explore what we offer</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a href="/services" className="group p-4 bg-white/5 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[#FBD051] mb-2 group-hover:text-[#ffd700]">Our Services</h4>
                    <p className="text-sm text-[#FEF2CD]/70">Explore tarot readings, healings, and more</p>
                  </a>
                  <a href="/gallery" className="group p-4 bg-white/5 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[#FBD051] mb-2 group-hover:text-[#ffd700]">View Gallery</h4>
                    <p className="text-sm text-[#FEF2CD]/70">See our spiritual practices in action</p>
                  </a>
                  <a href="/testimonials" className="group p-4 bg-white/5 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-semibold text-[#FBD051] mb-2 group-hover:text-[#ffd700]">Testimonials</h4>
                    <p className="text-sm text-[#FEF2CD]/70">Read success stories from clients</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Authentic Products", description: "100% genuine spiritual tools" },
            { title: "Secure Payments", description: "Safe and encrypted transactions" },
            { title: "Fast Delivery", description: "Quick shipping across India" }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#d4af37]/20 text-center">
              <h3 className="text-lg font-semibold text-[#FBD051] mb-2">{item.title}</h3>
              <p className="text-[#FEF2CD]/70">{item.description}</p>
            </div>
          ))}
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

export default ProductsPage;
