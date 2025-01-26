import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='container mx-auto px-4 py-20'>
      <h2 className='text-lg text-primary mb-2'>About</h2>
      <h3 className='text-3xl font-bold mb-6'>About Me</h3>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='md:hidden relative h-[100px] animate-float'>
          <Image src='/logo.svg' alt='About illustration' fill className='object-contain' />
        </div>
        <div className='space-y-4'>
          <p className='text-muted-foreground'>
            Hi, I’m Sardor! With a strong focus on frontend development, I specialize in building
            efficient, user-friendly, and visually stunning web applications. I leverage
            technologies like React, Next.js, and TypeScript to deliver scalable and maintainable
            solutions.
          </p>
          <p className='text-muted-foreground'>
            Passionate about coding and problem-solving, I continually learn and apply best
            practices to create impactful digital experiences. Whether it's crafting responsive
            designs or integrating APIs, I bring precision and creativity to every project.
          </p>
        </div>
        <div className='hidden md:block relative h-[300px] animate-float'>
          <Image src='/logo.svg' alt='About illustration' fill className='object-contain' />
        </div>
      </div>
    </section>
  )
}
