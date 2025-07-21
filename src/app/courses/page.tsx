'use client'

import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: 'أساسيات الذكاء الاصطناعي',
    category: 'tech',
    city: 'دبي',
    date: '2024-02-15',
    duration: '5 أيام',
    level: 'مبتدئ',
    description: 'مقدمة شاملة لأساسيات الذكاء الاصطناعي وتطبيقاته'
  },
  {
    id: 2,
    title: 'القيادة الاستراتيجية',
    category: 'management',
    city: 'لندن',
    date: '2024-02-20',
    duration: '3 أيام',
    level: 'متقدم',
    description: 'تطوير مهارات القيادة الاستراتيجية للمديرين التنفيذيين'
  },
  {
    id: 3,
    title: 'التسويق الرقمي المتقدم',
    category: 'marketing',
    city: 'باريس',
    date: '2024-02-25',
    duration: '4 أيام',
    level: 'متوسط',
    description: 'استراتيجيات التسويق الرقمي الحديثة ووسائل التواصل الاجتماعي'
  },
  {
    id: 4,
    title: 'إدارة الموارد البشرية',
    category: 'hr',
    city: 'فرانكفورت',
    date: '2024-03-01',
    duration: '3 أيام',
    level: 'متوسط',
    description: 'أحدث ممارسات إدارة الموارد البشرية والتطوير المهني'
  },
  {
    id: 5,
    title: 'التحليل المالي المتقدم',
    category: 'finance',
    city: 'روما',
    date: '2024-03-05',
    duration: '4 أيام',
    level: 'متقدم',
    description: 'تقنيات التحليل المالي المتقدمة واتخاذ القرارات الاستثمارية'
  },
  {
    id: 6,
    title: 'الإعلام الرقمي',
    category: 'media',
    city: 'أمستردام',
    date: '2024-03-10',
    duration: '3 أيام',
    level: 'مبتدئ',
    description: 'أساسيات الإعلام الرقمي وإنتاج المحتوى'
  },
]

const categories = {
  all: 'جميع الدورات',
  tech: 'التقنية والبرمجة',
  management: 'الإدارة والقيادة',
  marketing: 'التسويق الرقمي',
  hr: 'الموارد البشرية',
  finance: 'المالية والمحاسبة',
  media: 'الإعلام والاتصال',
  secretary: 'السكرتاريا الذكية',
  education: 'التعليم والتدريب'
}

const cities = ['جميع المدن', 'دبي', 'لندن', 'باريس', 'فرانكفورت', 'روما', 'أمستردام', 'لوس أنجلوس', 'سنغافورة', 'برشلونة', 'مدريد', 'سيؤول', 'طوكيو']

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(courses)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCity, setSelectedCity] = useState('جميع المدن')
  const [searchTerm, setSearchTerm] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    // Handle URL parameters for filtering
    const cityParam = searchParams.get('city')
    const fieldParam = searchParams.get('field')

    if (cityParam) {
      setSelectedCity(cityParam)
    }

    if (fieldParam) {
      const fieldMap: { [key: string]: string } = {
        'الإدارة والقيادة': 'management',
        'المالية والمحاسبة': 'finance',
        'الإعلام والاتصال': 'media',
        'الموارد البشرية': 'hr',
        'السكرتاريا الذكية': 'secretary',
        'التقنية والبرمجة': 'tech',
        'التسويق الرقمي': 'marketing',
        'التعليم والتدريب': 'education'
      }
      const category = fieldMap[fieldParam]
      if (category) {
        setSelectedCategory(category)
      }
    }
  }, [searchParams])

  useEffect(() => {
    let filtered = courses

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    // Filter by city
    if (selectedCity !== 'جميع المدن') {
      filtered = filtered.filter(course => course.city === selectedCity)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredCourses(filtered)
  }, [selectedCategory, selectedCity, searchTerm])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">جدول الدورات التدريبية</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                اختر من بين مجموعة واسعة من الدورات التدريبية المتخصصة في أحدث التقنيات والمهارات
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-3">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="البحث في الدورات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-700 text-white px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true"></i>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-1 max-w-xs">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {Object.entries(categories).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div className="flex-1 max-w-xs">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-3">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16">
                <i className="fas fa-search text-6xl text-gray-600 mb-4" aria-hidden="true"></i>
                <h3 className="text-2xl font-bold text-gray-400 mb-2">لا توجد دورات مطابقة</h3>
                <p className="text-gray-500">جرب تغيير معايير البحث أو الفلترة</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="card-hover bg-gray-800 rounded-xl overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {categories[course.category as keyof typeof categories]}
                        </span>
                        <span className="text-gray-400 text-sm">{course.level}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-300">
                          <i className="fas fa-calendar-alt w-4 ml-2" aria-hidden="true"></i>
                          {formatDate(course.date)}
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <i className="fas fa-clock w-4 ml-2" aria-hidden="true"></i>
                          {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <i className="fas fa-map-marker-alt w-4 ml-2" aria-hidden="true"></i>
                          {course.city}
                        </div>
                      </div>
                      
                      <Link
                        href={`/courses/${course.id}`}
                        className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        عرض التفاصيل
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

