import Image from 'next/image'
import { expertiseItems } from '@/data/portfolio-data'

export default function Expertise() {
  return (
    <section className='container mx-auto px-4 md:py-20 bg-card'>
      <h2 className='text-2xl font-semibold mb-2 text-primary'>My Skills</h2>
      <h3 className='text-3xl font-bold mb-12'>My Expertise</h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {expertiseItems.map((item, index) => (
          <article key={index} className='p-6 space-y-4 bg-card border rounded-lg'>
            <Image
              src={item.icon}
              alt={item.title}
              priority
              layout='intrinsic'
              width={100}
              height={100}
              className='object-cover w-10 h-10 dark:invert'
            />
            <h4 className='font-semibold text-card-foreground'>{item.title}</h4>
            <p className='text-sm text-muted-foreground max-w-md'>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
