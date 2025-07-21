'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface City {
  name: string
  color: string
  country: string
  description: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface CityCardProps {
  city: City
  index: number
}

export function CityCard({ city, index }: CityCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleCityClick = () => {
    router.push(`/courses?city=${encodeURIComponent(city.name)}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCityClick()
    }
  }

  return (
    <div
      className={`
        bg-gray-800 rounded-lg p-6 text-center cursor-pointer 
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        ${isHovered ? 'bg-gray-700' : ''}
      `}
      onClick={handleCityClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`عرض الدورات في ${city.name}, ${city.country}`}
      itemScope
      itemType="https://schema.org/Place"
    >
      <div className="mb-4">
        <div 
          className={`text-2xl font-bold ${city.color} transition-colors duration-300`}
          itemProp="name"
        >
          {city.name}
        </div>
        <div className="text-sm text-gray-400 mt-1" itemProp="addressCountry">
          {city.country}
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4" itemProp="description">
        {city.description}
      </p>
      
      <div className="flex items-center justify-center text-blue-400">
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
        <span className="text-sm">عرض الدورات</span>
      </div>

      {/* Hidden structured data */}
      <div style={{ display: 'none' }}>
        <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <span itemProp="latitude">{city.coordinates.lat}</span>
          <span itemProp="longitude">{city.coordinates.lng}</span>
        </span>
      </div>
    </div>
  )
}

