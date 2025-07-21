import { Metadata } from 'next'

export const siteConfig = {
  name: 'معهد اكسفورد للذكاء الاصطناعي',
  description: 'معهد رائد في تدريب الذكاء الاصطناعي والسرد القصصي. نقدم دورات متخصصة في الذكاء الاصطناعي، الإدارة، والتقنية الحديثة في 12 مدينة عالمية.',
  url: 'https://oxford-ai-institute.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/oxford_ai_institute',
    linkedin: 'https://linkedin.com/company/oxford-ai-institute',
  },
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  keywords,
  canonicalUrl,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
  canonicalUrl?: string
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords?.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      url: canonicalUrl || siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@oxford_ai_institute',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressRegion: 'Dubai',
    addressLocality: 'Dubai',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-4-123-4567',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English'],
  },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
  ],
  offers: {
    '@type': 'Offer',
    category: 'Education',
    availability: 'https://schema.org/InStock',
  },
}

