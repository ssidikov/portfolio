'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DarkModeToggle } from './ui/DarkModeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background)/0.0)] backdrop-blur-md border-b border-[hsl(var(--border))]'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 z-50'>
          {' '}
          <Image
            src='/logo.svg'
            alt='Logo'
            width={200}
            height={100}
            priority
            className='w-auto max-w-48 h-10 md:h-14'
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </Link>

        {/* Mobile: language, theme, burger */}
        <div className='flex items-center md:hidden'>
          <LanguageSelector />
          <span className='w-2' />
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 transition-colors bg-[hsl(var(--background)/0.7)] backdrop-blur-md border border-[hsl(var(--border))] ${
              menuOpen ? 'opacity-50' : 'opacity-50 hover:opacity-100'
            }`}
            aria-label='Toggle menu'>
            <motion.svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              animate={menuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </motion.svg>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='/#home'
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'>
            {t('nav.home')}
          </Link>
          <Link
            href='/#portfolio'
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'>
            {t('nav.portfolio')}
          </Link>
          <Link
            href='/#about'
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'>
            {t('nav.about')}
          </Link>
          <Link
            href='/#about'
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'>
            {t('nav.prices')}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <Link href='/#contact'>
            <button className='px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
              {t('nav.contact')}
            </button>
          </Link>
          <LanguageSelector />
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='md:hidden w-full backdrop-blur-3xl border-b border-[hsl(var(--border))]'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}>
            <motion.nav
              className='flex flex-col items-start gap-4 py-6 px-4 w-full'
              variants={menuVariants}
              initial='hidden'
              animate='visible'>
              <motion.div variants={itemVariants}>
                <Link
                  href='/#home'
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'
                  onClick={() => setMenuOpen(false)}>
                  {t('nav.home')}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href='/#portfolio'
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'
                  onClick={() => setMenuOpen(false)}>
                  {t('nav.portfolio')}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href='/#about'
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'
                  onClick={() => setMenuOpen(false)}>
                  {t('nav.about')}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} className='w-full'>
                <Link href='/#contact' className='w-full' onClick={() => setMenuOpen(false)}>
                  <button className='w-full px-4 py-2 text-sm font-medium bg-transparent border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    {t('nav.contact')}
                  </button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
