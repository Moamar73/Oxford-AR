import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'الرئيسية',
  description: 'معهد اكسفورد للذكاء الاصطناعي - رائد في تدريب الذكاء الاصطناعي والسرد القصصي. اكتشف قوة السرد القصصي في تعلم الذكاء الاصطناعي.',
  keywords: [
    'الذكاء الاصطناعي',
    'تدريب الذكاء الاصطناعي',
    'السرد القصصي',
    'معهد اكسفورد',
    'دورات تدريبية',
    'تعلم الآلة',
    'الذكاء الاصطناعي التطبيقي'
  ],
})

export default function Home() {
  const cities = [
    { name: 'لندن', country: 'المملكة المتحدة', color: 'bg-blue-500' },
    { name: 'باريس', country: 'فرنسا', color: 'bg-blue-400' },
    { name: 'فرانكفورت', country: 'ألمانيا', color: 'bg-yellow-500' },
    { name: 'روما', country: 'إيطاليا', color: 'bg-green-500' },
    { name: 'أمستردام', country: 'هولندا', color: 'bg-purple-500' },
    { name: 'دبي', country: 'الإمارات العربية المتحدة', color: 'bg-orange-500' },
    { name: 'لوس أنجلوس', country: 'الولايات المتحدة', color: 'bg-pink-500' },
    { name: 'سنغافورة', country: 'سنغافورة', color: 'bg-teal-500' },
    { name: 'برشلونة', country: 'إسبانيا', color: 'bg-cyan-500' },
    { name: 'مدريد', country: 'إسبانيا', color: 'bg-lime-500' },
    { name: 'سيؤول', country: 'كوريا الجنوبية', color: 'bg-rose-500' },
    { name: 'طوكيو', country: 'اليابان', color: 'bg-violet-500' },
  ]

  const courseFields = [
    {
      title: 'الإدارة والقيادة',
      description: 'تطوير مهارات القيادة الحديثة',
      icon: 'fa-users-cog',
      gradient: 'from-blue-500 to-purple-600',
      field: 'الإدارة والقيادة'
    },
    {
      title: 'المالية والمحاسبة',
      description: 'إدارة مالية متقدمة وذكية',
      icon: 'fa-chart-line',
      gradient: 'from-green-500 to-teal-600',
      field: 'المالية والمحاسبة'
    },
    {
      title: 'الإعلام والاتصال',
      description: 'استراتيجيات الاتصال الحديثة',
      icon: 'fa-broadcast-tower',
      gradient: 'from-orange-500 to-red-600',
      field: 'الإعلام والاتصال'
    },
    {
      title: 'الموارد البشرية',
      description: 'إدارة المواهب والتطوير',
      icon: 'fa-user-tie',
      gradient: 'from-purple-500 to-pink-600',
      field: 'الموارد البشرية'
    },
    {
      title: 'السكرتاريا الذكية',
      description: 'مهارات إدارية متطورة',
      icon: 'fa-clipboard-list',
      gradient: 'from-indigo-500 to-blue-600',
      field: 'السكرتاريا الذكية'
    },
    {
      title: 'التقنية والبرمجة',
      description: 'تطوير البرمجيات والتقنيات',
      icon: 'fa-code',
      gradient: 'from-cyan-500 to-blue-600',
      field: 'التقنية والبرمجة'
    },
    {
      title: 'التسويق الرقمي',
      description: 'استراتيجيات التسويق المتقدمة',
      icon: 'fa-bullhorn',
      gradient: 'from-pink-500 to-rose-600',
      field: 'التسويق الرقمي'
    },
    {
      title: 'التعليم والتدريب',
      description: 'منهجيات التعليم الحديثة',
      icon: 'fa-graduation-cap',
      gradient: 'from-yellow-500 to-orange-600',
      field: 'التعليم والتدريب'
    },
  ]

  const articles = [
    {
      id: 'future-of-education',
      title: 'مستقبل التعليم بالذكاء الاصطناعي',
      excerpt: 'كيف يغير الذكاء الاصطناعي وجه التعليم والتدريب في العالم',
      date: '2024-01-15',
      image: '/images/ai-education.jpg'
    },
    {
      id: 'storytelling-power',
      title: 'قوة السرد القصصي في التدريب',
      excerpt: 'اكتشف كيف يمكن للسرد القصصي أن يحول تجربة التعلم',
      date: '2024-01-10',
      image: '/images/storytelling.jpg'
    },
    {
      id: 'ai-business-applications',
      title: 'تطبيقات الذكاء الاصطناعي في الأعمال',
      excerpt: 'استكشف أحدث تطبيقات الذكاء الاصطناعي في بيئة الأعمال',
      date: '2024-01-05',
      image: '/images/ai-business.jpg'
    },
  ]

  return (
    <>
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-3 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Main Icon */}
              <div className="mb-8">
                <div className="w-32 h-32 ai-gradient rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <i className="fas fa-robot text-white text-5xl" aria-hidden="true"></i>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                مستقبل التدريب{' '}
                <span className="text-blue-400">بالذكاء الاصطناعي</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                اكتشف قوة السرد القصصي في تعلم الذكاء الاصطناعي. تحول المفاهيم المعقدة إلى قصص ملهمة وتجارب تعليمية لا تُنسى
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const iframe = document.createElement('iframe')
                    iframe.src = 'https://www.youtube.com/embed/wGlqceAQVYA?autoplay=1'
                    iframe.width = '560'
                    iframe.height = '315'
                    iframe.frameBorder = '0'
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    iframe.allowFullscreen = true

                    const modal = document.createElement('div')
                    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
                    modal.onclick = (e) => {
                      if (e.target === modal) {
                        document.body.removeChild(modal)
                      }
                    }

                    const container = document.createElement('div')
                    container.className = 'relative bg-black rounded-lg overflow-hidden max-w-4xl w-full'
                    container.appendChild(iframe)

                    const closeBtn = document.createElement('button')
                    closeBtn.innerHTML = '×'
                    closeBtn.className = 'absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75'
                    closeBtn.onclick = () => document.body.removeChild(modal)
                    container.appendChild(closeBtn)

                    modal.appendChild(container)
                    document.body.appendChild(modal)
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-play mr-2" aria-hidden="true"></i>
                  ابدأ رحلتك التعليمية
                </button>
                <Link
                  href="/training-methodology"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-info-circle mr-2" aria-hidden="true"></i>
                  اعرف المزيد
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Vision */}
                <div className="text-center">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-eye text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                  <p className="text-gray-300 leading-relaxed">
                    أن نكون الرائدين عالمياً في تدريب الذكاء الاصطناعي من خلال السرد القصصي المبتكر
                  </p>
                </div>

                {/* Mission */}
                <div className="text-center">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-target text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
                  <p className="text-gray-300 leading-relaxed">
                    تمكين الأفراد والمؤسسات من إتقان الذكاء الاصطناعي من خلال تجارب تعليمية تفاعلية وممتعة
                  </p>
                </div>

                {/* Values */}
                <div className="text-center">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-heart text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
                  <p className="text-gray-300 leading-relaxed">
                    الابتكار، التميز، الشغف بالتعلم، والالتزام بتقديم أفضل تجربة تعليمية ممكنة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section id="cities" className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">مدننا العالمية</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نقدم دوراتنا التدريبية في أهم المدن العالمية لنكون قريبين منك أينما كنت
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="card-hover bg-gray-800 p-6 rounded-xl cursor-pointer group"
                  onClick={() => {
                    window.location.href = `/courses?city=${encodeURIComponent(city.name)}`
                  }}
                >
                  <div className={`w-12 h-12 ${city.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className="fas fa-map-marker-alt text-white" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{city.name}</h3>
                  <p className="text-gray-400">{city.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Fields Section */}
        <section id="courses" className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">مجالات دوراتنا</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                اختر من بين مجموعة واسعة من المجالات التخصصية المصممة لتلبية احتياجات السوق الحديث
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseFields.map((field, index) => (
                <div
                  key={index}
                  className={`card-hover bg-gradient-to-br ${field.gradient} p-6 rounded-xl cursor-pointer group`}
                  onClick={() => {
                    window.location.href = `/courses?field=${encodeURIComponent(field.field)}`
                  }}
                >
                  <div className="text-center">
                    <i className={`fas ${field.icon} text-4xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true"></i>
                    <h3 className="text-xl font-bold mb-3 text-white">{field.title}</h3>
                    <p className="text-white text-opacity-90 text-sm">{field.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">أحدث المقالات</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                اطلع على أحدث المقالات والأبحاث في مجال الذكاء الاصطناعي والتدريب
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="card-hover bg-gray-800 rounded-xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <i className="fas fa-newspaper text-4xl text-white" aria-hidden="true"></i>
                  </div>
                  <div className="p-6">
                    <time className="text-blue-400 text-sm font-medium">
                      {new Date(article.date).toLocaleDateString('ar-SA')}
                    </time>
                    <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link
                      href={`/articles/${article.id}`}
                      className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                    >
                      اقرأ المزيد
                      <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/articles"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                عرض جميع المقالات
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

