import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 py-12 pt-32'>
        <div className='flex justify-between mb-12'>
          <h1 className='text-3xl font-bold'>All Projects</h1>
          <Link href='/'>
            <button className='px-4 py-2 text-sm border mb-10 p-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
              Back to Home
            </button>
          </Link>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
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
      </main>
      <Footer />
    </div>
  )
}
