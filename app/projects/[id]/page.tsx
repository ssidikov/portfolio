'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { projects } from '@/data/portfolio-data'
import { LanguageProvider } from '@/context/LanguageContext'
import { useLanguage } from '@/context/LanguageContext'

const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id) || null
}

function ProjectPageContent({ params }: { params: { id: string } }) {
  const { t } = useLanguage()
  const project = getProjectById(params.id)

  if (!project) {
    return <div className='text-center py-12'>{t('project.notFound')}</div>
  }

  // Get localized project data
  const localizedProject = {
    ...project,
    title:
      t(`project.${project.id}.title`) !== `project.${project.id}.title`
        ? t(`project.${project.id}.title`)
        : project.title,
    longDescription:
      t(`project.${project.id}.longDescription`) !== `project.${project.id}.longDescription`
        ? t(`project.${project.id}.longDescription`)
        : project.longDescription,
  }

  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 pt-32 pb-12 min-h-screen'>
        <Link href='/projects'>
          <button className='px-4 py-2 text-sm border mb-10 p-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
            ← {t('portfolio.viewAll')}
          </button>
        </Link>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='relative h-[400px] rounded-xl overflow-hidden'>
            <Image
              src={localizedProject.image || '/placeholder.svg'}
              alt={localizedProject.title}
              fill
              className='object-cover object-top'
            />
          </div>
          <div className='space-y-6 flex flex-col justify-between'>
            <h1 className='text-4xl font-bold gradient-text'>{localizedProject.title}</h1>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              {localizedProject.longDescription}
            </p>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Technologies</h2>
              <div className='flex flex-wrap gap-2'>
                {localizedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={localizedProject.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 text-sm max-w-32 text-center'>
              {t('portfolio.viewProject')}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <LanguageProvider>
      <ProjectPageContent params={params} />
    </LanguageProvider>
  )
}
