import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='pt-9 md:pt-32 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
      <div className='space-y-6 py-20'>
        <h1 className='text-4xl md:text-5xl/[1.2] font-bold'>
          <span className='text-primary'>Developer </span>of Modern <br />
          <span className='text-primary'> Web </span>Experiences
        </h1>
        <div className='md:hidden relative flex items-center justify-center w-full h-auto'>
          <div className='relative aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
            <Image
              src='/Sardorbek-Sidikov.png'
              alt='Hero image'
              priority
              layout='intrinsic'
              width={500}
              height={100}
              className='object-cover w-full max-h-screen'
            />
          </div>
        </div>
        <p className='text-muted-foreground'>
          Building fast, responsive, and visually appealing web sites and applications with React,
          Next.js, TypeScript and modern development practices. Let's bring your ideas to life.
        </p>
        <div className='flex flex-row gap-6 justify-between md:justify-start'>
          <Link href='/#contact'>
            <Button
              size='lg'
              className='bg-primary text-primary-foreground hover:bg-indigo-600 w-40'>
              Contact Me
            </Button>
          </Link>
          <Button size='lg' className='bg-primary text-primary-foreground hover:bg-indigo-600 w-40'>
            <a href='/CV-SIDIKOV.pdf' download='CV-SIDIKOV.pdf'>
              Download CV
            </a>
          </Button>
        </div>
      </div>
      <div className='relative flex items-center justify-center w-full h-auto'>
        <div className='hidden md:block relative aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
          <Image
            src='/Sardorbek-Sidikov.png'
            alt='Hero image'
            priority
            layout='intrinsic'
            width={500}
            height={100}
            className='object-cover w-full max-h-screen'
          />
        </div>
      </div>
    </section>
  )
}
