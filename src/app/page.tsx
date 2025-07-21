import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { CityCard } from '@/components/CityCard'
import { FieldCard } from '@/components/FieldCard'
import { VideoModal } from '@/components/VideoModal'
import { ImageGallery } from '@/components/ImageGallery'

// SEO Metadata محسنة
export const metadata: Metadata = {
  title: 'معهد اكسفورد للذكاء الاصطناعي | مستقبل التدريب بالذكاء الاصطناعي',
  description: 'معهد اكسفورد للذكاء الاصطناعي يقدم دورات تدريبية متقدمة في 12 مدينة عالمية. تعلم الذكاء الاصطناعي، الإدارة، المالية، والتسويق الرقمي مع خبراء عالميين.',
  keywords: [
    'معهد اكسفورد',
    'الذكاء الاصطناعي',
    'دورات تدريبية',
    'تدريب متقدم',
    'لندن',
    'باريس',
    'دبي',
    'سنغافورة',
    'الإدارة والقيادة',
    'المالية والمحاسبة',
    'التسويق الرقمي',
    'الموارد البشرية'
  ],
  authors: [{ name: 'معهد اكسفورد للذكاء الاصطناعي' }],
  creator: 'معهد اكسفورد للذكاء الاصطناعي',
  publisher: 'معهد اكسفورد للذكاء الاصطناعي',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oxford-ai-institute.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'معهد اكسفورد للذكاء الاصطناعي | مستقبل التدريب بالذكاء الاصطناعي',
    description: 'معهد اكسفورد للذكاء الاصطناعي يقدم دورات تدريبية متقدمة في 12 مدينة عالمية. تعلم مع خبراء عالميين.',
    url: '/',
    siteName: 'معهد اكسفورد للذكاء الاصطناعي',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'معهد اكسفورد للذكاء الاصطناعي',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'معهد اكسفورد للذكاء الاصطناعي',
    description: 'مستقبل التدريب بالذكاء الاصطناعي في 12 مدينة عالمية',
    images: ['/images/twitter-image.jpg'],
    creator: '@oxford_ai_institute',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

// بيانات المدن مع تحسينات SEO
const cities = [
  { 
    name: 'لندن', 
    color: 'text-blue-400',
    country: 'المملكة المتحدة',
    description: 'العاصمة المالية الأوروبية',
    coordinates: { lat: 51.5074, lng: -0.1278 }
  },
  { 
    name: 'باريس', 
    color: 'text-blue-300',
    country: 'فرنسا',
    description: 'مدينة الأنوار والثقافة',
    coordinates: { lat: 48.8566, lng: 2.3522 }
  },
  { 
    name: 'فرانكفورت', 
    color: 'text-yellow-400',
    country: 'ألمانيا',
    description: 'المركز المصرفي الأوروبي',
    coordinates: { lat: 50.1109, lng: 8.6821 }
  },
  { 
    name: 'روما', 
    color: 'text-green-400',
    country: 'إيطاليا',
    description: 'المدينة الخالدة',
    coordinates: { lat: 41.9028, lng: 12.4964 }
  },
  { 
    name: 'أمستردام', 
    color: 'text-purple-400',
    country: 'هولندا',
    description: 'مركز التكنولوجيا الأوروبي',
    coordinates: { lat: 52.3676, lng: 4.9041 }
  },
  { 
    name: 'دبي', 
    color: 'text-orange-400',
    country: 'الإمارات العربية المتحدة',
    description: 'مدينة المستقبل',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  { 
    name: 'لوس أنجلوس', 
    color: 'text-pink-400',
    country: 'الولايات المتحدة',
    description: 'مدينة الملائكة',
    coordinates: { lat: 34.0522, lng: -118.2437 }
  },
  { 
    name: 'سنغافورة', 
    color: 'text-teal-400',
    country: 'سنغافورة',
    description: 'بوابة آسيا',
    coordinates: { lat: 1.3521, lng: 103.8198 }
  },
  { 
    name: 'برشلونة', 
    color: 'text-cyan-400',
    country: 'إسبانيا',
    description: 'عاصمة كاتالونيا',
    coordinates: { lat: 41.3851, lng: 2.1734 }
  },
  { 
    name: 'مدريد', 
    color: 'text-lime-400',
    country: 'إسبانيا',
    description: 'العاصمة الإسبانية',
    coordinates: { lat: 40.4168, lng: -3.7038 }
  },
  { 
    name: 'سيؤول', 
    color: 'text-rose-400',
    country: 'كوريا الجنوبية',
    description: 'مدينة التكنولوجيا',
    coordinates: { lat: 37.5665, lng: 126.9780 }
  },
  { 
    name: 'طوكيو', 
    color: 'text-violet-400',
    country: 'اليابان',
    description: 'عاصمة اليابان',
    coordinates: { lat: 35.6762, lng: 139.6503 }
  }
]

// بيانات المجالات مع تحسينات SEO
const fields = [
  {
    title: 'الإدارة والقيادة',
    description: 'تطوير مهارات القيادة الإستراتيجية والإدارة الحديثة',
    icon: '👥',
    coursesCount: 15,
    category: 'management'
  },
  {
    title: 'المالية والمحاسبة',
    description: 'إتقان التحليل المالي والمحاسبة المتقدمة',
    icon: '💰',
    coursesCount: 12,
    category: 'finance'
  },
  {
    title: 'الإعلام والاتصال',
    description: 'استراتيجيات الإعلام الرقمي والاتصال الفعال',
    icon: '📺',
    coursesCount: 8,
    category: 'media'
  },
  {
    title: 'الموارد البشرية',
    description: 'إدارة المواهب وتطوير الموارد البشرية',
    icon: '👤',
    coursesCount: 10,
    category: 'hr'
  },
  {
    title: 'السكرتاريا الذكية',
    description: 'مهارات السكرتاريا التنفيذية والإدارية',
    icon: '📋',
    coursesCount: 6,
    category: 'secretary'
  },
  {
    title: 'التقنية والبرمجة',
    description: 'تطوير البرمجيات والتقنيات الحديثة',
    icon: '💻',
    coursesCount: 18,
    category: 'tech'
  },
  {
    title: 'التسويق الرقمي',
    description: 'استراتيجيات التسويق الإلكتروني والرقمي',
    icon: '📱',
    coursesCount: 14,
    category: 'marketing'
  },
  {
    title: 'التعليم والتدريب',
    description: 'منهجيات التدريب الحديثة والتعليم التفاعلي',
    icon: '🎓',
    coursesCount: 9,
    category: 'education'
  }
]

// بيانات المقالات مع تحسينات SEO
const articles = [
  {
    id: 'future-of-education',
    title: 'مستقبل التعليم بالذكاء الاصطناعي',
    excerpt: 'كيف يغير الذكاء الاصطناعي وجه التعليم والتدريب في العالم',
    author: 'د. أحمد محمد',
    publishDate: '2024-01-15',
    readTime: '5 دقائق',
    category: 'تكنولوجيا التعليم',
    image: '/images/ai-education.jpg'
  },
  {
    id: 'storytelling-power',
    title: 'قوة السرد القصصي في التدريب',
    excerpt: 'اكتشف كيف تجعل التدريب أكثر تأثيراً من خلال السرد القصصي',
    author: 'د. فاطمة علي',
    publishDate: '2024-01-10',
    readTime: '7 دقائق',
    category: 'منهجيات التدريب',
    image: '/images/storytelling.jpg'
  },
  {
    id: 'ai-business-applications',
    title: 'تطبيقات الذكاء الاصطناعي في الأعمال',
    excerpt: 'دليل شامل لاستخدام الذكاء الاصطناعي في بيئة الأعمال',
    author: 'د. محمد حسن',
    publishDate: '2024-01-05',
    readTime: '6 دقائق',
    category: 'ذكاء اصطناعي',
    image: '/images/ai-business.jpg'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData />
      
      <div className="min-h-screen bg-gray-900 text-white" dir="rtl" lang="ar">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/ai-background.jpg')] bg-cover bg-center opacity-10"></div>
            
            <div className="container mx-auto px-3 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  مستقبل التدريب{' '}
                  <span className="text-blue-400">بالذكاء الاصطناعي</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  انضم إلى معهد اكسفورد للذكاء الاصطناعي واكتشف عالماً جديداً من التدريب المتقدم 
                  في 12 مدينة عالمية مع أحدث تقنيات الذكاء الاصطناعي
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link 
                    href="/courses"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="استكشف دوراتنا التدريبية"
                  >
                    استكشف دوراتنا
                  </Link>
                  
                  <VideoModal 
                    videoId="dQw4w9WgXcQ"
                    buttonText="شاهد الفيديو التعريفي"
                    buttonClassName="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-400">12</div>
                    <div className="text-sm text-gray-300">مدينة عالمية</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400">500+</div>
                    <div className="text-sm text-gray-300">دورة تدريبية</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-300">خبير عالمي</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-orange-400">10K+</div>
                    <div className="text-sm text-gray-300">متدرب سنوياً</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-3">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">مهمتنا</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  نسعى لتمكين الأفراد والمؤسسات من خلال برامج تدريبية متطورة تجمع بين أحدث تقنيات الذكاء الاصطناعي 
                  ومنهجيات السرد القصصي المبتكرة، لنساهم في بناء جيل قادر على مواجهة تحديات المستقبل بثقة وإبداع.
                </p>
              </div>
            </div>
          </section>

          {/* Cities Section */}
          <section className="py-20">
            <div className="container mx-auto px-3">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">مدننا العالمية</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  نقدم دوراتنا التدريبية في 12 مدينة عالمية مختارة بعناية لتوفير أفضل بيئة تعليمية وثقافية
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cities.map((city, index) => (
                  <CityCard 
                    key={city.name}
                    city={city}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Fields Section */}
          <section className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-3">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">مجالات التدريب</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  نغطي 8 مجالات تدريبية رئيسية مع أكثر من 500 دورة متخصصة تلبي احتياجات السوق الحديثة
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fields.map((field, index) => (
                  <FieldCard 
                    key={field.title}
                    field={field}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Image Gallery Section */}
          <section className="py-20">
            <div className="container mx-auto px-3">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">معرض الصور</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  اكتشف بيئة التعلم المتطورة في معاهدنا حول العالم
                </p>
              </div>
              
              <ImageGallery />
            </div>
          </section>

          {/* Articles Section */}
          <section className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-3">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">أحدث المقالات</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  اطلع على أحدث الأبحاث والمقالات في مجال الذكاء الاصطناعي والتدريب
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article key={article.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                          {article.category}
                        </span>
                        <time dateTime={article.publishDate}>
                          {new Date(article.publishDate).toLocaleDateString('ar-SA')}
                        </time>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
                        <Link href={`/articles/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          بواسطة {article.author}
                        </span>
                        
                        <Link 
                          href={`/articles/${article.id}`}
                          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                          aria-label={`اقرأ المزيد عن ${article.title}`}
                        >
                          اقرأ المزيد ←
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  href="/articles"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  عرض جميع المقالات
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-bold mb-6">ابدأ رحلتك التعليمية اليوم</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  انضم إلى آلاف المتدربين الذين طوروا مهاراتهم وحققوا أهدافهم المهنية معنا
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/courses"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    تصفح الدورات
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

