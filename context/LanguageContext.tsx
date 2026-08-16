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
    'hero.badge': 'Basé à Lyon, France • Disponible pour vos projets',
    'hero.title1': 'Développeur web',
    'hero.title2': 'Digitalisez votre business avec un site web pro',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'Création de sites web performants et modernes sur mesure. La transformation digitale commence ici.',
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
    'about.badge': 'À propos de moi',
    'about.title': 'Développeur Web',
    'about.subtitle': 'Basé à Lyon, France',
    'about.location': 'Lyon, France',
    'about.role': 'Développeur Web & Créateur de solutions digitales',
    'about.intro':
      'Je suis Sardorbek Sidikov, développeur web freelance basé à Lyon. J’aide les indépendants, PME et startups à concevoir et développer des sites web performants, modernes et sur mesure.',
    'about.description':
      'Spécialisé dans l’écosystème React et Next.js moderne, j’allie rigueur architecturale, sens esthétique aiguisé et optimisation des performances (Core Web Vitals, SEO, accessibilité) pour créer des produits digitaux à fort impact.',
    'about.p1':
      'Je suis Sardor, développeur web freelance basé à Lyon. J’aide les indépendants, PME et associations à construire des sites internet performants, évolutifs et centrés sur l’utilisateur. Mon approche est basée sur l’écoute, la qualité du code et la pérennité de vos projets.',
    'about.p2':
      'Curieux et rigoureux, je combine bonnes pratiques, veille technologique et sens du détail pour livrer des expériences digitales percutantes et sur mesure.',
    'about.feature1.title': 'Présentiel & Distanciel',
    'about.feature1.desc':
      'Basé à Lyon, disponible pour des projets locaux en région Auvergne-Rhône-Alpes ainsi qu’à distance partout dans le monde.',
    'about.feature2.title': 'Performance & Qualité',
    'about.feature2.desc':
      'Optimisation poussée des Core Web Vitals, temps de chargement ultra-rapides et architecture SEO friendly.',
    'about.techTitle': 'Technologies & Choix Techniques',
    'about.techSubtitle': 'Pourquoi j’utilise ces technologies de pointe',
    'about.tech.nextjs.title': 'Next.js & React',
    'about.tech.nextjs.desc':
      'Le standard industriel moderne adopté par des géants comme TikTok, Netflix, Twitch et Notion. Il offre un rendu ultra-rapide (SSR/SSG), un SEO optimal et une expérience utilisateur fluide.',
    'about.tech.typescript.title': 'TypeScript',
    'about.tech.typescript.desc':
      'Typage statique robuste garantissant un code fiable, sans bugs en production et facile à maintenir et faire évoluer.',
    'about.tech.tailwind.title': 'Tailwind CSS',
    'about.tech.tailwind.desc':
      'Architecture CSS moderne permettant un design soigné, 100% responsive et ultra-léger avec support natif du mode sombre.',
    'about.tech.backend.title': 'Node.js, PostgreSQL & API',
    'about.tech.backend.desc':
      'Gestion de données sécurisée et performante (Prisma, Drizzle, SQL) et intégration fluide de services cloud, CMS et APIs.',

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
    'contact.address': 'Lyon, France',
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
    'contact.sending': 'Envoi en cours...',

    // Form validation errors
    'validation.firstName.required': 'Le prénom est obligatoire',
    'validation.firstName.minLength': 'Le prénom doit contenir au moins 2 caractères',
    'validation.lastName.required': 'Le nom est obligatoire',
    'validation.lastName.minLength': 'Le nom doit contenir au moins 2 caractères',
    'validation.email.required': "L'adresse e-mail est obligatoire",
    'validation.email.invalid': 'Veuillez saisir une adresse e-mail valide',
    'validation.phone.required': 'Le numéro de téléphone est obligatoire',
    'validation.phone.invalid': 'Veuillez saisir un numéro de téléphone valide',
    'validation.tariff.required': 'Veuillez sélectionner un tarif',
    'validation.message.required': 'Le message est obligatoire',
    'validation.message.minLength': 'Le message doit contenir au moins 10 caractères',

    // Success popup messages
    'popup.success.title': 'Envoyé avec succès !',
    'popup.success.message':
      'Votre message a été envoyé avec succès. Nous vous répondrons bientôt !',

    // Footer
    'footer.rights':
      'Sardorbek Sidikov — Développeur Web à Lyon. Création de sites internet sur mesure.',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.prices': 'Pricing',
    'nav.contact': 'Contact Me',

    'hero.badge': '📍 Based in Lyon, France • Available for new projects',
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

    'about.badge': 'About Me',
    'about.title': 'Web Developer',
    'about.subtitle': 'Based in Lyon, France',
    'about.location': 'Lyon, France',
    'about.role': 'Web Developer & Digital Craftsman',
    'about.intro':
      'I’m Sardorbek Sidikov, a freelance web developer based in Lyon, France. I help small businesses, startups, and professionals build fast, scalable, and tailored web applications.',
    'about.description':
      'Specialized in the modern React and Next.js ecosystem, I blend solid software architecture with clean aesthetics and rigorous performance optimization (Core Web Vitals, SEO, accessibility) to deliver impactful digital products.',
    'about.p1':
      'I’m Sardor, a freelance web developer based in Lyon. I help small businesses, startups, and professionals bring their digital projects to life with high-quality, scalable code.',
    'about.p2':
      'Focused on quality and clean design, I combine frontend expertise with an eye for user experience. I build fast, accessible, and modern websites that deliver results.',
    'about.feature1.title': '📍 Local & Remote',
    'about.feature1.desc':
      'Based in Lyon, available for local on-site projects across Auvergne-Rhône-Alpes as well as remote collaborations worldwide.',
    'about.feature2.title': '⚡ Performance First',
    'about.feature2.desc':
      'Rigorous optimization for Core Web Vitals, instant loading speeds, and robust SEO architecture.',
    'about.techTitle': 'Technologies & Stack Rationale',
    'about.techSubtitle': 'Why I use these modern cutting-edge technologies',
    'about.tech.nextjs.title': 'Next.js & React',
    'about.tech.nextjs.desc':
      'The modern industry standard adopted by tech leaders like TikTok, Netflix, Twitch, and Notion. It delivers lightning-fast rendering (SSR/SSG), first-class SEO, and instant page transitions.',
    'about.tech.typescript.title': 'TypeScript',
    'about.tech.typescript.desc':
      'Industrial-grade static typing that eliminates runtime errors, improves code predictability, and guarantees long-term maintainability.',
    'about.tech.tailwind.title': 'Tailwind CSS',
    'about.tech.tailwind.desc':
      'Modern utility-first styling for agile, pixel-perfect, responsive layouts with zero runtime CSS overhead and seamless dark mode support.',
    'about.tech.backend.title': 'Node.js, PostgreSQL & APIs',
    'about.tech.backend.desc':
      'Type-safe, robust data layers (Prisma, Drizzle, SQL) and seamless integrations with cloud services, headless CMS, and external APIs.',

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
    'contact.address': 'Lyon, France',
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
    'contact.sending': 'Sending...',

    // Form validation errors
    'validation.firstName.required': 'First name is required',
    'validation.firstName.minLength': 'First name must be at least 2 characters',
    'validation.lastName.required': 'Last name is required',
    'validation.lastName.minLength': 'Last name must be at least 2 characters',
    'validation.email.required': 'Email address is required',
    'validation.email.invalid': 'Please enter a valid email address',
    'validation.phone.required': 'Phone number is required',
    'validation.phone.invalid': 'Please enter a valid phone number',
    'validation.tariff.required': 'Please select a pricing plan',
    'validation.message.required': 'Message is required',
    'validation.message.minLength': 'Message must be at least 10 characters',

    // Success popup messages
    'popup.success.title': 'Successfully Sent!',
    'popup.success.message':
      'Your message has been sent successfully. We will get back to you soon!',

    'footer.rights': 'Sardorbek Sidikov — Web Developer in Lyon. Custom website development.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'Обо мне',
    'nav.prices': 'Тарифы',
    'nav.contact': 'Связаться',

    'hero.badge': '📍 Лион, Франция • Открыт к новым проектам',
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

    'about.badge': 'Обо мне',
    'about.title': 'Веб-разработчик',
    'about.subtitle': 'Базируюсь в Лионе, Франция',
    'about.location': 'Лион, Франция',
    'about.role': 'Веб-разработчик и создатель цифровых продуктов',
    'about.intro':
      'Я — Сардорбек Сидиков, веб-разработчик из Лиона (Франция). Помогаю бизнесу, стартапам и экспертам создавать современные, быстрые и удобные сайты и веб-сервисы под ключ.',
    'about.description':
      'Специализируюсь на экосистеме React и Next.js. Объединяю надёжную архитектуру, внимание к деталям и глубокую оптимизацию производительности (SEO, Core Web Vitals, доступность) для создания эффективных цифровых решений.',
    'about.p1':
      'Я — Сардор, веб-разработчик из Лиона. Помогаю малому бизнесу, фрилансерам и стартапам запускать сайты и веб-приложения, которые работают.',
    'about.p2':
      'Сосредоточен на производительности, чистом коде и современном дизайне. Стремлюсь к тому, чтобы каждый проект приносил реальную пользу.',
    'about.feature1.title': '📍 Локально и онлайн',
    'about.feature1.desc':
      'Базируюсь в Лионе, доступен для локальных проектов в регионе Овернь — Рона — Альпы и удалённой работы по всему миру.',
    'about.feature2.title': '⚡ Скорость и качество',
    'about.feature2.desc':
      'Глубокая оптимизация Core Web Vitals, молниеносное время отклика и безупречная SEO-архитектура.',
    'about.techTitle': 'Технологический стек',
    'about.techSubtitle': 'Почему я выбираю передовые технологии',
    'about.tech.nextjs.title': 'Next.js и React',
    'about.tech.nextjs.desc':
      'Индустриальный стандарт, используемый мировыми лидерами вроде TikTok, Netflix, Twitch и Notion. Обеспечивает мгновенный рендеринг (SSR/SSG), высшие показатели SEO и плавный UX.',
    'about.tech.typescript.title': 'TypeScript',
    'about.tech.typescript.desc':
      'Строгая статическая типизация, устраняющая баги еще до продакшена и обеспечивающая надежность и легкость масштабирования.',
    'about.tech.tailwind.title': 'Tailwind CSS',
    'about.tech.tailwind.desc':
      'Современная утилитарная стилизация для чистого, адаптивного и ультрабыстрого интерфейса с нативной поддержкой темной темы.',
    'about.tech.backend.title': 'Node.js, PostgreSQL и API',
    'about.tech.backend.desc':
      'Надежные и безопасные базы данных (Prisma, Drizzle, SQL) и бесшовная интеграция со сторонними сервисами, CMS и API.',

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
    'prices.tier3.feature5': 'Полная редактируемость через CMS',
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
    'contact.address': 'Лион, Франция',
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
    'contact.sending': 'Отправка...',

    // Form validation errors
    'validation.firstName.required': 'Имя обязательно для заполнения',
    'validation.firstName.minLength': 'Имя должно содержать минимум 2 символа',
    'validation.lastName.required': 'Фамилия обязательна для заполнения',
    'validation.lastName.minLength': 'Фамилия должна содержать минимум 2 символа',
    'validation.email.required': 'Электронная почта обязательна для заполнения',
    'validation.email.invalid': 'Пожалуйста, введите корректный адрес электронной почты',
    'validation.phone.required': 'Номер телефона обязателен для заполнения',
    'validation.phone.invalid': 'Пожалуйста, введите корректный номер телефона',
    'validation.tariff.required': 'Пожалуйста, выберите тарифный план',
    'validation.message.required': 'Сообщение обязательно для заполнения',
    'validation.message.minLength': 'Сообщение должно содержать минимум 10 символов',

    // Success popup messages
    'popup.success.title': 'Успешно отправлено!',
    'popup.success.message': 'Ваше сообщение было успешно отправлено. Мы скоро свяжемся с вами!',

    'footer.rights': 'Сардорбек Сидиков — Веб-разработчик в Лионе. Создание сайтов под ключ.',
  },
}

