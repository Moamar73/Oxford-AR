import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const cities = [
    'لندن - المملكة المتحدة',
    'باريس - فرنسا', 
    'فرانكفورت - ألمانيا',
    'روما - إيطاليا',
    'أمستردام - هولندا',
    'دبي - الإمارات العربية المتحدة',
    'لوس أنجلوس - الولايات المتحدة',
    'سنغافورة - سنغافورة',
    'برشلونة - إسبانيا',
    'مدريد - إسبانيا',
    'سيؤول - كوريا الجنوبية',
    'طوكيو - اليابان'
  ]

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-3 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 space-x-reverse mb-4">
              <div className="w-8 h-8 ai-gradient rounded-full flex items-center justify-center">
                <i className="fas fa-brain text-white text-sm" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold">معهد اكسفورد للذكاء الاصطناعي</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              رائد في التدريب التقني والذكاء الاصطناعي، نقدم تجارب تعليمية لا تُنسى وتحارب تعليمية لا تُنسى
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="mailto:info@wstcourses.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="البريد الإلكتروني"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.wstcourses.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="الموقع الإلكتروني"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  جدول الدورات
                </Link>
              </li>
              <li>
                <Link href="/training-methodology" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  أسلوبنا التدريبي
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">الذكاء الاصطناعي</li>
              <li className="text-gray-400 text-sm">الإدارة والقيادة</li>
              <li className="text-gray-400 text-sm">التقنية والبرمجة</li>
              <li className="text-gray-400 text-sm">السرد القصصي</li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">مدننا العالمية</h4>
            <div className="grid grid-cols-1 gap-1">
              {cities.slice(0, 6).map((city, index) => (
                <span key={index} className="text-gray-400 text-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} معهد اكسفورد للذكاء الاصطناعي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

