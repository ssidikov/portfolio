import { useState } from 'react'
import Image from 'next/image'
import { technologies } from '@/data/portfolio-data'

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState('Technologies')

  return (
    <section className='container mx-auto px-4 py-20'>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-[1px] border border-gray-800 bg-gray-800'>
        {/* Title */}
        <div className='col-span-4 md:col-span-2 bg-background p-8 flex flex-col border justify-center'>
          <h2 className='text-2xl md:text-3xl font-bold leading-tight gradient-text'>
            {hoveredTech}
          </h2>
          <p className='text-2xl md:text-3xl font-bold leading-tight'>
            I use for building modern web applications
          </p>
        </div>

        {/* Technologies */}
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`relative bg-background aspect-square flex items-center justify-center group border-gray-800 ${
              index >= 8 ? 'hidden md:flex' : 'flex'
            }`}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech('Technologies')}>
            <div className='relative w-10 h-10 md:w-14 md:h-14'>
              <Image src={tech.icon} alt={tech.name} fill className='object-contain dark:invert' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
