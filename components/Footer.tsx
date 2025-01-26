'use client'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t bg-card'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-2'>
          <div className='flex items-center gap-2'>
            <Image src='/logo.svg' alt='Logo' layout='intrinsic' width={200} height={100} />
          </div>
          <nav className='flex flex-col gap-6'>
            <h2 className='text-lg font-semibold text-primary'>Pages</h2>
            <a href='#home' className='text-sm hover:text-primary transition-colors'>
              Home
            </a>
            <a href='#portfolio' className='text-sm hover:text-primary transition-colors'>
              Portfolio
            </a>
            <a href='#about' className='text-sm hover:text-primary transition-colors'>
              About Me
            </a>
          </nav>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold text-primary'>Contact</h2>
            <a
              href='mailto:sardorbek.sidikov7@gmail.com'
              className='text-sm hover:text-primary transition-colors'>
              sardorbek.sidikov7@gmail.com
            </a>
            <a href='tel:+33626932734' className='text-sm hover:text-primary transition-colors'>
              +33 6 26 93 27 34
            </a>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-lg font-semibold text-primary'>Follow me</h2>
            <div className='flex gap-4'>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Github className='w-5 h-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Linkedin className='w-5 h-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center text-sm text-muted-foreground'>
          © {currentYear} Sardorbek SIDIKOV. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
