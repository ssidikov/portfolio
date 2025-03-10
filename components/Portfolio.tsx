'use client'

import { useState, Suspense, lazy } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { projects } from '@/data/portfolio-data'

interface PortfolioProps {
  title?: string
  subtitle?: string
  showAllProjects?: boolean
}

export default function Portfolio({
  title = 'Recent Projects',
  subtitle = 'Featured Portfolio',
  showAllProjects = false,
}: PortfolioProps) {
  const [visibleProjects, setVisibleProjects] = useState(4)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, projects.length))
  }

  return (
    <section id='portfolio' className='container mx-auto px-4 py-20'>
      <div className='flex justify-between items-center mb-12'>
        <div>
          <h2 className='text-lg text-primary mb-2'>{title}</h2>
          <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>{subtitle}</h3>
        </div>
        {!showAllProjects && (
          <Link href='/projects' className='flex self-end'>
            <button className='px-4 py-2 text-sm font-medium bg-transparent border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              View All
            </button>
          </Link>
        )}
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {projects.slice(0, showAllProjects ? projects.length : visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {!showAllProjects && visibleProjects < projects.length && (
        <div className='mt-8 text-center'>
          <button
            onClick={loadMoreProjects}
            className='px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-indigo-600 transition-colors'>
            Show More
          </button>
        </div>
      )}
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: { id: string; image: string; title: string; description: string }
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 80%)`

  return (
    <div
      className='group relative overflow-hidden dark:hover:shadow-slate-900 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg'
      onMouseMove={handleMouseMove}>
      <div className='relative h-48'>
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          className='object-cover object-top'
        />
      </div>
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100'
        style={{ background }}
      />
      <div className='p-6'>
        <h4 className='font-semibold mb-2 text-gray-900 dark:text-white'>{project.title}</h4>
        <p className='text-sm text-gray-600 dark:text-gray-300 min-h-20'>{project.description}</p>
        <Link href={`/projects/${project.id}`}>
          <button className='pt-2 pb-2 text-primary hover:text-indigo-500 text-sm'>
            View Details →
          </button>
        </Link>
      </div>
    </div>
  )
}
