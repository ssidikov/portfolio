import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/context/LanguageContext'
import { TariffProvider } from '@/context/TariffContext'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sidikov.tech'),
  title: {
    default: 'Sardorbek Sidikov | Développeur Web Freelance à Lyon',
    template: '%s | Sardorbek Sidikov',
  },
  description:
    'Développeur web freelance basé à Lyon. Création de sites internet rapides, modernes et sur mesure avec React, Next.js et TypeScript.',
  keywords: [
    'Développeur web Lyon',
    'Développeur React Lyon',
    'Développeur Next.js freelance',
    'Création site internet Lyon',
    'Développeur frontend freelance',
    'Sardorbek Sidikov',
    'Web developer Lyon',
  ],
  authors: [{ name: 'Sardorbek Sidikov', url: 'https://sidikov.tech' }],
  creator: 'Sardorbek Sidikov',
  publisher: 'Sardorbek Sidikov',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'ru_RU'],
    url: 'https://sidikov.tech',
    siteName: 'Sardorbek Sidikov | Développeur Web',
    title: 'Sardorbek Sidikov | Développeur Web Freelance à Lyon',
    description:
      'Développeur web freelance basé à Lyon. Création de sites internet rapides, modernes et sur mesure avec React, Next.js et TypeScript.',
    images: [
      {
        url: '/images/sidikov-web.png',
        width: 1200,
        height: 630,
        alt: 'Sardorbek Sidikov - Développeur Web Freelance à Lyon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sardorbek Sidikov | Développeur Web Freelance à Lyon',
    description:
      'Développeur web freelance basé à Lyon. Création de sites internet rapides, modernes et sur mesure avec React, Next.js et TypeScript.',
    images: ['/images/sidikov-web.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://sidikov.tech/#person',
      name: 'Sardorbek Sidikov',
      jobTitle: 'Développeur Web Freelance',
      url: 'https://sidikov.tech',
      image: 'https://sidikov.tech/images/sidikov-web.png',
      sameAs: [
        'https://github.com/ssidikov',
        'https://www.linkedin.com/in/sardorbeksidikov',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lyon',
        addressRegion: 'Auvergne-Rhône-Alpes',
        addressCountry: 'FR',
      },
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Web Development',
        'Search Engine Optimization',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://sidikov.tech/#business',
      name: 'Sardorbek Sidikov - Développeur Web',
      url: 'https://sidikov.tech',
      image: 'https://sidikov.tech/images/sidikov-web.png',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lyon',
        addressRegion: 'Auvergne-Rhône-Alpes',
        addressCountry: 'FR',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Lyon',
        },
        {
          '@type': 'Country',
          name: 'France',
        },
      ],
      provider: {
        '@id': 'https://sidikov.tech/#person',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sidikov.tech/#website',
      url: 'https://sidikov.tech',
      name: 'Sardorbek Sidikov',
      publisher: {
        '@id': 'https://sidikov.tech/#person',
      },
      inLanguage: ['fr-FR', 'en-US', 'ru-RU'],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} font-sans antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <LanguageProvider>
            <TariffProvider>
              <ClientLayout>{children}</ClientLayout>
            </TariffProvider>
          </LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
