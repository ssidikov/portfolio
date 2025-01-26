import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='pt-9 md:pt-32 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
      <div className='space-y-6 py-20'>
        <h1 className='text-4xl md:text-5xl/[1.2] font-bold leading-tight'>
          <span className='text-primary'>Developer </span>of Modern <br />
          <span className='text-primary'> Web </span>Experiences
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
        <p className='text-muted-foreground max-w-96'>
          Building fast, responsive, and visually appealing web sites and applications with React,
          Next.js, TypeScript and modern development practices. Let's bring your ideas to life.
        </p>
        <div className='flex flex-row gap-6'>
          <Link href='/#contact'>
            <button className='px-6 py-2 bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors text-primary-foreground w-40'>
              Contact Me
            </button>
          </Link>
          <button className='px-6 py-2 border text-black dark:text-primary-foreground border-indigo-500 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors w-40'>
            <a href='/CV-SIDIKOV.pdf' download='CV-SIDIKOV.pdf'>
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className='relative flex items-center justify-center w-full h-auto'>
        <div className='hidden md:block relative aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
          <Image
            src='/Sardorbek-Sidikov.png'
            alt='Hero image'
            width={500}
            height={500}
            className='object-cover w-full max-h-screen'
          />
        </div>
      </div>
    </section>
  )
}