// Функция для определения языка браузера и сопоставления с доступными языками
const detectBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined' && navigator) {
    // Получаем язык браузера (например: 'fr', 'en-US', 'ru-RU')
    const browserLang = navigator.language.toLowerCase().split('-')[0]

    // Также проверяем список всех языков браузера
    const browserLanguages = navigator.languages || [navigator.language]

    // Проверяем каждый язык из списка браузера
    for (const lang of browserLanguages) {
      const langCode = lang.toLowerCase().split('-')[0]
      if (langCode === 'fr') return 'fr'
      if (langCode === 'ru') return 'ru'
      if (langCode === 'en') return 'en'
    }

    // Если не найден точный матч, используем первый язык
    if (browserLang === 'fr') return 'fr'
    if (browserLang === 'ru') return 'ru'

    // По умолчанию используем английский для всех остальных языков
    return 'en'
  }

  // Fallback для SSR (серверный рендеринг)
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

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Сначала проверяем сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('language') as Language

    if (savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)) {
      // Если есть сохраненный язык, используем его
      setLanguage(savedLanguage)
    } else {
      // Если нет сохраненного языка, определяем язык браузера
      const browserLanguage = detectBrowserLanguage()
      setLanguage(browserLanguage)
      localStorage.setItem('language', browserLanguage)
    }

    setIsInitialized(true)
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  // Показываем детей сразу, но с fallback языком до инициализации
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
