import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ title, description, includedServices, logo }) => {
  return (
    <div className="w-full max-w-2xl h-auto sm:h-[400px] mx-auto 
      bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] 
      text-yellow-400 rounded-2xl shadow-lg p-6 border border-yellow-400/20
      flex flex-col justify-between 
      hover:-translate-y-1 hover:shadow-yellow-400/30 
      transition duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-2xl">{logo}</span>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text">
            {title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-yellow-200 text-md mb-4">
        {description}
      </p>

      {/* What's Included */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-lg">What's Included:</h3>
        <ul className="space-y-1 text-yellow-200 text-md list-disc list-inside">
          {includedServices && includedServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Button */}
          <Link href="/contact">
              <button
                  className="relative group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:shadow-2xl border border-[#d4af37]/30"
              >
                  <span className="relative z-10">Book This Service</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </button>
          </Link>

    </div>
  )
}

export default ServiceCard
