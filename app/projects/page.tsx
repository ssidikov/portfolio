'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import { LanguageProvider } from '@/context/LanguageContext'
import { useLanguage } from '@/context/LanguageContext'

function ProjectsPageContent() {
  const { t } = useLanguage()

  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 pt-20 md:pt-32'>
        <div className='float-right'>
          <Link href='/'>
            <button className='px-4 py-2 text-sm border p-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
              ← {t('nav.home')}
            </button>
          </Link>
        </div>
        <Portfolio showAllProjects />
      </main>
      <Footer />
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsPageContent />
    </LanguageProvider>
  )
}
