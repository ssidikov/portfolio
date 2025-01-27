import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: '1',
    title: 'Abune',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    title: 'App Dashboard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    title: 'Easy Rent',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '4',
    title: 'Project X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '5',
    title: 'Project Y',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '6',
    title: 'Project Z',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '7',
    title: 'Project A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
  {
    id: '8',
    title: 'Project B',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/placeholder.svg',
  },
]

export default function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(4)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, projects.length))
  }

  return (
    <section id='portfolio' className='container mx-auto px-4 py-20'>
      <div className='flex justify-between items-center mb-12'>
        <div>
          <h2 className='text-lg text-primary mb-2'>Recent Projects</h2>
          <h3 className='text-3xl font-bold'>Featured Portfolio</h3>
        </div>
        <Link href='/projects'>
          <button className='px-4 py-2 text-sm font-medium bg-transparent border rounded-md  hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            View All
          </button>
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className='overflow-hidden hover:shadow-md dark:hover:shadow-slate-900 bg-card border rounded-lg'>
            <div className='relative h-48'>
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='p-6'>
              <h4 className='font-semibold mb-2 text-card-foreground'>{project.title}</h4>
              <p className='text-sm text-muted-foreground mb-4'>{project.description}</p>
              <Link href={`/projects/${project.id}`}>
                <button className='pt-2 pb-2 text-primary hover:text-indigo-500 text-sm'>
                  View Details →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
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
