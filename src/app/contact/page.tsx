import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = generateMetadata({
  title: 'اتصل بنا',
  description: 'تواصل مع معهد اكسفورد للذكاء الاصطناعي. نحن متواجدون في 12 مدينة عالمية لخدمتك. اتصل بنا للاستفسار عن دوراتنا التدريبية.',
  keywords: [
    'اتصل بنا',
    'تواصل معنا',
    'معلومات الاتصال',
    'مكاتب المعهد',
    'خدمة العملاء',
    'استفسارات التدريب',
    'مواقع المعهد'
  ],
})

export default function ContactPage() {
  const cities = [
    { name: 'لندن', country: 'المملكة المتحدة', x: 50, y: 25 },
    { name: 'باريس', country: 'فرنسا', x: 52, y: 30 },
    { name: 'فرانكفورت', country: 'ألمانيا', x: 54, y: 28 },
    { name: 'روما', country: 'إيطاليا', x: 56, y: 35 },
    { name: 'أمستردام', country: 'هولندا', x: 52, y: 26 },
    { name: 'دبي', country: 'الإمارات', x: 65, y: 45 },
    { name: 'لوس أنجلوس', country: 'الولايات المتحدة', x: 15, y: 40 },
    { name: 'سنغافورة', country: 'سنغافورة', x: 80, y: 60 },
    { name: 'برشلونة', country: 'إسبانيا', x: 50, y: 35 },
    { name: 'مدريد', country: 'إسبانيا', x: 48, y: 36 },
    { name: 'سيؤول', country: 'كوريا الجنوبية', x: 85, y: 32 },
    { name: 'طوكيو', country: 'اليابان', x: 88, y: 30 },
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">اتصل بنا</h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                نحن هنا لمساعدتك في رحلتك التعليمية. تواصل معنا من أي مكان في العالم
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Details */}
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-8">معلومات الاتصال</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-envelope text-white" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                        <p className="text-gray-400">info@wstcourses.com</p>
                        <p className="text-gray-400">support@wstcourses.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-phone text-white" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">الهاتف</h3>
                        <p className="text-gray-400">+971 4 123 4567</p>
                        <p className="text-gray-400">+44 20 7123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-globe text-white" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">الموقع الإلكتروني</h3>
                        <p className="text-gray-400">www.wstcourses.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-clock text-white" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">ساعات العمل</h3>
                        <p className="text-gray-400">الأحد - الخميس: 9:00 - 18:00</p>
                        <p className="text-gray-400">الجمعة - السبت: 10:00 - 16:00</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">تابعنا على</h3>
                    <div className="flex space-x-4 space-x-reverse">
                      <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <i className="fab fa-linkedin text-white" aria-hidden="true"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <i className="fab fa-twitter text-white" aria-hidden="true"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                        <i className="fab fa-youtube text-white" aria-hidden="true"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                        <i className="fab fa-instagram text-white" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-8">أرسل لنا رسالة</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">الاسم الأول</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">الاسم الأخير</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">رقم الهاتف</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">الموضوع</label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      >
                        <option value="">اختر الموضوع</option>
                        <option value="courses">استفسار عن الدورات</option>
                        <option value="registration">التسجيل في دورة</option>
                        <option value="partnership">شراكة تدريبية</option>
                        <option value="support">الدعم الفني</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">الرسالة</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        placeholder="اكتب رسالتك هنا..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
                      إرسال الرسالة
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* World Map */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مواقعنا العالمية</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نحن متواجدون في 12 مدينة عالمية لنكون قريبين منك أينما كنت
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* World Map SVG */}
              <div className="relative bg-gray-800 rounded-2xl p-8 overflow-hidden">
                <svg viewBox="0 0 100 60" className="w-full h-96">
                  {/* Simplified world map paths */}
                  <g fill="#374151" stroke="#4B5563" strokeWidth="0.1">
                    {/* North America */}
                    <path d="M5,15 L25,10 L30,25 L20,35 L5,30 Z" />
                    {/* Europe */}
                    <path d="M45,20 L60,18 L58,30 L45,28 Z" />
                    {/* Asia */}
                    <path d="M65,15 L95,20 L90,40 L70,35 Z" />
                    {/* Africa */}
                    <path d="M45,35 L60,40 L55,55 L45,50 Z" />
                    {/* Australia */}
                    <path d="M80,50 L90,52 L88,58 L82,56 Z" />
                  </g>
                  
                  {/* City markers */}
                  {cities.map((city, index) => (
                    <g key={index}>
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r="1.5"
                        fill="#3B82F6"
                        className="animate-pulse"
                      />
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r="3"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="0.5"
                        opacity="0.6"
                        className="animate-ping"
                      />
                      <text
                        x={city.x}
                        y={city.y - 3}
                        textAnchor="middle"
                        fontSize="2"
                        fill="#E5E7EB"
                        className="font-medium"
                      >
                        {city.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Cities Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
                {cities.map((city, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="fas fa-map-marker-alt text-white text-sm" aria-hidden="true"></i>
                    </div>
                    <h3 className="font-semibold text-sm">{city.name}</h3>
                    <p className="text-gray-400 text-xs">{city.country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Institute */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">نبذة عن المعهد</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  معهد اكسفورد للذكاء الاصطناعي هو مؤسسة تعليمية رائدة تأسست عام 2009 بهدف تطوير مهارات الأفراد والمؤسسات في مجال الذكاء الاصطناعي والتقنيات الحديثة.
                </p>
                <p className="text-lg">
                  نتميز باستخدام منهجية السرد القصصي المبتكرة التي تحول المفاهيم التقنية المعقدة إلى تجارب تعليمية ممتعة وفعالة. هذا النهج الفريد يساعد المتدربين على فهم واستيعاب المعلومات بشكل أفضل وأسرع.
                </p>
                <p className="text-lg">
                  مع حضور في 12 مدينة عالمية وأكثر من 10,000 متدرب تخرج من برامجنا، نواصل رحلتنا نحو تمكين الجيل القادم من خبراء الذكاء الاصطناعي.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-certificate text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">شهادات معتمدة</h3>
                  <p className="text-gray-400">
                    جميع دوراتنا معتمدة دولياً وتؤهلك للحصول على شهادات مهنية معترف بها عالمياً
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-white text-2xl" aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">خبراء متخصصون</h3>
                  <p className="text-gray-400">
                    فريق من الخبراء والأكاديميين المتخصصين في الذكاء الاصطناعي والتدريب المهني
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

