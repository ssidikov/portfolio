'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { expertiseItems } from '@/data/portfolio-data'

export default function Expertise() {
  return (
    <section className='container mx-auto px-4 md:py-20 bg-card'>
      <h2 className='text-2xl font-semibold mb-2 text-primary'>My Skills</h2>
      <h3 className='text-3xl font-bold mb-12'>My Expertise</h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {expertiseItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

function Card({ item }: { item: { icon: string; title: string; description: string } }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`

  return (
    <div
      className='group relative rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900 p-6 transition-shadow'
      onMouseMove={handleMouseMove}>
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{ background }}
      />
      <div className='space-y-4'>
        <Image
          src={item.icon}
          alt={item.title}
          priority
          sizes='(max-width: 768px) 100px, 100px'
          width={100}
          height={100}
          className='object-cover w-10 h-10 dark:invert'
        />
        <h4 className='font-semibold text-gray-900 dark:text-white'>{item.title}</h4>
        <p className='text-sm text-gray-600 dark:text-gray-300 max-w-md'>{item.description}</p>
      </div>
    </div>
  )
}
