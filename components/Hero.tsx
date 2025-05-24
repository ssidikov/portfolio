'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id='home'
      className='py-16 md:pt-32 md:pb-0 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
      {/* Left part - text and CTA*/}
      <AnimatedSection className='space-y-8'>
        <h1 className='text-4xl xl:text-6xl font-extrabold leading-tight tracking-tight'>
          <span className='text-3xl gradient-text block'>{t('hero.title1')}</span>
          <span className='text-gray-900 dark:text-white'>{t('hero.title2')}</span>
          <span className='gradient-text'> {t('hero.title3')}</span>{' '}
          <span className='text-gray-900 dark:text-white'>{t('hero.title4')}</span>
        </h1>
        <div className='md:hidden relative flex items-center justify-center w-full h-auto'>
          <div className='relative aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
            <Image
              src='/Sardorbek-Sidikov.png'
              alt='Hero image'
              width={500}
              height={500}
              className='object-cover w-full max-h-screen'
            />
          </div>
        </div>

        <h2 className='sm:text-lg md:text-xl text-muted-foreground max-w-xl'>
          {t('hero.description')}
        </h2>

        <div className='flex flex-row gap-4 justify-between md:justify-normal items-center'>
          <Link href='/#contact' className='w-1/2 md:w-48'>
            <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center mx-auto'>
              {t('hero.contact')}
            </button>
          </Link>

          <Link href='/#portfolio' className='w-1/2 md:w-48'>
            <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium border border-indigo-500 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors flex items-center justify-center mx-auto'>
              {t('hero.viewWork')}
            </button>
          </Link>
        </div>
      </AnimatedSection>

      {/* The right part is the image */}
      <AnimatedSection className='hidden md:w-full md:flex md:justify-center md:items-center aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
        <div className='relative w-full max-w-xl h-auto overflow-hidden'>
          <Image
            src='/Sardorbek-Sidikov.png'
            alt='Photo de Sardorbek Sidikov, développeur web à Paris'
            width={600}
            height={600}
            className='object-cover w-full h-auto'
            priority
          />
        </div>
      </AnimatedSection>
    </section>
  )
}
