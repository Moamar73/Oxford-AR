export interface Organization {
  '@context': string
  '@type': string
  name: string
  alternateName?: string
  url: string
  logo: string
  description: string
  address: {
    '@type': string
    addressCountry: string
    addressRegion: string
    addressLocality: string
  }
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    availableLanguage: string[]
  }
  sameAs: string[]
  foundingDate: string
  numberOfEmployees: string
  industry: string
}

export interface Article {
  '@context': string
  '@type': string
  headline: string
  description: string
  author: {
    '@type': string
    name: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  datePublished: string
  dateModified: string
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
  image?: string
  keywords: string[]
  articleSection: string
  wordCount: number
  inLanguage: string
}

export interface Course {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  courseMode: string
  educationalLevel: string
  teaches: string[]
  timeRequired: string
  inLanguage: string
  availableLanguage: string[]
  offers: {
    '@type': string
    category: string
    priceCurrency: string
    price: string
    availability: string
  }
}

export interface WebSite {
  '@context': string
  '@type': string
  name: string
  alternateName: string
  url: string
  description: string
  inLanguage: string
  potentialAction: {
    '@type': string
    target: {
      '@type': string
      urlTemplate: string
    }
    'query-input': string
  }
}

export const organizationSchema: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'معهد اكسفورد للذكاء الاصطناعي',
  alternateName: 'Oxford AI Institute',
  url: 'https://oxford-ai-institute.com',
  logo: 'https://oxford-ai-institute.com/logo.png',
  description: 'معهد رائد في تدريب الذكاء الاصطناعي والسرد القصصي باستخدام منهجية ماكنزي المتقدمة',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressRegion: 'Dubai',
    addressLocality: 'Dubai'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-123-4567',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English']
  },
  sameAs: [
    'https://linkedin.com/company/oxford-ai-institute',
    'https://twitter.com/oxford_ai_inst',
    'https://youtube.com/c/oxfordaiinstitute'
  ],
  foundingDate: '2009',
  numberOfEmployees: '50-100',
  industry: 'Education and Training'
}

export const websiteSchema: WebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'معهد اكسفورد للذكاء الاصطناعي',
  alternateName: 'Oxford AI Institute',
  url: 'https://oxford-ai-institute.com',
  description: 'معهد رائد في تدريب الذكاء الاصطناعي والسرد القصصي باستخدام منهجية ماكنزي المتقدمة',
  inLanguage: 'ar',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://oxford-ai-institute.com/courses?search={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  date: string
  slug: string
  category: string
  tags: string[]
  content: string
}): Article {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'معهد اكسفورد للذكاء الاصطناعي',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oxford-ai-institute.com/logo.png'
      }
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://oxford-ai-institute.com/articles/${article.slug}`
    },
    keywords: article.tags,
    articleSection: article.category,
    wordCount: article.content.split(' ').length,
    inLanguage: 'ar'
  }
}

export function generateCourseSchema(course: {
  title: string
  description: string
  duration: string
  level: string
  category: string
}): Course {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'معهد اكسفورد للذكاء الاصطناعي',
      url: 'https://oxford-ai-institute.com'
    },
    courseMode: 'blended',
    educationalLevel: course.level,
    teaches: [course.category],
    timeRequired: course.duration,
    inLanguage: 'ar',
    availableLanguage: ['ar', 'en'],
    offers: {
      '@type': 'Offer',
      category: 'professional training',
      priceCurrency: 'USD',
      price: 'Contact for pricing',
      availability: 'https://schema.org/InStock'
    }
  }
}

