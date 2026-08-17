'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Zap, ShieldCheck, Palette, Database, MapPin, Gauge } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  const techHighlights = [
    {
      title: t('about.tech.nextjs.title'),
      icon: Zap,
      tag: 'TikTok • Netflix • Twitch • Notion',
      desc: t('about.tech.nextjs.desc'),
    },
    {
      title: t('about.tech.typescript.title'),
      icon: ShieldCheck,
      tag: 'Type Safety & Stability',
      desc: t('about.tech.typescript.desc'),
    },
    {
      title: t('about.tech.tailwind.title'),
      icon: Palette,
      tag: 'Pixel-Perfect & Fast UI',
      desc: t('about.tech.tailwind.desc'),
    },
    {
      title: t('about.tech.backend.title'),
      icon: Database,
      tag: 'Scalable Databases & Cloud APIs',
      desc: t('about.tech.backend.desc'),
    },
  ]

  return (
    <section id='about' className='container mx-auto px-4 py-20 md:py-28'>
      {/* Section Header */}
      <AnimatedSection className='mb-12 md:mb-16'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3'>
          {t('about.badge')}
        </div>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight'>
          <span className='gradient-text'>{t('about.title')}</span>{' '}
          <span className='text-gray-900 dark:text-white'>— {t('about.subtitle')}</span>
        </h2>
      </AnimatedSection>

      {/* Main Profile Grid */}
      <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16'>
        {/* Profile Image Card */}
        <AnimatedSection className='lg:col-span-5 flex justify-center'>
          <div className='relative w-full max-w-md'>
            <div className='relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 shadow-xl'>
              <div className='relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800'>
                <Image
                  src='/images/sidikov-web.png'
                  alt='Sardorbek Sidikov - Développeur Web à Lyon'
                  fill
                  className='object-cover object-top'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px'
                  priority
                />
              </div>

              {/* Card Footer info */}
              <div className='mt-4 px-2 flex items-center justify-between'>
                <div>
                  <p className='font-bold text-base text-gray-900 dark:text-white'>
                    Sardorbek Sidikov
                  </p>
                  <p className='text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5'>
                    <span className='w-2 h-2 rounded-full bg-emerald-500' />
                    <span>Lyon, France</span>
                  </p>
                </div>
                <span className='px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'>
                  Web Developer
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Narrative & Philosophy */}
        <AnimatedSection className='lg:col-span-7 space-y-6'>
          <div className='space-y-4'>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-snug'>
              {t('about.intro')}
            </h3>
            <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
              {t('about.description')}
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-4 pt-2'>
            <FeatureCard
              title={t('about.feature1.title')}
              desc={t('about.feature1.desc')}
              icon={MapPin}
            />
            <FeatureCard
              title={t('about.feature2.title')}
              desc={t('about.feature2.desc')}
              icon={Gauge}
            />
          </div>
        </AnimatedSection>
      </div>

      {/* "Why I use these technologies" Sub-section */}
      <div className='mt-16 pt-12 border-t border-gray-200 dark:border-white/10'>
        <AnimatedSection className='mb-8'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white'>
            {t('about.techTitle')}
          </h3>
          <p className='text-muted-foreground text-sm sm:text-base max-w-2xl'>
            {t('about.techSubtitle')}
          </p>
        </AnimatedSection>

        <div className='grid md:grid-cols-2 gap-6'>
          {techHighlights.map((tech, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <TechCard item={tech} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechCard({
  item,
}: {
  item: {
    title: string
    tag: string
    desc: string
    icon: React.ComponentType<{ className?: string }>
  }
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 70%)`

  const IconComponent = item.icon

  return (
    <div
      className='group relative flex flex-col h-full rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900 p-6 min-h-[190px] md:min-h-[200px] smooth-animation'
      onMouseMove={handleMouseMove}>
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className='space-y-4 relative z-10'>
        <div className='flex items-center justify-between gap-2'>
          <div className='w-11 h-11 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center'>
            <IconComponent className='w-6 h-6 text-gray-900 dark:text-white' />
          </div>
          <span className='px-2.5 py-1 text-xs font-semibold rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-right'>
            {item.tag}
          </span>
        </div>
        <h4 className='font-semibold text-gray-900 dark:text-white text-lg'>{item.title}</h4>
        <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>{item.desc}</p>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  desc,
  icon: IconComponent,
}: {
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 70%)`

  return (
    <div
      className='group relative flex flex-col h-full rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900 p-5 smooth-animation'
      onMouseMove={handleMouseMove}>
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className='space-y-2 relative z-10'>
        <div className='flex items-center gap-2 text-gray-900 dark:text-white font-bold text-base'>
          <IconComponent className='w-5 h-5 flex-shrink-0 text-gray-700 dark:text-gray-300' />
          <span>{title}</span>
        </div>
        <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
          {desc}
        </p>
      </div>
    </div>
  )
}
