import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = generateMetadata({
  title: 'أسلوبنا التدريبي',
  description: 'تعرف على أسلوبنا التدريبي المبتكر في معهد اكسفورد للذكاء الاصطناعي، والذي يجمع بين أحدث التقنيات والسرد القصصي لتجربة تعليمية فريدة.',
  keywords: [
    'أسلوب التدريب',
    'منهجية التدريب',
    'التدريب التفاعلي',
    'السرد القصصي',
    'التعلم النشط',
    'تقنيات التدريب',
    'الذكاء الاصطناعي في التعليم'
  ],
})

export default function TrainingMethodologyPage() {
  const methodologies = [
    {
      title: 'التعلم التفاعلي',
      description: 'نعتمد على التفاعل المباشر بين المدرب والمتدربين لضمان الفهم العميق',
      icon: 'fa-users',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'السرد القصصي',
      description: 'نحول المفاهيم المعقدة إلى قصص ممتعة وسهلة الفهم والتذكر',
      icon: 'fa-book-open',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'التطبيق العملي',
      description: 'نركز على التطبيق العملي للمفاهيم النظرية في مشاريع حقيقية',
      icon: 'fa-cogs',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'التعلم المخصص',
      description: 'نكيف المحتوى والوتيرة حسب احتياجات ومستوى كل متدرب',
      icon: 'fa-user-cog',
      color: 'from-orange-500 to-red-600'
    },
  ]

  const features = [
    {
      title: 'بيئة تعلم محفزة',
      description: 'نوفر بيئة تعليمية إيجابية تشجع على الإبداع والابتكار',
      icon: 'fa-seedling'
    },
    {
      title: 'تقنيات متقدمة',
      description: 'نستخدم أحدث التقنيات والأدوات في عملية التدريب',
      icon: 'fa-laptop-code'
    },
    {
      title: 'متابعة مستمرة',
      description: 'نقدم متابعة مستمرة للمتدربين حتى بعد انتهاء الدورة',
      icon: 'fa-chart-line'
    },
    {
      title: 'شهادات معتمدة',
      description: 'نمنح شهادات معتمدة دولياً تعزز من فرص التطور المهني',
      icon: 'fa-certificate'
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'التقييم الأولي',
      description: 'نبدأ بتقييم مستوى المتدرب ومعرفة احتياجاته التدريبية'
    },
    {
      number: '02',
      title: 'تخصيص المحتوى',
      description: 'نكيف المحتوى التدريبي ليناسب مستوى وأهداف المتدرب'
    },
    {
      number: '03',
      title: 'التدريب التفاعلي',
      description: 'نقدم التدريب من خلال جلسات تفاعلية وورش عمل عملية'
    },
    {
      number: '04',
      title: 'التطبيق العملي',
      description: 'نطبق المفاهيم المتعلمة في مشاريع حقيقية ودراسات حالة'
    },
    {
      number: '05',
      title: 'التقييم والمتابعة',
      description: 'نقيم التقدم ونقدم المتابعة المستمرة لضمان النجاح'
    },
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">أسلوبنا التدريبي</h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                منهجية مبتكرة تجمع بين أحدث تقنيات التدريب والسرد القصصي لتجربة تعليمية فريدة ومؤثرة
              </p>
            </div>
          </div>
        </section>

        {/* Methodologies */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ركائز منهجيتنا</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نعتمد على أربع ركائز أساسية في تصميم وتقديم برامجنا التدريبية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologies.map((method, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <i className={`fas ${method.icon} text-white text-2xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مراحل العملية التدريبية</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نتبع منهجية منظمة ومدروسة لضمان تحقيق أفضل النتائج التعليمية
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مميزات أسلوبنا التدريبي</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ما يميز منهجيتنا التدريبية ويجعلها الخيار الأمثل للتطوير المهني
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card-hover bg-gray-900 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${feature.icon} text-white text-xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">قوة السرد القصصي</h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      نؤمن بأن السرد القصصي هو أقوى وسيلة لنقل المعرفة والخبرات. فالقصص تجعل التعلم أكثر متعة وفعالية، 
                      وتساعد على ترسيخ المفاهيم في الذاكرة طويلة المدى.
                    </p>
                    <p className="text-lg">
                      نستخدم تقنيات السرد المتقدمة لتحويل المحتوى التقني المعقد إلى قصص شيقة وملهمة، 
                      مما يجعل عملية التعلم تجربة لا تُنسى.
                    </p>
                    <p className="text-lg">
                      هذا النهج لا يحسن فقط من فهم المتدربين، بل يطور أيضاً مهاراتهم في التواصل والعرض، 
                      مما يجعلهم قادرين على نقل معرفتهم للآخرين بفعالية.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-book-open text-8xl text-white opacity-80" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Integration */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-robot text-8xl text-white opacity-80" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">دمج التقنية في التعليم</h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      نستخدم أحدث التقنيات لتعزيز تجربة التعلم، بما في ذلك الذكاء الاصطناعي، والواقع المعزز، 
                      والمحاكاة التفاعلية.
                    </p>
                    <p className="text-lg">
                      هذه التقنيات تساعد في إنشاء بيئات تعليمية غامرة وتفاعلية، حيث يمكن للمتدربين 
                      تجربة المفاهيم عملياً قبل تطبيقها في الواقع.
                    </p>
                    <p className="text-lg">
                      كما نستخدم تحليلات التعلم لمراقبة تقدم المتدربين وتخصيص المحتوى حسب احتياجاتهم الفردية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">نتائج منهجيتنا</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                أرقام تعكس فعالية أسلوبنا التدريبي ونجاح متدربينا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">معدل رضا المتدربين</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">88%</div>
                <div className="text-gray-300">معدل إكمال الدورات</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">92%</div>
                <div className="text-gray-300">تطبيق المهارات في العمل</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>
                <div className="text-gray-300">ترقيات مهنية خلال سنة</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="container mx-auto px-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">جرب أسلوبنا التدريبي</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              انضم إلى آلاف المتدربين الذين طوروا مهاراتهم وحققوا نجاحات مهنية باستخدام منهجيتنا المبتكرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تصفح الدورات
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                احجز استشارة مجانية
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

