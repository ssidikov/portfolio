import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', icon: '/logo/react.svg' },
  { name: 'Next.js', icon: '/logo/nextjs.svg' },
  { name: 'TypeScript', icon: '/logo/typescript.svg' },
  { name: 'JavaScript', icon: '/logo/javascript.svg' },
  { name: 'Tailwind', icon: '/logo/tailwindcss.svg' },
  { name: 'Redux', icon: '/logo/redux.svg' },
  { name: 'Vite', icon: '/logo/vite.svg' },
  { name: 'Git', icon: '/logo/git.svg' },
  { name: 'npm', icon: '/logo/npm.svg' },
  { name: 'Figma', icon: '/logo/figma.svg' },
]

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState('Technologies')

  return (
    <section className='container mx-auto px-4 py-20'>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-[1px] border border-gray-800 bg-gray-800'>
        {/* Заголовок */}
        <div className='col-span-4 md:col-span-2 bg-background p-8 min-h-[120px] flex items-center border'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className='text-2xl md:text-3xl font-bold leading-tight text-primary'>
              {hoveredTech}
            </h2>
            <p className='text-2xl md:text-3xl font-bold leading-tight'>
              I use for building modern web applications
            </p>
          </motion.div>
        </div>

        {/* Технологии */}
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className={`relative bg-background aspect-square flex items-center justify-center group border-gray-800 ${
              index >= 8 ? 'hidden md:flex' : 'flex'
            }`}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech('Technologies')}>
            <div className='relative w-10 h-10 md:w-14 md:h-14'>
              <Image src={tech.icon} alt={tech.name} fill className='object-contain dark:invert' />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
