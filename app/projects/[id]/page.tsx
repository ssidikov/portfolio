import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react'

// This would typically come from a database or API
const getProjectById = (id: string) => {
  const projects = [
    {
      id: '1',
      title: 'Abune',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae hendrerit dolor sollicitudin amet augue. Nulla cursus a tempor purus maxim hendrerit dolor sollicitudin amet augue.',
      image: '/placeholder.svg',
      longDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae hendrerit dolor sollicitudin amet augue. Nulla cursus a tempor purus maxim hendrerit dolor sollicitudin amet augue. Ut euam porttitor ligit maximus. Vestibulum dolor mattis consectetur augit hendrerit dolor sollicitudin amet augue. Nulla cursus a tempor purus.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      link: 'https://example.com',
    },
    // Add more projects as needed
  ]
  return projects.find((p) => p.id === id)
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className='min-h-screen bg-background text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 py-20'>
        <Link href='/#portfolio'>
          <Button variant='outline' className='mb-8'>
            ← Back to Portfolio
          </Button>
        </Link>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='relative h-[400px] rounded-xl overflow-hidden'>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              fill
              className='object-cover'
            />
          </div>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold'>{project.title}</h1>
            <p className='text-lg text-gray-600'>{project.longDescription}</p>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Technologies Used</h2>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                Visit Project
              </a>
            </Button>
          </div>
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
            © 2025 Sardorbek SIDIKOV. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
