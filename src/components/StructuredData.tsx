import Script from 'next/script'

export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "معهد اكسفورد للذكاء الاصطناعي",
    "alternateName": "Oxford AI Institute",
    "description": "معهد تدريبي متخصص في الذكاء الاصطناعي والتقنيات الحديثة، يقدم دورات تدريبية متقدمة في 12 مدينة عالمية",
    "url": "https://oxford-ai-institute.com",
    "logo": "https://oxford-ai-institute.com/images/logo.png",
    "image": "https://oxford-ai-institute.com/images/og-image.jpg",
    "telephone": "+971-4-123-4567",
    "email": "info@oxford-ai-institute.com",
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Business Bay",
        "addressLocality": "دبي",
        "addressCountry": "AE",
        "addressRegion": "دبي"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "City of London",
        "addressLocality": "لندن",
        "addressCountry": "GB",
        "addressRegion": "إنجلترا"
      }
    ],
    "areaServed": [
      "الإمارات العربية المتحدة",
      "المملكة المتحدة",
      "فرنسا",
      "ألمانيا",
      "إيطاليا",
      "هولندا",
      "الولايات المتحدة",
      "سنغافورة",
      "إسبانيا",
      "كوريا الجنوبية",
      "اليابان"
    ],
    "serviceType": [
      "التدريب المهني",
      "دورات الذكاء الاصطناعي",
      "التطوير المهني",
      "التعليم التقني"
    ],
    "educationalCredentialAwarded": "شهادة مهنية معتمدة",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "شهادة معتمدة في الذكاء الاصطناعي",
      "credentialCategory": "Professional Certificate"
    },
    "sameAs": [
      "https://www.linkedin.com/company/oxford-ai-institute",
      "https://twitter.com/oxford_ai_institute",
      "https://www.facebook.com/oxfordaiinstitute",
      "https://www.youtube.com/c/oxfordaiinstitute"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"],
      "areaServed": "Worldwide"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "معهد اكسفورد للذكاء الاصطناعي",
    "url": "https://oxford-ai-institute.com",
    "description": "موقع معهد اكسفورد للذكاء الاصطناعي - دورات تدريبية متقدمة في 12 مدينة عالمية",
    "inLanguage": "ar",
    "publisher": {
      "@type": "Organization",
      "name": "معهد اكسفورد للذكاء الاصطناعي"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://oxford-ai-institute.com/courses?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://oxford-ai-institute.com"
      }
    ]
  }

  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "دورات الذكاء الاصطناعي المتقدمة",
    "description": "برامج تدريبية شاملة في مجال الذكاء الاصطناعي والتقنيات الحديثة",
    "provider": {
      "@type": "Organization",
      "name": "معهد اكسفورد للذكاء الاصطناعي"
    },
    "courseMode": "blended",
    "educationalLevel": "professional",
    "teaches": [
      "الذكاء الاصطناعي",
      "تعلم الآلة",
      "معالجة اللغات الطبيعية",
      "الرؤية الحاسوبية",
      "تحليل البيانات"
    ],
    "availableLanguage": "Arabic",
    "timeRequired": "P3M",
    "totalHistoricalEnrollment": 10000,
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "availability": "https://schema.org/InStock"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي مدة الدورات التدريبية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تتراوح مدة الدورات من أسبوع إلى 3 أشهر حسب نوع الدورة ومستوى التخصص المطلوب."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون شهادات معتمدة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم شهادات مهنية معتمدة دولياً في جميع مجالات التدريب."
        }
      },
      {
        "@type": "Question",
        "name": "في كم مدينة تقدمون الدورات؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقدم دوراتنا في 12 مدينة عالمية: لندن، باريس، فرانكفورت، روما، أمستردام، دبي، لوس أنجلوس، سنغافورة، برشلونة، مدريد، سيؤول، وطوكيو."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
      
      <Script
        id="course-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseData)
        }}
      />
      
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
    </>
  )
}

