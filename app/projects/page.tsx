import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'Tous les projets & Réalisations',
  description:
    'Découvrez l’ensemble de mes réalisations et projets web : applications SaaS, plateformes sur mesure, sites vitrines et outils open-source.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Tous les projets & Réalisations | Sardorbek Sidikov',
    description:
      'Découvrez l’ensemble de mes réalisations et projets web : applications SaaS, plateformes sur mesure, sites vitrines et outils open-source.',
    url: 'https://sidikov.tech/projects',
  },
}

export default function ProjectsPage() {
  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto py-20 pt-24 md:pt-32'>
        <Portfolio showAllProjects />
      </main>
      <Footer />
    </div>
  )
}
