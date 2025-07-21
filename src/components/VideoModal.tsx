'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface VideoModalProps {
  videoId: string
  buttonText: string
  buttonClassName?: string
}

export function VideoModal({ videoId, buttonText, buttonClassName = '' }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const modalContent = isOpen ? (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="إغلاق الفيديو"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="فيديو تعريفي عن معهد اكسفورد للذكاء الاصطناعي"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        className={`inline-flex items-center gap-2 ${buttonClassName}`}
        onClick={() => setIsOpen(true)}
        aria-label="فتح الفيديو التعريفي"
        type="button"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
        {buttonText}
      </button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}

