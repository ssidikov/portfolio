'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Définition des traductions
type TranslationMap = {
  [key: string]: string
}

const translations: Record<Language, TranslationMap> = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À propos',
    'nav.prices': 'Tarifs',
    'nav.contact': 'Me contacter',

    // Hero
    'hero.title1': 'Développeur web',
    'hero.title2': 'Digitalisez votre business avec un site web pro',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'Création de sites web performants et modernes sur mesure. La transformation digital commence ici.',
    'hero.contact': 'Me contacter',
    'hero.download': '',
    'hero.viewWork': 'Voir mes projets',

    // Expertise
    'expertise.title': 'Mes Compétences',
    'expertise.subtitle': 'Ce que je propose',
    'expertise.item1.title': 'Développement web',
    'expertise.item1.description':
      'Sites web performants, adaptatifs et construits avec des technologies de pointe',
    'expertise.item2.title': 'UI & UX Design',
    'expertise.item2.description':
      'Designs intuitifs et esthétiques, pensés pour une expérience utilisateur optimale',
    'expertise.item3.title': 'Branding & Logo',
    'expertise.item3.description':
      'Identité visuelle forte et cohérente pour valoriser votre marque',
    'expertise.item4.title': 'Intégration API',
    'expertise.item4.description':
      'Connexion fluide entre l’interface utilisateur et vos services backend',

    // About
    'about.title': 'À propos',
    'about.subtitle': 'Mon profil',
    'about.p1':
      'Je suis Sardor, développeur web freelance basé à Paris. J’aide les indépendants, PME et associations à construire des sites internet performants, évolutifs et centrés sur l’utilisateur. Mon approche est basée sur l’écoute, la qualité du code et la pérennité de vos projets.',
    'about.p2':
      'Curieux et rigoureux, je combine bonnes pratiques, veille technologique et sens du détail pour livrer des expériences digitales percutantes et sur mesure.',

    // Technologies
    'tech.title': 'Technologies',
    'tech.suffix': 'J’utilise pour créer des sites web modernes et performants',

    // Portfolio
    'portfolio.title': 'Projets récents',
    'portfolio.subtitle': 'Mes réalisations',
    'portfolio.viewAll': 'Voir tout',
    'portfolio.viewDetails': 'Détails du projet',
    'portfolio.showMore': 'Afficher plus',
    'portfolio.viewProject': 'Accéder au site',
    'project.notFound': 'Projet non trouvé',

    // Tarifs
    'prices.title': 'Tarifs',
    'prices.subtitle': 'Des solutions accessibles et sur mesure',
    'prices.description':
      'Des sites modernes et efficaces pour vous lancer, vous développer ou vendre en ligne.',

    // Offre 1
    'prices.tier1.name': 'Site Présence Simple',
    'prices.tier1.price': 'À partir de 500€',
    'prices.tier1.description': 'Idéal pour une présence en ligne rapide, claire et rassurante.',
    'prices.tier1.feature1': 'Site one-page ou jusqu’à 3 pages',
    'prices.tier1.feature2': 'Design responsive et rapide',
    'prices.tier1.feature3': 'Présentation claire de vos services',
    'prices.tier1.feature4': 'Formulaire de contact intégré',
    'prices.tier1.feature5': 'Optimisation SEO de base',
    'prices.tier1.feature6': 'Mise en ligne sur votre hébergement',
    'prices.tier1.feature7': 'Design personnalisé et cohérent',
    'prices.tier1.cta': 'Lancer mon projet',

    // Offre 2
    'prices.tier2.name': 'Site Vitrine Pro',
    'prices.tier2.price': 'À partir de 900€',
    'prices.tier2.description':
      'Un site complet et professionnel pour développer votre visibilité locale.',
    'prices.tier2.feature1': 'Jusqu’à 6 pages personnalisées',
    'prices.tier2.feature2': 'Design moderne et structuré',
    'prices.tier2.feature3': 'Optimisation SEO sur chaque page',
    'prices.tier2.feature4': 'Blog ou portfolio simple (facultatif)',
    'prices.tier2.feature5': 'Pages éditables avec CMS (facultatif)',
    'prices.tier2.feature6': 'Suivi & conseils post-livraison (1 mois)',
    'prices.tier2.feature7': 'Connexion Google Analytics (si souhaité)',
    'prices.tier2.feature8': 'Performance mobile optimisée',
    'prices.tier2.feature9': 'Site évolutif pour vos futurs besoins',
    'prices.tier2.cta': 'Voir les détails',

    // Offre 3
    'prices.tier3.name': 'Site Business Premium',
    'prices.tier3.price': 'Sur devis',
    'prices.tier3.description': 'Une solution sur mesure pour votre croissance digitale.',
    'prices.tier3.feature1': 'Design premium avec identité visuelle forte',
    'prices.tier3.feature2': 'Structure narrative + pages stratégiques',
    'prices.tier3.feature3': 'SEO avancé (métadonnées, contenu, technique)',
    'prices.tier3.feature4': 'Performances optimisées (vitesse, accessibilité)',
    'prices.tier3.feature5': 'Pages 100% administrables avec CMS',
    'prices.tier3.feature6': 'Blog, portfolio ou landing pages incluses',
    'prices.tier3.feature7': 'Préparation à la publicité ou référencement payant',
    'prices.tier3.feature8': 'Assistance technique personnalisée (3 mois)',
    'prices.tier3.feature9': 'Formation courte à l’édition du site',
    'prices.tier3.feature10': 'Installation complète sur votre domaine',
    'prices.tier3.cta': 'Obtenir un devis',

    'prices.custom':
      'Vous avez un besoin spécifique ? Contactez-moi pour une solution personnalisée.',
    'prices.quote': 'Demander un devis',

    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.description':
      'Vous avez un projet web ? Parlons-en !\nJe vous accompagne de l’idée à la mise en ligne : site vitrine, refonte, SEO, performance, accessibilité… Chaque projet est unique, et je suis là pour vous conseiller à chaque étape.',
    'contact.address': 'Paris, France',
    'contact.send': 'Demander un devis gratuit',
    'contact.firstName': 'Prénom',
    'contact.placeholder.firstName': 'Votre prénom',
    'contact.lastName': 'Nom',
    'contact.placeholder.lastName': 'Votre nom de famille',
    'contact.email': 'E-mail',
    'contact.placeholder.email': 'Votre adresse e-mail',
    'contact.phone': 'Téléphone',
    'contact.placeholder.phone': 'Votre numéro de téléphone',
    'contact.message': 'Message',
    'contact.placeholder.message': 'Votre message',

    // Footer
    'footer.rights':
      'Sardorbek Sidikov — Développeur Web à Paris. Création de sites internet sur mesure.',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.prices': 'Pricing',
    'nav.contact': 'Contact Me',

    'hero.title1': 'Web Developer',
    'hero.title2': 'Digitize your business with a pro website',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'Custom-built websites that are fast, modern, and effective. Your digital transformation starts here.',
    'hero.contact': 'Contact Me',
    'hero.viewWork': 'View My Work',

    'expertise.title': 'My Skills',
    'expertise.subtitle': 'What I propose',
    'expertise.item1.title': 'Web Development',
    'expertise.item1.description':
      'Fast and scalable websites using modern frameworks like React and Next.js.',
    'expertise.item2.title': 'UI & UX Design',
    'expertise.item2.description':
      'Clean, intuitive interfaces designed for user experience and conversion.',
    'expertise.item3.title': 'Brand Identity',
    'expertise.item3.description':
      'Creating unique logos and branding systems to elevate your image.',
    'expertise.item4.title': 'API Integration',
    'expertise.item4.description':
      'Connecting your website to external services for dynamic functionality.',

    'about.title': 'About',
    'about.subtitle': 'Who I Am',
    'about.p1':
      'I’m Sardor, a freelance web developer based in Paris. I help small businesses, startups, and professionals bring their digital projects to life with high-quality, scalable code.',
    'about.p2':
      'Focused on quality and clean design, I combine frontend expertise with an eye for user experience. I build fast, accessible, and modern websites that deliver results.',

    'tech.title': 'Technologies',
    'tech.suffix': 'I use to build modern, high-performance websites',

    'portfolio.title': 'Recent Projects',
    'portfolio.subtitle': 'Selected Work',
    'portfolio.viewAll': 'View All',
    'portfolio.viewDetails': 'Project Details',
    'portfolio.showMore': 'Show More',
    'portfolio.viewProject': 'Visit Site',
    'project.notFound': 'Project not found',

    'prices.title': 'Pricing',
    'prices.subtitle': 'Accessible and tailored solutions',
    'prices.description':
      'Modern and efficient websites to launch, grow, or sell your services online.',

    'prices.tier1.name': 'Simple Online Presence',
    'prices.tier1.price': 'From €500',
    'prices.tier1.description': 'Perfect for a fast and trustworthy online presence.',
    'prices.tier1.feature1': 'One-page site or up to 3 pages',
    'prices.tier1.feature2': 'Responsive and fast design',
    'prices.tier1.feature3': 'Clear presentation of your services',
    'prices.tier1.feature4': 'Integrated contact form',
    'prices.tier1.feature5': 'Basic SEO optimization',
    'prices.tier1.feature6': 'Deployment on your hosting',
    'prices.tier1.feature7': 'Custom and coherent design',
    'prices.tier1.cta': 'Start my project',

    'prices.tier2.name': 'Pro Showcase Site',
    'prices.tier2.price': 'From €900',
    'prices.tier2.description': 'A complete and professional site to boost your local visibility.',
    'prices.tier2.feature1': 'Up to 6 custom pages',
    'prices.tier2.feature2': 'Modern and structured design',
    'prices.tier2.feature3': 'On-page SEO optimization',
    'prices.tier2.feature4': 'Simple blog or portfolio (optional)',
    'prices.tier2.feature5': 'CMS editable pages (optional)',
    'prices.tier2.feature6': 'Post-launch support & tips (1 month)',
    'prices.tier2.feature7': 'Google Analytics setup (if needed)',
    'prices.tier2.feature8': 'Optimized for mobile performance',
    'prices.tier2.feature9': 'Scalable site for future needs',
    'prices.tier2.cta': 'View details',

    'prices.tier3.name': 'Premium Business Website',
    'prices.tier3.price': 'On request',
    'prices.tier3.description': 'A tailored solution for your digital growth.',
    'prices.tier3.feature1': 'Premium design with strong branding',
    'prices.tier3.feature2': 'Strategic pages & custom structure',
    'prices.tier3.feature3': 'Advanced SEO (meta, content, tech)',
    'prices.tier3.feature4': 'Optimized performance (speed, accessibility)',
    'prices.tier3.feature5': '100% editable pages with CMS',
    'prices.tier3.feature6': 'Includes blog, portfolio or landing pages',
    'prices.tier3.feature7': 'Ad-ready & conversion-oriented',
    'prices.tier3.feature8': '3-month technical support',
    'prices.tier3.feature9': 'Training to manage the site easily',
    'prices.tier3.feature10': 'Fully set up on your domain',
    'prices.tier3.cta': 'Request a quote',

    'prices.custom': 'Need something custom? Contact me to discuss your project.',
    'prices.quote': 'Request a quote',

    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let’s Talk',
    'contact.description':
      'Have a project in mind? I can help you design, build and launch it. Whether it’s a business website or a custom web app, I’m here to turn your ideas into reality.',
    'contact.send': 'Request a Quote',
    'contact.firstName': 'First Name',
    'contact.placeholder.firstName': 'Your first name',
    'contact.lastName': 'Last Name',
    'contact.placeholder.lastName': 'Your last name',
    'contact.email': 'Email',
    'contact.placeholder.email': 'Your email address',
    'contact.phone': 'Phone',
    'contact.placeholder.phone': 'Your phone number',
    'contact.message': 'Message',
    'contact.placeholder.message': 'Your message',

    'footer.rights': 'Sardorbek Sidikov — Web Developer in Paris. Custom website development.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'Обо мне',
    'nav.prices': 'Тарифы',
    'nav.contact': 'Связаться',

    'hero.title1': 'Веб-разработчик',
    'hero.title2': 'Разработка сайтов для вашего бизнеса',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'Индивидуальная и профессиональная разработка быстрых и современных сайтов. Ваша цифровая трансформация начинается здесь.',
    'hero.contact': 'Связаться',
    'hero.viewWork': 'Проекты',

    'expertise.title': 'Навыки',
    'expertise.subtitle': 'Что я предлагаю',
    'expertise.item1.title': 'Веб-разработка',
    'expertise.item1.description': 'Создание современных, быстрых и масштабируемых сайтов.',
    'expertise.item2.title': 'UI и UX дизайн',
    'expertise.item2.description':
      'Удобные и привлекательные интерфейсы, ориентированные на пользователя.',
    'expertise.item3.title': 'Брендинг и логотипы',
    'expertise.item3.description':
      'Создание уникального визуального стиля и логотипа для вашего бизнеса.',
    'expertise.item4.title': 'Интеграция API',
    'expertise.item4.description':
      'Интеграция внешних сервисов и API для расширения функциональности.',

    'about.title': 'Обо мне',
    'about.subtitle': 'Мой профиль',
    'about.p1':
      'Я — Сардор, веб-разработчик из Парижа. Помогаю малому бизнесу, фрилансерам и стартапам запускать сайты и веб-приложения, которые работают.',
    'about.p2':
      'Сосредоточен на производительности, чистом коде и современном дизайне. Стремлюсь к тому, чтобы каждый проект приносил реальную пользу.',

    'tech.title': 'Технологии',
    'tech.suffix': 'Я использую для создания современных и эффективных сайтов',

    'portfolio.title': 'Недавние проекты',
    'portfolio.subtitle': 'Избранные работы',
    'portfolio.viewAll': 'Смотреть все',
    'portfolio.viewDetails': 'Подробнее о проекте',
    'portfolio.showMore': 'Показать ещё',
    'portfolio.viewProject': 'Перейти на сайт',
    'project.notFound': 'Проект не найден',

    'prices.title': 'Тарифы',
    'prices.subtitle': 'Доступные и адаптированные решения',
    'prices.description':
      'Современные сайты, чтобы запустить, развивать или продвигать ваш бизнес в интернете.',

    'prices.tier1.name': 'Cайт-визитка',
    'prices.tier1.price': 'от 500€',
    'prices.tier1.description': 'Идеально для быстрой и надёжной онлайн-презентации бизнеса.',
    'prices.tier1.feature1': 'Одна страница или до 3 страниц',
    'prices.tier1.feature2': 'Адаптивный и быстрый дизайн',
    'prices.tier1.feature3': 'Чёткое описание ваших услуг',
    'prices.tier1.feature4': 'Контактная форма',
    'prices.tier1.feature5': 'Базовая SEO-оптимизация',
    'prices.tier1.feature6': 'Публикация на вашем хостинге',
    'prices.tier1.feature7': 'Персонализированный и согласованный дизайн',
    'prices.tier1.cta': 'Запустить проект',

    'prices.tier2.name': 'Pro Сайт для бизнеса',
    'prices.tier2.price': 'от 900€',
    'prices.tier2.description': 'Полноценный сайт для малого бизнеса и предпринимателей.',
    'prices.tier2.feature1': 'До 6 индивидуальных страниц',
    'prices.tier2.feature2': 'Современный и структурированный дизайн',
    'prices.tier2.feature3': 'SEO-оптимизация каждой страницы',
    'prices.tier2.feature4': 'Блог или портфолио (по желанию)',
    'prices.tier2.feature5': 'Редактируемые страницы через CMS (по желанию)',
    'prices.tier2.feature6': 'Поддержка и советы после запуска (1 месяц)',
    'prices.tier2.feature7': 'Установка Google Analytics (если нужно)',
    'prices.tier2.feature8': 'Оптимизация под мобильные устройства',
    'prices.tier2.feature9': 'Гибкая структура под развитие проекта',
    'prices.tier2.cta': 'Подробнее',

    'prices.tier3.name': 'Premium Сайт для бизнеса',
    'prices.tier3.price': 'По договорённости',
    'prices.tier3.description': 'Индивидуальное решение для серьёзного роста и продвижения.',
    'prices.tier3.feature1': 'Премиум-дизайн и фирменный стиль',
    'prices.tier3.feature2': 'Стратегическая структура и контент',
    'prices.tier3.feature3': 'Продвинутая SEO-оптимизация',
    'prices.tier3.feature4': 'Максимальная производительность сайта',
    'prices.tier3.feature5': 'Полная редактируемость через Sanity CMS',
    'prices.tier3.feature6': 'Блог, портфолио или лендинги включены',
    'prices.tier3.feature7': 'Готовность к рекламе и продвижению',
    'prices.tier3.feature8': 'Техническая поддержка 3 месяца',
    'prices.tier3.feature9': 'Обучение по редактированию сайта',
    'prices.tier3.feature10': 'Полная установка на ваш домен',
    'prices.tier3.cta': 'Запросить предложение',

    'prices.custom': 'Нужен индивидуальный проект? Свяжитесь со мной для обсуждения.',
    'prices.quote': 'Запросить расчёт',

    'contact.title': 'Связаться',
    'contact.subtitle': 'Обсудим проект',
    'contact.description':
      'Ищете разработчика сайта? Расскажите о проекте — я помогу запустить его быстро, качественно и с учётом ваших целей.',
    'contact.address': 'Париж, Франция',
    'contact.send': 'Оставить заявку',
    'contact.firstName': 'Имя',
    'contact.placeholder.firstName': 'Ваше имя',
    'contact.lastName': 'Фамилия',
    'contact.placeholder.lastName': 'Ваша фамилия',
    'contact.email': 'Электронная почта',
    'contact.placeholder.email': 'Ваш e-mail',
    'contact.phone': 'Телефон',
    'contact.placeholder.phone': 'Ваш номер телефона',
    'contact.message': 'Сообщение',
    'contact.placeholder.message': 'Ваше сообщение',

    'footer.rights': 'Сардорбек Сидиков — Веб-разработчик во Франции. Создание сайтов под ключ.',
  },
}

