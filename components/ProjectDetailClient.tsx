'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Project } from '@/data/portfolio-data'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

interface ProjectDetailClientProps {
  project: Project | null
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { t, language } = useLanguage()
  const router = useRouter()
  const { scrollToSection } = useSmoothScroll()

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/projects')
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push('/')
    setTimeout(() => {
      scrollToSection('contact')
    }, 150)
  }

  if (!project) {
    return (
      <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
        <Header />
        <main className='container mx-auto px-4 pt-32 text-center py-12'>
          <p className='text-xl text-muted-foreground'>{t('project.notFound')}</p>
          <button
            onClick={handleBackClick}
            className='mt-6 px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
            ← {t('portfolio.viewAll')}
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  const localizedTitle =
    typeof project.title === 'object'
      ? project.title[language] || project.title.fr || project.title.en
      : project.title

  const localizedLongDesc =
    typeof project.longDescription === 'object'
      ? project.longDescription[language] ||
        project.longDescription.fr ||
        project.longDescription.en
      : project.longDescription

  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 pt-24 md:pt-32 min-h-screen'>
        <div className='float-right'>
          <button
            onClick={handleBackClick}
            className='px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
            ← {t('portfolio.viewAll')}
          </button>
        </div>
        <article className='grid md:grid-cols-2 gap-12 py-10 md:py-20 w-full'>
          <div className='relative h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800'>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={localizedTitle}
              fill
              className='object-cover object-top'
              priority
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
          <div className='space-y-6 flex flex-col justify-between'>
            <div>
              <h1 className='text-3xl sm:text-4xl font-bold gradient-text mb-4'>
                {localizedTitle}
              </h1>
              <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                {localizedLongDesc}
              </p>
            </div>
            <div>
              <h2 className='text-xl sm:text-2xl font-semibold mb-3'>Technologies</h2>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-row gap-4 justify-between md:justify-normal items-center pt-4'>
              <Link href='/#contact' onClick={handleContactClick} className='w-1/2 md:w-48'>
                <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center mx-auto'>
                  {t('hero.contact')}
                </button>
              </Link>

              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/2 md:w-48'>
                <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium border border-indigo-500 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors flex items-center justify-center mx-auto'>
                  {t('portfolio.viewProject')}
                </button>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
