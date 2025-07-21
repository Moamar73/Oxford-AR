import { generateMetadata as createMetadata } from '@/lib/metadata'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles = {
  'future-of-education': {
    title: 'مستقبل التعليم بالذكاء الاصطناعي: ثورة في عالم التدريب',
    excerpt: 'كيف يغير الذكاء الاصطناعي وجه التعليم والتدريب في العالم، وما هي التحديات والفرص المستقبلية',
    content: `
      <p>يشهد عالم التعليم والتدريب تحولاً جذرياً مع دخول تقنيات الذكاء الاصطناعي. هذا التحول لا يقتصر على تحسين طرق التدريس التقليدية، بل يعيد تعريف مفهوم التعلم نفسه.</p>

      <h2>التحديات الحالية في التعليم التقليدي</h2>
      <p>يواجه التعليم التقليدي تحديات عديدة في العصر الرقمي، منها صعوبة تخصيص التعلم لكل فرد، وقياس التقدم بشكل دقيق، والحفاظ على انتباه المتعلمين في بيئة مليئة بالمشتتات.</p>

      <h2>دور الذكاء الاصطناعي في التعليم</h2>
      <p>يقدم الذكاء الاصطناعي حلولاً مبتكرة لهذه التحديات من خلال:</p>
      <ul>
        <li><strong>التعلم المخصص:</strong> تحليل أنماط التعلم الفردية وتقديم محتوى مخصص</li>
        <li><strong>التقييم الذكي:</strong> تقييم مستمر وفوري للتقدم والفهم</li>
        <li><strong>المساعدة الافتراضية:</strong> دعم متاح 24/7 للإجابة على الأسئلة</li>
        <li><strong>التحليلات التنبؤية:</strong> توقع الصعوبات قبل حدوثها</li>
      </ul>

      <h2>السرد القصصي والذكاء الاصطناعي</h2>
      <p>يمكن للذكاء الاصطناعي أن يعزز قوة السرد القصصي في التعليم من خلال إنشاء قصص تفاعلية ومخصصة تتكيف مع احتياجات كل متعلم. هذا المزج بين التقنية والإبداع يخلق تجارب تعليمية لا تُنسى.</p>

      <h2>التطبيقات العملية</h2>
      <p>نرى اليوم تطبيقات عملية للذكاء الاصطناعي في التعليم مثل:</p>
      <ul>
        <li>منصات التعلم التكيفية التي تعدل المحتوى حسب مستوى الطالب</li>
        <li>أنظمة التقييم الآلي التي تقدم ملاحظات فورية</li>
        <li>المساعدين الافتراضيين للإجابة على الأسئلة الشائعة</li>
        <li>أدوات تحليل البيانات لتحسين المناهج</li>
      </ul>

      <h2>التحديات والاعتبارات الأخلاقية</h2>
      <p>رغم الفوائد الهائلة، يجب التعامل مع تحديات مثل حماية الخصوصية، وضمان العدالة في الوصول للتقنية، والحفاظ على العنصر الإنساني في التعليم.</p>

      <h2>مستقبل التعليم</h2>
      <p>نتوقع أن نرى في المستقبل القريب تطوراً أكبر في مجال التعليم بالذكاء الاصطناعي، مع ظهور تقنيات جديدة مثل الواقع المعزز والواقع الافتراضي، والتي ستخلق تجارب تعليمية أكثر غمراً وتفاعلاً.</p>

      <p>إن مستقبل التعليم يكمن في الدمج الذكي بين التقنية والعنصر الإنساني، حيث يعمل الذكاء الاصطناعي كمساعد قوي للمعلمين والمتدربين، وليس كبديل عنهم.</p>
    `,
    date: '2024-01-15',
    author: 'د. أحمد محمد',
    readTime: '8 دقائق',
    category: 'الذكاء الاصطناعي',
    tags: ['الذكاء الاصطناعي', 'التعليم', 'التدريب', 'التقنية']
  },
  'storytelling-power': {
    title: 'قوة السرد القصصي في التدريب المهني',
    excerpt: 'اكتشف كيف يمكن للسرد القصصي أن يحول تجربة التعلم ويجعل المفاهيم المعقدة أكثر وضوحاً',
    content: `
      <p>السرد القصصي ليس مجرد وسيلة ترفيه، بل أداة قوية لنقل المعرفة والخبرات. في عالم التدريب المهني، يمكن للقصص أن تحول المفاهيم المجردة إلى تجارب حية وملموسة.</p>

      <h2>لماذا السرد القصصي فعال؟</h2>
      <p>يعتمد السرد القصصي على طريقة عمل الدماغ البشري الطبيعية. فالإنسان مبرمج لفهم وتذكر المعلومات عندما تُقدم في شكل قصة، لأن القصص:</p>
      <ul>
        <li>تثير المشاعر وتخلق اتصالاً عاطفياً</li>
        <li>تساعد على التذكر طويل المدى</li>
        <li>تبسط المفاهيم المعقدة</li>
        <li>تحفز الخيال والإبداع</li>
      </ul>

      <h2>تطبيق السرد في التدريب</h2>
      <p>يمكن استخدام السرد القصصي في التدريب بطرق متعددة:</p>
      <ul>
        <li><strong>دراسات الحالة:</strong> تحويل المشاكل الحقيقية إلى قصص تعليمية</li>
        <li><strong>السيناريوهات:</strong> إنشاء مواقف افتراضية للتدريب على اتخاذ القرارات</li>
        <li><strong>القصص الشخصية:</strong> مشاركة تجارب المدربين والخبراء</li>
        <li><strong>الحكايات التاريخية:</strong> استخدام أمثلة من التاريخ لتوضيح المبادئ</li>
      </ul>

      <h2>منهجية ماكنزي في السرد</h2>
      <p>تعتمد منهجية ماكنزي على هيكل قصصي واضح يتكون من:</p>
      <ol>
        <li><strong>الوضع (Situation):</strong> تحديد السياق والخلفية</li>
        <li><strong>التعقيد (Complication):</strong> تقديم التحدي أو المشكلة</li>
        <li><strong>السؤال (Question):</strong> طرح السؤال الرئيسي</li>
        <li><strong>الإجابة (Answer):</strong> تقديم الحل أو التوصية</li>
      </ol>

      <h2>فوائد السرد في بيئة العمل</h2>
      <p>استخدام السرد القصصي في التدريب المهني يحقق فوائد عديدة:</p>
      <ul>
        <li>تحسين مهارات التواصل</li>
        <li>زيادة مستوى المشاركة والتفاعل</li>
        <li>تطوير التفكير النقدي</li>
        <li>بناء الثقة في العرض والتقديم</li>
        <li>تعزيز روح الفريق من خلال القصص المشتركة</li>
      </ul>

      <h2>تحديات السرد في التدريب</h2>
      <p>رغم فعاليته، يواجه السرد القصصي في التدريب تحديات مثل:</p>
      <ul>
        <li>الحاجة إلى مهارات عالية في السرد</li>
        <li>صعوبة قياس التأثير المباشر</li>
        <li>التوازن بين الترفيه والتعليم</li>
        <li>تكييف القصص مع ثقافات مختلفة</li>
      </ul>

      <h2>مستقبل السرد في التدريب</h2>
      <p>مع تطور التقنيات الرقمية، نشهد ظهور أشكال جديدة من السرد التفاعلي، مثل الواقع الافتراضي والألعاب التعليمية، التي تعزز من قوة السرد في التدريب.</p>

      <p>السرد القصصي ليس مجرد تقنية تدريبية، بل فلسفة تعليمية تضع الإنسان في مركز عملية التعلم، وتحول المعرفة من معلومات جافة إلى تجارب حية ومؤثرة.</p>
    `,
    date: '2024-01-10',
    author: 'د. فاطمة العلي',
    readTime: '6 دقائق',
    category: 'السرد القصصي',
    tags: ['السرد القصصي', 'التدريب', 'منهجية ماكنزي', 'التعلم']
  },
  'ai-business-applications': {
    title: 'تطبيقات الذكاء الاصطناعي في بيئة الأعمال الحديثة',
    excerpt: 'استكشف أحدث تطبيقات الذكاء الاصطناعي في بيئة الأعمال وكيف تؤثر على الإنتاجية والكفاءة',
    content: `
      <p>يشهد عالم الأعمال تحولاً جذرياً مع انتشار تطبيقات الذكاء الاصطناعي. من الشركات الناشئة إلى المؤسسات الكبرى، تتسابق الشركات لاستخدام هذه التقنيات لتحسين عملياتها وزيادة كفاءتها.</p>

      <h2>مجالات التطبيق الرئيسية</h2>
      
      <h3>1. خدمة العملاء</h3>
      <p>تستخدم الشركات روبوتات المحادثة والمساعدين الافتراضيين لتقديم دعم فوري للعملاء على مدار الساعة، مما يحسن تجربة العملاء ويقلل التكاليف التشغيلية.</p>

      <h3>2. التحليلات التنبؤية</h3>
      <p>تساعد خوارزميات التعلم الآلي الشركات على تحليل البيانات التاريخية للتنبؤ بالاتجاهات المستقبلية، مثل الطلب على المنتجات أو سلوك العملاء.</p>

      <h3>3. إدارة سلسلة التوريد</h3>
      <p>يمكن للذكاء الاصطناعي تحسين إدارة المخزون، وتحسين طرق الشحن، والتنبؤ بالاضطرابات في سلسلة التوريد.</p>

      <h3>4. الموارد البشرية</h3>
      <p>من فرز السير الذاتية إلى تحليل أداء الموظفين، يساعد الذكاء الاصطناعي في تحسين عمليات التوظيف وإدارة المواهب.</p>

      <h2>فوائد تطبيق الذكاء الاصطناعي</h2>
      <ul>
        <li><strong>زيادة الكفاءة:</strong> أتمتة المهام الروتينية وتسريع العمليات</li>
        <li><strong>تحسين دقة القرارات:</strong> اتخاذ قرارات مبنية على البيانات</li>
        <li><strong>خفض التكاليف:</strong> تقليل الحاجة للعمالة في بعض المهام</li>
        <li><strong>تحسين تجربة العملاء:</strong> تقديم خدمات مخصصة وسريعة</li>
        <li><strong>الابتكار:</strong> اكتشاف فرص جديدة وحلول مبتكرة</li>
      </ul>

      <h2>التحديات والمخاطر</h2>
      <p>رغم الفوائد الهائلة، تواجه الشركات تحديات في تطبيق الذكاء الاصطناعي:</p>
      <ul>
        <li><strong>نقص المهارات:</strong> الحاجة لخبراء متخصصين</li>
        <li><strong>جودة البيانات:</strong> الحاجة لبيانات نظيفة ومنظمة</li>
        <li><strong>التكاليف الأولية:</strong> استثمارات كبيرة في التقنية والتدريب</li>
        <li><strong>المقاومة للتغيير:</strong> تردد الموظفين في تبني التقنيات الجديدة</li>
        <li><strong>الاعتبارات الأخلاقية:</strong> ضمان الاستخدام المسؤول للتقنية</li>
      </ul>

      <h2>أمثلة عملية من الواقع</h2>
      
      <h3>التجارة الإلكترونية</h3>
      <p>تستخدم منصات التجارة الإلكترونية الذكاء الاصطناعي لتقديم توصيات مخصصة للمنتجات، وتحسين تجربة البحث، وإدارة المخزون بكفاءة.</p>

      <h3>الخدمات المصرفية</h3>
      <p>تطبق البنوك الذكاء الاصطناعي في كشف الاحتيال، وتقييم المخاطر الائتمانية، وتقديم الاستشارات المالية المخصصة.</p>

      <h3>الرعاية الصحية</h3>
      <p>يساعد الذكاء الاصطناعي في تشخيص الأمراض، وتطوير الأدوية، وإدارة السجلات الطبية بكفاءة أكبر.</p>

      <h2>خطوات التطبيق الناجح</h2>
      <ol>
        <li><strong>تحديد الأهداف:</strong> وضع أهداف واضحة ومحددة</li>
        <li><strong>تقييم البيانات:</strong> التأكد من جودة وتوفر البيانات</li>
        <li><strong>اختيار التقنية المناسبة:</strong> تحديد الحلول التي تناسب الاحتياجات</li>
        <li><strong>التدريب والتطوير:</strong> تأهيل الفرق للعمل مع التقنيات الجديدة</li>
        <li><strong>التطبيق التدريجي:</strong> البدء بمشاريع صغيرة والتوسع تدريجياً</li>
        <li><strong>المراقبة والتحسين:</strong> متابعة الأداء وتحسين النتائج</li>
      </ol>

      <h2>مستقبل الذكاء الاصطناعي في الأعمال</h2>
      <p>نتوقع أن نرى في المستقبل القريب تطوراً أكبر في تطبيقات الذكاء الاصطناعي، مع ظهور تقنيات جديدة مثل الذكاء الاصطناعي التوليدي والحوسبة الكمية، التي ستفتح آفاقاً جديدة للابتكار في عالم الأعمال.</p>

      <p>النجاح في تطبيق الذكاء الاصطناعي لا يعتمد فقط على التقنية، بل على القدرة على دمجها بذكاء في استراتيجية الأعمال وثقافة المؤسسة.</p>
    `,
    date: '2024-01-05',
    author: 'م. خالد السعيد',
    readTime: '7 دقائق',
    category: 'الأعمال والتقنية',
    tags: ['الذكاء الاصطناعي', 'الأعمال', 'التقنية', 'الابتكار']
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const article = articles[params.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: 'المقال غير موجود',
      description: 'المقال المطلوب غير متوفر'
    }
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
  })
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  const relatedArticles = Object.entries(articles)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }))

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Article Header */}
        <article className="py-20 bg-gray-900">
          <div className="container mx-auto px-3">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-white">الرئيسية</Link></li>
                  <li><i className="fas fa-chevron-left text-xs" aria-hidden="true"></i></li>
                  <li><Link href="/articles" className="hover:text-white">المقالات</Link></li>
                  <li><i className="fas fa-chevron-left text-xs" aria-hidden="true"></i></li>
                  <li className="text-white">{article.title}</li>
                </ol>
              </nav>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-gray-400 text-sm">{article.readTime}</span>
                <span className="text-gray-400 text-sm">
                  {new Date(article.date).toLocaleDateString('ar-SA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              {/* Article Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Article Excerpt */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 space-x-reverse mb-12 pb-8 border-b border-gray-700">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{article.author}</h3>
                  <p className="text-gray-400">خبير في {article.category}</p>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Tags */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4">الكلمات المفتاحية</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4">شارك المقال</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </button>
                  <button className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-colors">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-colors">
                    <i className="fas fa-link" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-3">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">مقالات ذات صلة</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <article key={relatedArticle.slug} className="card-hover bg-gray-900 rounded-xl overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <i className="fas fa-file-alt text-4xl text-white" aria-hidden="true"></i>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                          {relatedArticle.category}
                        </span>
                        <span className="text-gray-500 text-xs">{relatedArticle.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 leading-tight line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                      
                      <Link
                        href={`/articles/${relatedArticle.slug}`}
                        className="text-blue-400 hover:text-blue-300 font-medium text-sm inline-flex items-center"
                      >
                        اقرأ المقال
                        <i className="fas fa-arrow-left mr-1 text-xs" aria-hidden="true"></i>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}

