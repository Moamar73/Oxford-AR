import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = generateMetadata({
  title: 'من نحن',
  description: 'تعرف على معهد اكسفورد للذكاء الاصطناعي، رؤيتنا، مهمتنا، وفريق الخبراء المتخصص في تدريب الذكاء الاصطناعي والسرد القصصي.',
  keywords: [
    'معهد اكسفورد',
    'من نحن',
    'فريق الخبراء',
    'رؤية المعهد',
    'مهمة المعهد',
    'تدريب الذكاء الاصطناعي',
    'خبراء التدريب'
  ],
})

export default function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'متدرب تخرج من برامجنا' },
    { number: '500+', label: 'دورة تدريبية متخصصة' },
    { number: '12', label: 'مدينة عالمية' },
    { number: '15+', label: 'سنة من الخبرة' },
  ]

  const team = [
    {
      name: 'د. أحمد محمد',
      position: 'مدير المعهد وخبير الذكاء الاصطناعي',
      description: 'دكتوراه في علوم الحاسوب من جامعة أكسفورد، خبرة 20 سنة في مجال الذكاء الاصطناعي',
      icon: 'fa-user-tie'
    },
    {
      name: 'د. فاطمة العلي',
      position: 'رئيسة قسم السرد القصصي',
      description: 'خبيرة في منهجية ماكنزي للسرد القصصي، مؤلفة 5 كتب في مجال التدريب',
      icon: 'fa-user-graduate'
    },
    {
      name: 'م. خالد السعيد',
      position: 'مدير التطوير التقني',
      description: 'مهندس برمجيات متخصص في تطوير منصات التعلم الذكية والتقنيات التفاعلية',
      icon: 'fa-laptop-code'
    },
    {
      name: 'أ. مريم أحمد',
      position: 'مديرة العلاقات الدولية',
      description: 'خبيرة في إدارة البرامج التدريبية الدولية وتطوير الشراكات الاستراتيجية',
      icon: 'fa-globe'
    },
  ]

  const values = [
    {
      title: 'الابتكار',
      description: 'نسعى دائماً لتطوير أساليب تدريبية مبتكرة تواكب أحدث التطورات التقنية',
      icon: 'fa-lightbulb',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'التميز',
      description: 'نلتزم بتقديم أعلى معايير الجودة في جميع برامجنا التدريبية والخدمات',
      icon: 'fa-star',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'الشغف',
      description: 'نؤمن بأن الشغف بالتعلم هو المحرك الأساسي للنجاح والتطور المستمر',
      icon: 'fa-heart',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'الالتزام',
      description: 'نلتزم بدعم متدربينا في رحلتهم التعليمية وضمان تحقيق أهدافهم المهنية',
      icon: 'fa-handshake',
      color: 'from-green-500 to-teal-600'
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                معهد رائد في تدريب الذكاء الاصطناعي والسرد القصصي، نجمع بين الخبرة الأكاديمية والتطبيق العملي لنقدم تجارب تعليمية استثنائية
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">قصتنا</h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      بدأت رحلتنا في عام 2009 برؤية طموحة: تحويل طريقة تعلم الذكاء الاصطناعي من خلال قوة السرد القصصي. 
                      أدركنا أن التقنيات المعقدة تحتاج إلى أساليب تعليمية مبتكرة تجعل التعلم ممتعاً وفعالاً.
                    </p>
                    <p>
                      اليوم، نفخر بكوننا الرواد في مجال تدريب الذكاء الاصطناعي باستخدام منهجية السرد القصصي، 
                      مع حضور في 12 مدينة عالمية وأكثر من 10,000 متدرب تخرج من برامجنا.
                    </p>
                    <p>
                      نواصل رحلتنا نحو تمكين الأفراد والمؤسسات من إتقان تقنيات المستقبل بطريقة إنسانية وملهمة.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-building text-8xl text-white opacity-80" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">إنجازاتنا بالأرقام</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                أرقام تعكس التزامنا بالتميز والجودة في تقديم أفضل تجربة تعليمية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-line text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Vision */}
                <div className="text-center lg:text-right">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                    <i className="fas fa-eye text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">رؤيتنا</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    أن نكون الرائدين عالمياً في تدريب الذكاء الاصطناعي من خلال السرد القصصي المبتكر، 
                    ونساهم في بناء جيل من المتخصصين القادرين على قيادة التحول الرقمي في مؤسساتهم ومجتمعاتهم.
                  </p>
                </div>

                {/* Mission */}
                <div className="text-center lg:text-right">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                    <i className="fas fa-target text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">مهمتنا</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    تمكين الأفراد والمؤسسات من إتقان الذكاء الاصطناعي من خلال تجارب تعليمية تفاعلية وممتعة، 
                    باستخدام منهجية السرد القصصي التي تحول المفاهيم المعقدة إلى قصص ملهمة وقابلة للتطبيق.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">قيمنا الأساسية</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                القيم التي توجه عملنا وتحدد هويتنا كمؤسسة تعليمية رائدة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <i className={`fas ${value.icon} text-white text-2xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فريق الخبراء</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نخبة من الخبراء والأكاديميين المتخصصين في الذكاء الاصطناعي والتدريب
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card-hover bg-gray-900 p-6 rounded-xl text-center">
                  <div className="w-20 h-20 ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${member.icon} text-white text-2xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="container mx-auto px-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">انضم إلى رحلة التعلم</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              ابدأ رحلتك في عالم الذكاء الاصطناعي مع خبراء المعهد واكتشف قوة السرد القصصي في التعلم
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
                تواصل معنا
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

