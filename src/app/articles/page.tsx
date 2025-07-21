import { generateMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'المقالات',
  description: 'اطلع على أحدث المقالات والأبحاث في مجال الذكاء الاصطناعي، السرد القصصي، والتدريب المهني من خبراء معهد اكسفورد.',
  keywords: [
    'مقالات الذكاء الاصطناعي',
    'أبحاث التدريب',
    'السرد القصصي',
    'مقالات تقنية',
    'تطوير المهارات',
    'الذكاء الاصطناعي في التعليم',
    'منهجية ماكنزي'
  ],
})

export default function ArticlesPage() {
  const featuredArticle = {
    id: 'future-of-education',
    title: 'مستقبل التعليم بالذكاء الاصطناعي: ثورة في عالم التدريب',
    excerpt: 'كيف يغير الذكاء الاصطناعي وجه التعليم والتدريب في العالم، وما هي التحديات والفرص المستقبلية',
    content: 'يشهد عالم التعليم والتدريب تحولاً جذرياً مع دخول تقنيات الذكاء الاصطناعي. هذا التحول لا يقتصر على تحسين طرق التدريس التقليدية، بل يعيد تعريف مفهوم التعلم نفسه...',
    date: '2024-01-15',
    author: 'د. أحمد محمد',
    readTime: '8 دقائق',
    category: 'الذكاء الاصطناعي',
    image: '/images/ai-education.jpg'
  }

  const articles = [
    {
      id: 'storytelling-power',
      title: 'قوة السرد القصصي في التدريب المهني',
      excerpt: 'اكتشف كيف يمكن للسرد القصصي أن يحول تجربة التعلم ويجعل المفاهيم المعقدة أكثر وضوحاً',
      date: '2024-01-10',
      author: 'د. فاطمة العلي',
      readTime: '6 دقائق',
      category: 'السرد القصصي',
      image: '/images/storytelling.jpg'
    },
    {
      id: 'ai-business-applications',
      title: 'تطبيقات الذكاء الاصطناعي في بيئة الأعمال الحديثة',
      excerpt: 'استكشف أحدث تطبيقات الذكاء الاصطناعي في بيئة الأعمال وكيف تؤثر على الإنتاجية والكفاءة',
      date: '2024-01-05',
      author: 'م. خالد السعيد',
      readTime: '7 دقائق',
      category: 'الأعمال والتقنية',
      image: '/images/ai-business.jpg'
    },
    {
      id: 'mckinsey-methodology',
      title: 'منهجية ماكنزي في السرد القصصي للتدريب',
      excerpt: 'تعرف على منهجية ماكنزي الشهيرة في استخدام السرد القصصي لتحسين فعالية التدريب',
      date: '2023-12-28',
      author: 'د. فاطمة العلي',
      readTime: '9 دقائق',
      category: 'منهجيات التدريب',
      image: '/images/mckinsey-method.jpg'
    },
    {
      id: 'digital-transformation',
      title: 'التحول الرقمي وأثره على التدريب المؤسسي',
      excerpt: 'كيف يؤثر التحول الرقمي على استراتيجيات التدريب في المؤسسات الحديثة',
      date: '2023-12-20',
      author: 'أ. مريم أحمد',
      readTime: '5 دقائق',
      category: 'التحول الرقمي',
      image: '/images/digital-transformation.jpg'
    },
    {
      id: 'learning-analytics',
      title: 'تحليلات التعلم: قياس فعالية التدريب بالذكاء الاصطناعي',
      excerpt: 'استخدام تحليلات البيانات والذكاء الاصطناعي لقياس وتحسين فعالية البرامج التدريبية',
      date: '2023-12-15',
      author: 'م. خالد السعيد',
      readTime: '6 دقائق',
      category: 'تحليلات التعلم',
      image: '/images/learning-analytics.jpg'
    },
    {
      id: 'personalized-learning',
      title: 'التعلم المخصص: مستقبل التدريب الفردي',
      excerpt: 'كيف تمكن تقنيات الذكاء الاصطناعي من إنشاء تجارب تعليمية مخصصة لكل متدرب',
      date: '2023-12-10',
      author: 'د. أحمد محمد',
      readTime: '7 دقائق',
      category: 'التعلم المخصص',
      image: '/images/personalized-learning.jpg'
    },
  ]

  const categories = [
    'جميع المقالات',
    'الذكاء الاصطناعي',
    'السرد القصصي',
    'منهجيات التدريب',
    'الأعمال والتقنية',
    'التحول الرقمي',
    'تحليلات التعلم',
    'التعلم المخصص'
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-3">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">المقالات والأبحاث</h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                اطلع على أحدث المقالات والأبحاث في مجال الذكاء الاصطناعي والتدريب من خبراء المعهد
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">المقال المميز</h2>
              
              <article className="card-hover bg-gray-900 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <i className="fas fa-newspaper text-6xl text-white" aria-hidden="true"></i>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-white text-sm" aria-hidden="true"></i>
                        </div>
                        <div>
                          <p className="font-medium">{featuredArticle.author}</p>
                          <p className="text-gray-400 text-sm">
                            {new Date(featuredArticle.date).toLocaleDateString('ar-SA')}
                          </p>
                        </div>
                      </div>
                      
                      <Link
                        href={`/articles/${featuredArticle.id}`}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        اقرأ المقال
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-900 border-b border-gray-700">
          <div className="container mx-auto px-3">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article key={article.id} className="card-hover bg-gray-800 rounded-xl overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <i className="fas fa-file-alt text-4xl text-white" aria-hidden="true"></i>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white text-xs" aria-hidden="true"></i>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{article.author}</p>
                            <p className="text-gray-500 text-xs">
                              {new Date(article.date).toLocaleDateString('ar-SA')}
                            </p>
                          </div>
                        </div>
                        
                        <Link
                          href={`/articles/${article.id}`}
                          className="text-blue-400 hover:text-blue-300 font-medium text-sm inline-flex items-center"
                        >
                          اقرأ المزيد
                          <i className="fas fa-arrow-left mr-1 text-xs" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  تحميل المزيد من المقالات
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="container mx-auto px-3">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                اشترك في نشرتنا الإخبارية
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                احصل على أحدث المقالات والأبحاث في مجال الذكاء الاصطناعي والتدريب مباشرة في بريدك الإلكتروني
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  اشترك الآن
                </button>
              </form>
              
              <p className="text-blue-200 text-sm mt-4">
                نحترم خصوصيتك ولن نرسل لك رسائل غير مرغوب فيها
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

