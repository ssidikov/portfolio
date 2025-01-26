import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

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
          <Button variant='outline'>View All</Button>
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <Card
            key={index}
            className='overflow-hidden hover:shadow-md dark:hover:shadow-slate-900 bg-card'>
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
                <Button variant='link' className='p-0 text-primary'>
                  View Details →
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className='mt-8 text-center'>
          <Button
            onClick={loadMoreProjects}
            variant='outline'
            className='bg-primary text-primary-foreground hover:bg-indigo-600'>
            Show More
          </Button>
        </div>
      )}
    </section>
  )
}
