'use client'

import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <section
      id='home'
      className='relative pt-36 pb-20 md:pt-44 md:pb-28 container mx-auto px-4 flex flex-col items-center text-center'>
      {/* Background ambient glow */}
      <div className='pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden'>
        <div className='w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full' />
      </div>

      <AnimatedSection className='flex flex-col items-center max-w-4xl space-y-6'>
        {/* Status Badge */}
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Headline */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight'>
          <span className='gradient-text block mb-2'>{t('hero.title1')}</span>
          <span className='text-gray-900 dark:text-white'>{t('hero.title2')}</span>
        </h1>

        {/* Subtitle */}
        <p className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed'>
          {t('hero.description')}
        </p>

        {/* CTA Actions */}
        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full sm:w-auto'>
          <Link
            href='/#contact'
            className='w-full sm:w-auto'
            onClick={(e) => handleNavClick(e, 'contact')}>
            <button className='w-full sm:w-48 px-8 py-3.5 text-base font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center'>
              {t('hero.contact')}
            </button>
          </Link>

          <Link
            href='/#portfolio'
            className='w-full sm:w-auto'
            onClick={(e) => handleNavClick(e, 'portfolio')}>
            <button className='w-full sm:w-48 px-8 py-3.5 text-base font-semibold border border-indigo-500/40 text-indigo-600 dark:text-indigo-300 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 active:scale-[0.98] transition-all flex items-center justify-center'>
              {t('hero.viewWork')}
            </button>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  )
}

