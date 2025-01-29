'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'

export default function ProjectsPage() {
  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 py-12 pt-32'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>All Projects</h1>
          <Link href='/'>
            <button className='px-4 py-2 text-sm border p-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
              Back to Home
            </button>
          </Link>
        </div>
        <Portfolio title='' subtitle='' showAllProjects />
      </main>
      <Footer />
    </div>
  )
}
