"use strict";(()=>{var e={};e.id=83,e.ids=[83],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2677:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(1794),r(2029),r(5866);var i=r(3191),l=r(8716),s=r(7922),n=r.n(s),a=r(5231),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let d=["",{children:["articles",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1794)),"/home/ubuntu/oxford-ai-institute/src/app/articles/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/home/ubuntu/oxford-ai-institute/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}],c=["/home/ubuntu/oxford-ai-institute/src/app/articles/[slug]/page.tsx"],u="/articles/[slug]/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/articles/[slug]/page",pathname:"/articles/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return n},RedirectType:function(){return i.RedirectType},notFound:function(){return l.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect}});let i=r(3953),l=r(6399);class s extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class n extends URLSearchParams{append(){throw new s}delete(){throw new s}set(){throw new s}sort(){throw new s}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return l},notFound:function(){return i}});let r="NEXT_NOT_FOUND";function i(){let e=Error(r);throw e.digest=r,e}function l(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return i},getRedirectError:function(){return o},getRedirectStatusCodeFromError:function(){return g},getRedirectTypeFromError:function(){return h},getURLFromRedirectError:function(){return p},isRedirectError:function(){return u},permanentRedirect:function(){return c},redirect:function(){return d}});let l=r(4580),s=r(2934),n=r(8586),a="NEXT_REDIRECT";function o(e,t,r){void 0===r&&(r=n.RedirectStatusCode.TemporaryRedirect);let i=Error(a);i.digest=a+";"+t+";"+e+";"+r+";";let s=l.requestAsyncStorage.getStore();return s&&(i.mutableCookies=s.mutableCookies),i}function d(e,t){void 0===t&&(t="replace");let r=s.actionAsyncStorage.getStore();throw o(e,t,(null==r?void 0:r.isAction)?n.RedirectStatusCode.SeeOther:n.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=s.actionAsyncStorage.getStore();throw o(e,t,(null==r?void 0:r.isAction)?n.RedirectStatusCode.SeeOther:n.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,i,l]=e.digest.split(";",4),s=Number(l);return t===a&&("replace"===r||"push"===r)&&"string"==typeof i&&!isNaN(s)&&s in n.RedirectStatusCode}function p(e){return u(e)?e.digest.split(";",3)[2]:null}function h(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function g(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(i||(i={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1794:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,generateMetadata:()=>c,generateStaticParams:()=>p});var i=r(9510),l=r(5084),s=r(6611),n=r(1953),a=r(7371),o=r(1085);let d={"future-of-education":{title:"مستقبل التعليم بالذكاء الاصطناعي: ثورة في عالم التدريب",excerpt:"كيف يغير الذكاء الاصطناعي وجه التعليم والتدريب في العالم، وما هي التحديات والفرص المستقبلية",content:`
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
    `,date:"2024-01-15",author:"د. أحمد محمد",readTime:"8 دقائق",category:"الذكاء الاصطناعي",tags:["الذكاء الاصطناعي","التعليم","التدريب","التقنية"]},"storytelling-power":{title:"قوة السرد القصصي في التدريب المهني",excerpt:"اكتشف كيف يمكن للسرد القصصي أن يحول تجربة التعلم ويجعل المفاهيم المعقدة أكثر وضوحاً",content:`
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
    `,date:"2024-01-10",author:"د. فاطمة العلي",readTime:"6 دقائق",category:"السرد القصصي",tags:["السرد القصصي","التدريب","منهجية ماكنزي","التعلم"]},"ai-business-applications":{title:"تطبيقات الذكاء الاصطناعي في بيئة الأعمال الحديثة",excerpt:"استكشف أحدث تطبيقات الذكاء الاصطناعي في بيئة الأعمال وكيف تؤثر على الإنتاجية والكفاءة",content:`
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
    `,date:"2024-01-05",author:"م. خالد السعيد",readTime:"7 دقائق",category:"الأعمال والتقنية",tags:["الذكاء الاصطناعي","الأعمال","التقنية","الابتكار"]}};async function c({params:e}){let t=d[e.slug];return t?(0,l.NX)({title:t.title,description:t.excerpt,keywords:t.tags}):{title:"المقال غير موجود",description:"المقال المطلوب غير متوفر"}}function u({params:e}){let t=d[e.slug];t||(0,o.notFound)();let r=Object.entries(d).filter(([t])=>t!==e.slug).slice(0,3).map(([e,t])=>({slug:e,...t}));return(0,i.jsxs)(i.Fragment,{children:[i.jsx(s.Z,{}),(0,i.jsxs)("main",{className:"pt-20",children:[i.jsx("article",{className:"py-20 bg-gray-900",children:i.jsx("div",{className:"container mx-auto px-3",children:(0,i.jsxs)("div",{className:"max-w-4xl mx-auto",children:[i.jsx("nav",{className:"mb-8",children:(0,i.jsxs)("ol",{className:"flex items-center space-x-2 space-x-reverse text-sm text-gray-400",children:[i.jsx("li",{children:i.jsx(a.default,{href:"/",className:"hover:text-white",children:"الرئيسية"})}),i.jsx("li",{children:i.jsx("i",{className:"fas fa-chevron-left text-xs","aria-hidden":"true"})}),i.jsx("li",{children:i.jsx(a.default,{href:"/articles",className:"hover:text-white",children:"المقالات"})}),i.jsx("li",{children:i.jsx("i",{className:"fas fa-chevron-left text-xs","aria-hidden":"true"})}),i.jsx("li",{className:"text-white",children:t.title})]})}),(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-4 mb-8",children:[i.jsx("span",{className:"bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium",children:t.category}),i.jsx("span",{className:"text-gray-400 text-sm",children:t.readTime}),i.jsx("span",{className:"text-gray-400 text-sm",children:new Date(t.date).toLocaleDateString("ar-SA",{year:"numeric",month:"long",day:"numeric"})})]}),i.jsx("h1",{className:"text-3xl md:text-5xl font-bold mb-6 leading-tight",children:t.title}),i.jsx("p",{className:"text-xl text-gray-300 mb-8 leading-relaxed",children:t.excerpt}),(0,i.jsxs)("div",{className:"flex items-center space-x-4 space-x-reverse mb-12 pb-8 border-b border-gray-700",children:[i.jsx("div",{className:"w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center",children:i.jsx("i",{className:"fas fa-user text-white text-xl","aria-hidden":"true"})}),(0,i.jsxs)("div",{children:[i.jsx("h3",{className:"font-semibold text-lg",children:t.author}),(0,i.jsxs)("p",{className:"text-gray-400",children:["خبير في ",t.category]})]})]}),i.jsx("div",{className:"prose prose-lg prose-invert max-w-none",dangerouslySetInnerHTML:{__html:t.content}}),(0,i.jsxs)("div",{className:"mt-12 pt-8 border-t border-gray-700",children:[i.jsx("h3",{className:"text-lg font-semibold mb-4",children:"الكلمات المفتاحية"}),i.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map((e,t)=>(0,i.jsxs)("span",{className:"bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors",children:["#",e]},t))})]}),(0,i.jsxs)("div",{className:"mt-8 pt-8 border-t border-gray-700",children:[i.jsx("h3",{className:"text-lg font-semibold mb-4",children:"شارك المقال"}),(0,i.jsxs)("div",{className:"flex space-x-4 space-x-reverse",children:[i.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors",children:i.jsx("i",{className:"fab fa-twitter","aria-hidden":"true"})}),i.jsx("button",{className:"bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-colors",children:i.jsx("i",{className:"fab fa-linkedin","aria-hidden":"true"})}),i.jsx("button",{className:"bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors",children:i.jsx("i",{className:"fab fa-whatsapp","aria-hidden":"true"})}),i.jsx("button",{className:"bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-colors",children:i.jsx("i",{className:"fas fa-link","aria-hidden":"true"})})]})]})]})})}),i.jsx("section",{className:"py-20 bg-gray-800",children:i.jsx("div",{className:"container mx-auto px-3",children:(0,i.jsxs)("div",{className:"max-w-6xl mx-auto",children:[i.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"مقالات ذات صلة"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:r.map(e=>(0,i.jsxs)("article",{className:"card-hover bg-gray-900 rounded-xl overflow-hidden",children:[i.jsx("div",{className:"h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:i.jsx("i",{className:"fas fa-file-alt text-4xl text-white","aria-hidden":"true"})}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx("span",{className:"bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium",children:e.category}),i.jsx("span",{className:"text-gray-500 text-xs",children:e.readTime})]}),i.jsx("h3",{className:"text-lg font-bold mb-3 leading-tight line-clamp-2",children:e.title}),i.jsx("p",{className:"text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3",children:e.excerpt}),(0,i.jsxs)(a.default,{href:`/articles/${e.slug}`,className:"text-blue-400 hover:text-blue-300 font-medium text-sm inline-flex items-center",children:["اقرأ المقال",i.jsx("i",{className:"fas fa-arrow-left mr-1 text-xs","aria-hidden":"true"})]})]})]},e.slug))}),i.jsx("div",{className:"text-center mt-12",children:i.jsx(a.default,{href:"/articles",className:"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block",children:"عرض جميع المقالات"})})]})})})]}),i.jsx(n.Z,{})]})}async function p(){return Object.keys(d).map(e=>({slug:e}))}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,904,434,945],()=>r(2677));module.exports=i})();