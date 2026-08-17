import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio-data'
import ProjectDetailClient from '@/components/ProjectDetailClient'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }

  const title =
    typeof project.title === 'object'
      ? project.title.fr || project.title.en
      : project.title

  const description =
    typeof project.description === 'object'
      ? project.description.fr || project.description.en
      : project.description

  const imageUrl = project.image || '/images/sidikov-web.png'

  return {
    title: `${title} | Réalisation Web`,
    description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${title} | Sardorbek Sidikov`,
      description,
      url: `https://sidikov.tech/projects/${project.id}`,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Sardorbek Sidikov`,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const title =
    typeof project.title === 'object'
      ? project.title.fr || project.title.en
      : project.title

  const description =
    typeof project.description === 'object'
      ? project.description.fr || project.description.en
      : project.description

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    headline: title,
    description: description,
    image: project.image ? `https://sidikov.tech${project.image}` : undefined,
    url: `https://sidikov.tech/projects/${project.id}`,
    author: {
      '@type': 'Person',
      name: 'Sardorbek Sidikov',
      url: 'https://sidikov.tech',
    },
    keywords: project.technologies.join(', '),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailClient project={project} />
    </>
  )
}
