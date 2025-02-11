'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DarkModeToggle } from './ui/DarkModeToggle'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-background-100 container mx-auto px-4 py-2 flex items-center justify-between'>
      <Link href='/' className='flex items-center gap-2 z-50'>
        <Image src='/logo.svg' alt='Logo' width={200} height={100} />
      </Link>

      <div className='flex items-center md:hidden'>
        <DarkModeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2'
          aria-label='Toggle menu'>
          <svg
            className={`w-6 h-6 transition-transform ${menuOpen ? 'rotate-90' : ''}`}
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation for all screens */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full md:static md:flex md:w-auto  md:mt-0 pb-4 md:pb-0 mt-4 md:flex-row md:gap-6 md:items-center md:justify-center bg-background md:bg-transparent`}>
        <Link
          href='/#home'
          className='block px-4 py-2 text-sm hover:text-primary transition-colors md:inline text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'
          onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          href='/#portfolio'
          className='block px-4 py-2 text-sm hover:text-primary transition-colors md:inline text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'
          onClick={() => setMenuOpen(false)}>
          Portfolio
        </Link>
        <Link
          href='/#about'
          className='block px-4 py-2 text-sm hover:text-primary transition-colors md:inline text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500'
          onClick={() => setMenuOpen(false)}>
          About me
        </Link>

        {/* Contact us button inside a burger-manager */}
        {menuOpen && (
          <Link
            href='/#contact'
            className='block px-4 py-2 text-sm hover:text-primary transition-colors md:inline text-gray-600 dark:text-gray-300 mt-4 md:mt-0'
            onClick={() => setMenuOpen(false)}>
            <button className='w-full md:w-auto px-4 py-2 text-sm font-medium bg-transparent border rounded-md  hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              Contact Me
            </button>
          </Link>
        )}
      </nav>

      {/* Contact and dark theme on large screens */}
      <div className='hidden md:flex items-center gap-4'>
        <Link href='/#contact'>
          <button className='px-4 py-2 text-sm border mr-2 p-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
            Contact Me
          </button>
        </Link>
        <DarkModeToggle />
      </div>
    </header>
  )
}