// Fonction pour détecter la langue du navigateur et la mapper à nos langues disponibles
const detectBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined' && navigator) {
    // Obtenir la langue du navigateur (ex: 'fr', 'en-US', 'ru-RU')
    const browserLang = navigator.language.toLowerCase().split('-')[0]

    // Mapper la langue du navigateur à nos langues disponibles
    if (browserLang === 'fr') return 'fr'
    if (browserLang === 'ru') return 'ru'

    // Par défaut, utiliser l'anglais pour toutes les autres langues
    return 'en'
  }

  // Fallback si window/navigator n'est pas disponible (SSR)
  return 'fr'
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: React.ReactNode
}

// export const LanguageProvider = ({ children }: LanguageProviderProps) => {
//   const [language, setLanguage] = useState<Language>('fr')
//   const [isInitialized, setIsInitialized] = useState(false)

//   useEffect(() => {
//     // Vérifier d'abord si une langue est déjà enregistrée dans localStorage
//     const savedLanguage = localStorage.getItem('language') as Language

//     if (savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)) {
//       setLanguage(savedLanguage)
//     } else {
//       // Si aucune langue n'est enregistrée, utiliser la langue du navigateur
//       const browserLanguage = detectBrowserLanguage()
//       setLanguage(browserLanguage)
//       localStorage.setItem('language', browserLanguage)
//     }

