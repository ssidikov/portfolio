import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useTariff } from '@/context/TariffContext'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export default function PricesEn() {
  const { setSelectedTariff } = useTariff()

  const handleTariffSelect = (tariffName: string) => {
    setSelectedTariff(tariffName)
    // Плавная прокрутка к секции контактов
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }
  const pricingTiers: PricingTier[] = [
    {
      name: 'Showcase Website',
      price: 'Starting at €1,200',
      description:
        'Perfect for small businesses and freelancers looking to establish their online presence.',
      features: [
        'Custom responsive design',
        'Up to 5 pages',
        'Basic SEO optimization',
        'Contact form',
        'Social media integration',
        'Hosting and domain (1 year)',
        'Usage training',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional Website',
      price: 'Starting at €2,500',
      description:
        'Comprehensive solution for businesses looking to strengthen their digital presence.',
      features: [
        'Premium responsive design',
        'Up to 10 pages',
        'Advanced SEO optimization',
        'Integrated blog',
        'Content management system',
        'Animations and interactions',
        'Google Analytics integration',
        'Hosting and domain (1 year)',
        'Technical support (3 months)',
      ],
      cta: 'Discover',
      highlighted: true,
    },
    {
      name: 'E-commerce',
      price: 'Starting at €4,000',
      description:
        'Complete solution to sell your products or services online with an optimal user experience.',
      features: [
        'Custom e-commerce design',
        'Unlimited product catalog',
        'Secure payment system',
        'Inventory management',
        'Cart and checkout system',
        'Customer accounts',
        'E-commerce SEO optimization',
        'Marketplace integrations',
        'High-performance hosting',
        'Technical support (6 months)',
      ],
      cta: 'Start Now',
    },
  ]

  return (
    <section id='prices' className='container mx-auto px-4 py-20'>
      <AnimatedSection>
        <h2 className='text-lg text-primary mb-2'>Pricing</h2>
        <h3 className='text-3xl font-bold mb-4'>Web Development Services</h3>
        <p className='text-muted-foreground max-w-2xl mb-12'>
          Tailored solutions for all your web development needs. Each project is unique, and prices
          may vary based on your specific requirements.
        </p>
      </AnimatedSection>

      <div className='grid md:grid-cols-3 gap-8'>
        {pricingTiers.map((tier, index) => (
          <AnimatedSection key={index}>
            <div
              className={`h-full flex flex-col rounded-lg border p-8 ${
                tier.highlighted
                  ? 'border-indigo-500 shadow-lg dark:shadow-indigo-900/20'
                  : 'border-gray-200 dark:border-gray-800'
              }`}>
              <div className='mb-5'>
                <h3 className='text-2xl font-bold'>{tier.name}</h3>
                <p className='text-xl font-semibold mb-4 gradient-text'>{tier.price}</p>
                <p className='text-muted-foreground'>{tier.description}</p>
              </div>

              <div className='mt-2 mb-8 flex-grow'>
                <ul className='space-y-3'>
                  {tier.features.map((feature, i) => (
                    <li key={i} className='flex items-start'>
                      <Check className='h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>              <button
                onClick={() => handleTariffSelect(tier.name)}
                className={`w-full py-3 rounded-md font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}>
                {tier.cta}
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>      <AnimatedSection className='mt-16 text-center'>
        <p className='text-lg mb-6'>Need a custom solution? Contact me to discuss your project.</p>
        <button 
          onClick={() => handleTariffSelect('')}
          className='px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors'>
          Request a Quote
        </button>
      </AnimatedSection>
    </section>
  )
}
