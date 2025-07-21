import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = generateMetadata({
  title: 'السرد القصصي - منهجية ماكنزي',
  description: 'تعلم فن السرد القصصي باستخدام منهجية ماكنزي المتقدمة. اكتشف كيف تحول أفكارك إلى قصص مؤثرة وفعالة في بيئة العمل.',
  keywords: [
    'السرد القصصي',
    'منهجية ماكنزي',
    'فن السرد',
    'التواصل الفعال',
    'العرض والتقديم',
    'القصص في الأعمال',
    'تقنيات السرد',
    'McKinsey methodology'
  ],
})

export default function StorytellingPage() {
  const principles = [
    {
      title: 'الوضع (Situation)',
      description: 'تحديد السياق والخلفية التي تحدث فيها القصة',
      icon: 'fa-map-marker-alt',
      color: 'from-blue-500 to-cyan-600',
      details: [
        'تحديد الزمان والمكان',
        'وصف الشخصيات الرئيسية',
        'تقديم السياق العام',
        'إعداد المسرح للأحداث'
      ]
    },
    {
      title: 'التعقيد (Complication)',
      description: 'تقديم التحدي أو المشكلة التي تحتاج إلى حل',
      icon: 'fa-exclamation-triangle',
      color: 'from-red-500 to-pink-600',
      details: [
        'تحديد المشكلة الأساسية',
        'إظهار تأثير المشكلة',
        'خلق التوتر والإثارة',
        'جذب انتباه الجمهور'
      ]
    },
    {
      title: 'السؤال (Question)',
      description: 'طرح السؤال الرئيسي الذي تجيب عليه القصة',
      icon: 'fa-question-circle',
      color: 'from-yellow-500 to-orange-600',
      details: [
        'صياغة السؤال المحوري',
        'ربط السؤال بالمشكلة',
        'إثارة فضول الجمهور',
        'توجيه التفكير نحو الحل'
      ]
    },
    {
      title: 'الإجابة (Answer)',
      description: 'تقديم الحل أو التوصية بطريقة واضحة ومقنعة',
      icon: 'fa-lightbulb',
      color: 'from-green-500 to-teal-600',
      details: [
        'تقديم الحل المقترح',
        'شرح كيفية التنفيذ',
        'إظهار الفوائد المتوقعة',
        'دعم الحل بالأدلة'
      ]
    }
  ]

  const techniques = [
    {
      title: 'استخدام البيانات',
      description: 'دمج الإحصائيات والأرقام في السرد لتعزيز المصداقية',
      icon: 'fa-chart-bar'
    },
    {
      title: 'الشخصيات المؤثرة',
      description: 'إنشاء شخصيات يمكن للجمهور التعاطف معها',
      icon: 'fa-users'
    },
    {
      title: 'التصور البصري',
      description: 'استخدام الصور والرسوم البيانية لتوضيح النقاط',
      icon: 'fa-image'
    },
    {
      title: 'التسلسل المنطقي',
      description: 'ترتيب الأحداث بطريقة منطقية ومتدرجة',
      icon: 'fa-list-ol'
    },
    {
      title: 'العاطفة والمنطق',
      description: 'الموازنة بين الجانب العاطفي والمنطقي في السرد',
      icon: 'fa-heart'
    },
    {
      title: 'الخاتمة القوية',
      description: 'إنهاء القصة بخاتمة مؤثرة ولا تُنسى',
      icon: 'fa-flag-checkered'
    }
  ]

  const benefits = [
    {
      title: 'تحسين التواصل',
      description: 'القدرة على إيصال الأفكار بوضوح وفعالية',
      percentage: '95%'
    },
    {
      title: 'زيادة التأثير',
      description: 'جعل الرسائل أكثر إقناعاً وتأثيراً على الجمهور',
      percentage: '88%'
    },
    {
      title: 'تعزيز الذاكرة',
      description: 'مساعدة الجمهور على تذكر المعلومات لفترة أطول',
      percentage: '92%'
    },
    {
      title: 'بناء الثقة',
      description: 'زيادة الثقة في العرض والتقديم أمام الجمهور',
      percentage: '85%'
    }
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">السرد القصصي</h1>
              <h2 className="text-2xl md:text-3xl text-purple-300 mb-8">منهجية ماكنزي المتقدمة</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                تعلم فن السرد القصصي باستخدام منهجية ماكنزي العالمية لتحويل أفكارك إلى قصص مؤثرة وفعالة
              </p>
            </div>
          </div>
        </section>

        {/* McKinsey Framework */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">إطار عمل ماكنزي للسرد</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                منهجية مُجربة ومُثبتة علمياً تستخدمها أكبر الشركات الاستشارية في العالم
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="card-hover bg-gray-900 rounded-xl overflow-hidden">
                  <div className={`h-32 bg-gradient-to-br ${principle.color} flex items-center justify-center`}>
                    <i className={`fas ${principle.icon} text-4xl text-white`} aria-hidden="true"></i>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <i className="fas fa-check text-green-400 text-xs mr-2" aria-hidden="true"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storytelling Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">عملية بناء القصة</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  خطوات منهجية لبناء قصة مؤثرة وفعالة باستخدام إطار عمل ماكنزي
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>

                {principles.map((step, index) => (
                  <div key={index} className={`flex items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1 lg:w-1/2">
                      <div className={`bg-gray-800 p-8 rounded-xl ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mr-4`}>
                            <i className={`fas ${step.icon} text-white`} aria-hidden="true"></i>
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{step.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-400">
                              <i className="fas fa-arrow-left text-blue-400 text-xs mr-2" aria-hidden="true"></i>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="hidden lg:block w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                    
                    <div className="flex-1 lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">تقنيات السرد المتقدمة</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                أدوات وتقنيات متخصصة لجعل قصصك أكثر تأثيراً وإقناعاً
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techniques.map((technique, index) => (
                <div key={index} className="card-hover bg-gray-900 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${technique.icon} text-white text-xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{technique.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{technique.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Results */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فوائد إتقان السرد القصصي</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                النتائج المثبتة علمياً لتطبيق منهجية ماكنزي في السرد
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${parseInt(benefit.percentage)}, 100`}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-400">{benefit.percentage}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">قصة نجاح حقيقية</h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-white">الوضع:</strong> شركة تقنية ناشئة تواجه صعوبة في إقناع المستثمرين بفكرة منتجها الجديد.
                    </p>
                    <p className="text-lg">
                      <strong className="text-white">التعقيد:</strong> فشل في الحصول على التمويل رغم قوة المنتج تقنياً، بسبب ضعف العرض التقديمي.
                    </p>
                    <p className="text-lg">
                      <strong className="text-white">السؤال:</strong> كيف يمكن تحويل العرض التقني المعقد إلى قصة مقنعة ومؤثرة؟
                    </p>
                    <p className="text-lg">
                      <strong className="text-white">الإجابة:</strong> تطبيق منهجية ماكنزي للسرد، مما أدى إلى الحصول على تمويل بقيمة 5 مليون دولار.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-trophy text-8xl text-white opacity-80" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700">
          <div className="container mx-auto px-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ رحلتك في إتقان السرد</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              انضم إلى دوراتنا المتخصصة في السرد القصصي وتعلم منهجية ماكنزي من خبراء معتمدين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تصفح دورات السرد
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                احجز جلسة تجريبية
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