//     setIsInitialized(true)
//   }, [])

//   const handleSetLanguage = (newLanguage: Language) => {
//     setLanguage(newLanguage)
//     localStorage.setItem('language', newLanguage)
//   }

//   const t = (key: string): string => {
//     return translations[language][key] || key
//   }

//   // Attendre que la langue soit initialisée avant de rendre les enfants
//   if (!isInitialized && typeof window !== 'undefined') {
//     return null // ou un loader si nécessaire
//   }

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// export const LanguageProvider = ({ children }: LanguageProviderProps) => {
//   const [language, setLanguage] = useState<Language>(() => {
//     if (typeof window !== 'undefined') {
//       const savedLanguage = localStorage.getItem('language') as Language
//       return savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)
//         ? savedLanguage
//         : detectBrowserLanguage()
//     }
//     return 'fr' // Fallback для SSR
//   })

//   useEffect(() => {
//     localStorage.setItem('language', language)
//   }, [language])

//   const handleSetLanguage = (newLanguage: Language) => {
//     setLanguage(newLanguage)
//     localStorage.setItem('language', newLanguage)
//   }

//   const t = (key: string): string => {
//     return translations[language]?.[key] || key
//   }

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    const lang =
      savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)
        ? savedLanguage
        : detectBrowserLanguage()

    setLanguage(lang)
    localStorage.setItem('language', lang)
    setIsClient(true)
  }, [])

  if (!isClient) return null // избежание mismatch

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => translations[language]?.[key] || key

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
