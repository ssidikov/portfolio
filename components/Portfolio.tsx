import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
          <h3 className='text-3xl font-bold'>{subtitle}</h3>
        </div>
        {!showAllProjects && (
          <Link href='/projects'>
            <button className='px-4 py-2 text-sm font-medium bg-transparent border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              View All
            </button>
          </Link>
        )}
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {projects.slice(0, showAllProjects ? projects.length : visibleProjects).map((project) => (
          <div
            key={project.id}
            className='overflow-hidden hover:shadow-md dark:hover:shadow-slate-900 bg-card border rounded-lg'>
            <div className='relative h-48'>
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                className='object-cover object-top'
              />
            </div>
            <div className='p-6'>
              <h4 className='font-semibold mb-2 text-card-foreground'>{project.title}</h4>
              <p className='text-sm text-muted-foreground min-h-20'>{project.description}</p>
              <Link href={`/projects/${project.id}`}>
                <button className='pt-2 pb-2 text-primary hover:text-indigo-500 text-sm'>
                  View Details →
                </button>
              </Link>
            </div>
          </div>
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
