'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Field {
  title: string
  description: string
  icon: string
  coursesCount: number
  category: string
}

interface FieldCardProps {
  field: Field
  index: number
}

export function FieldCard({ field, index }: FieldCardProps) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleFieldClick = () => {
    router.push(`/courses?field=${encodeURIComponent(field.title)}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleFieldClick()
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
      onClick={handleFieldClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`عرض دورات ${field.title} - ${field.coursesCount} دورة متاحة`}
      itemScope
      itemType="https://schema.org/Course"
    >
      <div className="text-4xl mb-4" role="img" aria-label={field.title}>
        {field.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white" itemProp="name">
        {field.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed" itemProp="description">
        {field.description}
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-blue-400 font-semibold" itemProp="numberOfCredits">
          {field.coursesCount} دورة
        </span>
        
        <div className="flex items-center text-blue-400">
          <span className="ml-2">استكشف</span>
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12l-3-3m0 0l-3 3m3-3v12" 
            />
          </svg>
        </div>
      </div>

      {/* Hidden structured data */}
      <div style={{ display: 'none' }}>
        <span itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">معهد اكسفورد للذكاء الاصطناعي</span>
        </span>
        <span itemProp="courseMode">classroom</span>
        <span itemProp="educationalLevel">professional</span>
      </div>
    </div>
  )
}

