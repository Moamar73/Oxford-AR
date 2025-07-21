'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: '/images/ai-design-1.png',
    alt: 'قاعة تدريب حديثة مجهزة بأحدث التقنيات',
    title: 'قاعات التدريب المتطورة',
    description: 'قاعات مجهزة بأحدث التقنيات التفاعلية'
  },
  {
    id: 2,
    src: '/images/ai-design-2.jpg',
    alt: 'مختبر الذكاء الاصطناعي للتطبيقات العملية',
    title: 'مختبر الذكاء الاصطناعي',
    description: 'مختبرات متخصصة للتطبيقات العملية'
  },
  {
    id: 3,
    src: '/images/ai-interface.jpg',
    alt: 'واجهة تفاعلية لنظام التعلم الذكي',
    title: 'أنظمة التعلم الذكية',
    description: 'واجهات تفاعلية متطورة للتعلم'
  },
  {
    id: 4,
    src: '/images/futuristic-design.jpg',
    alt: 'تصميم مستقبلي لبيئة التعلم الرقمية',
    title: 'بيئة التعلم المستقبلية',
    description: 'تصاميم مبتكرة لتجربة تعليمية فريدة'
  }
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSelectedImage(null)
    } else if (event.key === 'ArrowLeft' && selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex].id)
    } else if (event.key === 'ArrowRight' && selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
      setSelectedImage(galleryImages[prevIndex].id)
    }
  }

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
    let newIndex: number
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    }
    
    setSelectedImage(galleryImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null

  const modalContent = selectedImage && selectedImageData ? (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
      onClick={() => setSelectedImage(null)}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div 
        className="relative max-w-4xl max-h-full bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
          onClick={() => setSelectedImage(null)}
          aria-label="إغلاق الصورة"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
          onClick={() => navigateImage('next')}
          aria-label="الصورة التالية"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
          onClick={() => navigateImage('prev')}
          aria-label="الصورة السابقة"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative">
          <Image
            src={selectedImageData.src}
            alt={selectedImageData.alt}
            width={800}
            height={600}
            className="max-w-full max-h-[80vh] object-contain"
            priority
          />
          
          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 id="image-modal-title" className="text-white text-xl font-bold mb-2">
              {selectedImageData.title}
            </h3>
            <p className="text-gray-300">
              {selectedImageData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800"
            onClick={() => setSelectedImage(image.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedImage(image.id)
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`فتح ${image.title} في المعرض`}
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <div className="relative h-48">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                itemProp="contentUrl"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Hidden structured data */}
            <div style={{ display: 'none' }}>
              <span itemProp="name">{image.title}</span>
              <span itemProp="description">{image.description}</span>
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">معهد اكسفورد للذكاء الاصطناعي</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}

