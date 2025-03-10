'use client'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t bg-card'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Logo */}
          <div className='flex items-center order-1'>
            <Image src='/logo.svg' alt='Logo' width={200} height={100} priority />
          </div>

          {/* Social icons */}
          <div className='flex items-center gap-4 order-2 md:order-3'>
            <Link
              href='https://github.com/ssidikov'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <Github className='w-5 h-5' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/sardorbeksidikov'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <Linkedin className='w-5 h-5' />
            </Link>
          </div>

          {/* Copy right */}
          <div className='md:flex items-center text-sm text-muted-foreground order-3 md:order-2'>
            © {currentYear} Sardorbek SIDIKOV. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
