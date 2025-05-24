'use client'

import { useState } from 'react'
import Prices from './Prices'
import PricesEn from './PricesEn'
import LanguageToggle from './LanguageToggle'
import AnimatedSection from './AnimatedSection'

export default function PricesSection() {
  const [language, setLanguage] = useState('fr')

  return (
    <section id='prices'>
      <div className='container mx-auto px-4 pt-4'>
        <AnimatedSection className='flex justify-end mb-4'>
          <LanguageToggle onLanguageChange={setLanguage} currentLanguage={language} />
        </AnimatedSection>
      </div>
      {language === 'fr' ? <Prices /> : <PricesEn />}
    </section>
  )
}
