import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { technologies } from '@/data/portfolio-data'

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState('Technologies')

  return (
    <section className='container mx-auto px-4 py-20'>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-[1px] border border-gray-800 bg-gray-800'>
        {/* Title */}
        <div className='col-span-4 md:col-span-2 bg-background p-[clamp(1rem,2vw,2rem)] flex flex-col border justify-center'>
          <AnimatePresence mode='wait'>
            <motion.h2
              key={hoveredTech}
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.2 }}
              className='text-2xl md:text-[clamp(1rem,2.5vw,2.5rem)] font-bold leading-tight gradient-text'>
              {hoveredTech}
            </motion.h2>
          </AnimatePresence>
          <p className='text-2xl md:text-[clamp(1rem,1.5vw,2rem)] font-bold leading-tight'>
            I use for building modern <br />
            web applications
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
