import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/Header'
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react'

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
]

export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-background text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 py-20'>
        <div className='flex justify-between items-center mb-12'>
          <h1 className='text-3xl font-bold text-foreground'>All Projects</h1>
          <Link href='/'>
            <Button variant='outline'>Back to Home</Button>
          </Link>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card'>
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
      </main>
      <footer className='border-t bg-card'>
        <div className='container mx-auto px-4 py-12'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-full bg-primary' />
              <span className='font-semibold text-card-foreground'>Portfolio</span>
            </div>
            <nav className='flex items-center gap-6'>
              <Link href='/#home' className='text-sm hover:text-primary transition-colors'>
                Home
              </Link>
              <Link href='/#portfolio' className='text-sm hover:text-primary transition-colors'>
                Portfolio
              </Link>
              <Link href='/#about' className='text-sm hover:text-primary transition-colors'>
                About Me
              </Link>
              <Link href='/#contact' className='text-sm hover:text-primary transition-colors'>
                Contact
              </Link>
            </nav>
            <div className='flex items-center gap-4'>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Github className='w-5 h-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Linkedin className='w-5 h-5' />
              </a>
              <a href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
            </div>
          </div>
          <div className='mt-8 text-center text-sm text-muted-foreground'>
            © 2024 Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
