'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

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
    'hero.title1': 'Développeur Web Freelance',
    'hero.title2': 'Création de sites internet sur mesure à Lyon',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'Je conçois des sites web rapides, bien référencés et adaptés à vos objectifs, du site vitrine à l’application sur mesure.',
    'hero.contact': 'Me contacter',
    'hero.download': '',
    'hero.viewWork': 'Voir mes réalisations',

    // Expertise
    'expertise.title': 'Mes Compétences',
    'expertise.subtitle': 'Ce que je propose',
    'expertise.item1.title': 'Développement web',
    'expertise.item1.description':
      'Sites web rapides, responsives et construits avec des technologies modernes.',
    'expertise.item2.title': 'UI & UX Design',
    'expertise.item2.description':
      'Interfaces claires et soignées, pensées pour faciliter le parcours de vos visiteurs.',
    'expertise.item3.title': 'Branding & Logo',
    'expertise.item3.description':
      'Identité visuelle cohérente pour donner une image professionnelle à votre activité.',
    'expertise.item4.title': 'Intégration API',
    'expertise.item4.description':
      'Connexion directe entre votre site et vos services backend, formulaires et outils externes.',

    // About
    'about.badge': 'À propos de moi',
    'about.title': 'Développeur Web',
    'about.subtitle': 'Lyon et à distance',
    'about.location': 'Lyon, France',
    'about.role': 'Développeur Web Freelance',
    'about.intro':
      'Je suis Sardorbek Sidikov, développeur web freelance à Lyon. J’accompagne les indépendants, PME et startups dans la création de sites internet rapides, clairs et durables.',
    'about.description':
      'Spécialisé dans l’écosystème React et Next.js, j’allie code propre, optimisation des temps de chargement (Core Web Vitals) et référencement naturel pour offrir une réelle visibilité à vos projets.',
    'about.p1':
      'Je suis Sardor, développeur web freelance basé à Lyon. J’aide les indépendants et entreprises à construire des sites performants et centrés sur l’utilisateur.',
    'about.p2':
      'Régularité, clarté et sens du détail sont au cœur de ma méthode pour livrer des sites fiables et faciles à utiliser.',
    'about.feature1.title': 'Présentiel & Distanciel',
    'about.feature1.desc':
      'Installé à Lyon, disponible pour des projets en région Auvergne-Rhône-Alpes et à distance partout ailleurs.',
    'about.feature2.title': 'Performance & SEO',
    'about.feature2.desc':
      'Optimisation des Core Web Vitals, temps de chargement courts et structure adaptée aux moteurs de recherche.',
    'about.techTitle': 'Choix Techniques',
    'about.techSubtitle':
      'Des technologies éprouvées pour un site rapide, sécurisé et facile à maintenir',
    'about.tech.nextjs.title': 'Next.js & React',
    'about.tech.nextjs.desc':
      'Le standard actuel pour les applications web rapides. Il garantit un chargement instantané, un bon référencement naturel et une navigation fluide.',
    'about.tech.typescript.title': 'TypeScript',
    'about.tech.typescript.desc':
      'Un typage statique rigoureux qui évite les erreurs en production et facilite la maintenance du code sur le long terme.',
    'about.tech.tailwind.title': 'Tailwind CSS',
    'about.tech.tailwind.desc':
      'Une structure CSS légère et moderne pour un design sur mesure, 100% adapté aux mobiles et tablettes.',
    'about.tech.backend.title': 'Node.js, PostgreSQL & API',
    'about.tech.backend.desc':
      'Gestion fiable des données (Prisma, SQL) et connexion fluide avec vos services cloud, CMS et outils tiers.',

    // Technologies
    'tech.title': 'Technologies',
    'tech.suffix': 'utilisées au quotidien pour concevoir des sites fiables et performants',

    // Portfolio
    'portfolio.title': 'Projets récents',
    'portfolio.subtitle': 'Mes réalisations',
    'portfolio.viewAll': 'Voir tous les projets',
    'portfolio.viewDetails': 'Détails du projet',
    'portfolio.showMore': 'Afficher plus',
    'portfolio.viewProject': 'Accéder au site',
    'project.notFound': 'Projet non trouvé',

    // Tarifs
    'prices.title': 'Tarifs',
    'prices.subtitle': 'Des formules claires et adaptées à vos besoins',
    'prices.description':
      'Des sites modernes et efficaces pour lancer votre activité, valoriser vos services ou développer votre visibilité.',

    // Offre 1
    'prices.tier1.name': 'Site Présence Simple',
    'prices.tier1.price': 'À partir de 500€',
    'prices.tier1.description': 'Une présence en ligne claire, rapide et rassurante pour démarrer.',
    'prices.tier1.feature1': 'Site one-page ou jusqu’à 3 pages',
    'prices.tier1.feature2': 'Design responsive adapté mobile',
    'prices.tier1.feature3': 'Présentation claire de vos services',
    'prices.tier1.feature4': 'Formulaire de contact fonctionnel',
    'prices.tier1.feature5': 'Optimisation SEO de base',
    'prices.tier1.feature6': 'Mise en ligne sur votre nom de domaine',
    'prices.tier1.feature7': 'Design personnalisé et soigné',
    'prices.tier1.cta': 'Lancer mon projet',

    // Offre 2
    'prices.tier2.name': 'Site Vitrine Pro',
    'prices.tier2.price': 'À partir de 900€',
    'prices.tier2.description':
      'Un site complet pour développer votre visibilité locale et convertir vos visiteurs.',
    'prices.tier2.feature1': 'Jusqu’à 6 pages personnalisées',
    'prices.tier2.feature2': 'Structure claire et design moderne',
    'prices.tier2.feature3': 'Optimisation SEO technique et balises',
    'prices.tier2.feature4': 'Blog ou portfolio simple (au choix)',
    'prices.tier2.feature5': 'Interface d’administration CMS (au choix)',
    'prices.tier2.feature6': 'Suivi et conseils après livraison (1 mois)',
    'prices.tier2.feature7': 'Configuration Google Analytics',
    'prices.tier2.feature8': 'Performance mobile soignée',
    'prices.tier2.feature9': 'Structure pensée pour évoluer facilement',
    'prices.tier2.cta': 'Voir les détails',

    // Offre 3
    'prices.tier3.name': 'Site Sur Mesure & Web App',
    'prices.tier3.price': 'Sur devis',
    'prices.tier3.description':
      'Une solution technique avancée pour des besoins spécifiques ou un projet sur mesure.',
    'prices.tier3.feature1': 'Design sur mesure avec identité visuelle',
    'prices.tier3.feature2': 'Pages stratégiques et parcours utilisateur',
    'prices.tier3.feature3': 'SEO avancé (données structurées, contenu, vitesse)',
    'prices.tier3.feature4': 'Performances élevées (Core Web Vitals)',
    'prices.tier3.feature5': 'Pages administrables avec CMS',
    'prices.tier3.feature6': 'Blog, portfolio ou espaces clients',
    'prices.tier3.feature7': 'Intégrations API et passerelles tierces',
    'prices.tier3.feature8': 'Support technique dédié (3 mois)',
    'prices.tier3.feature9': 'Prise en main guidée pour gérer votre site',
    'prices.tier3.feature10': 'Déploiement complet et sécurisation',
    'prices.tier3.cta': 'Obtenir un devis',

    'prices.custom': 'Un besoin particulier ? Contactez-moi pour étudier votre cahier des charges.',
    'prices.quote': 'Demander un devis',

    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Discutons de votre projet',
    'contact.description':
      'Vous avez un projet de création ou de refonte de site ? Écrivez-moi pour échanger sur vos besoins, vos délais et votre budget.',
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
      'Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.',

    // Footer
    'footer.rights':
      'Sardorbek Sidikov, développeur web à Lyon. Création de sites internet sur mesure.',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.prices': 'Pricing',
    'nav.contact': 'Contact Me',

    'hero.badge': 'Based in Lyon, France • Available for new projects',
    'hero.title1': 'Freelance Web Developer',
    'hero.title2': 'Custom Websites Built for Performance',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'I build fast, SEO-friendly websites and web applications tailored to your business, from showcase sites to custom platforms.',
    'hero.contact': 'Contact Me',
    'hero.viewWork': 'View My Work',

    'expertise.title': 'My Skills',
    'expertise.subtitle': 'What I provide',
    'expertise.item1.title': 'Web Development',
    'expertise.item1.description':
      'Fast and reliable websites built with modern frameworks like React and Next.js.',
    'expertise.item2.title': 'UI & UX Design',
    'expertise.item2.description':
      'Clean, intuitive interfaces designed for clear user navigation and conversions.',
    'expertise.item3.title': 'Brand Identity',
    'expertise.item3.description':
      'Consistent logos and visual identities to present a professional business image.',
    'expertise.item4.title': 'API Integration',
    'expertise.item4.description':
      'Direct connections to external services, databases, forms, and payment gateways.',

    'about.badge': 'About Me',
    'about.title': 'Web Developer',
    'about.subtitle': 'Lyon & Remote',
    'about.location': 'Lyon, France',
    'about.role': 'Freelance Web Developer',
    'about.intro':
      'I am Sardorbek Sidikov, a freelance web developer based in Lyon, France. I help freelancers, businesses, and startups build fast, reliable websites.',
    'about.description':
      'Specialized in React, Next.js, and TypeScript, I focus on clean code, fast page load speeds, and solid on-page SEO to help your business get found and convert visitors.',
    'about.p1':
      'I am Sardor, a freelance web developer based in Lyon. I build high-quality web applications focused on performance and usability.',
    'about.p2':
      'Attention to detail, reliability, and clean structure guide my work to ensure every project is durable and easy to maintain.',
    'about.feature1.title': 'Local & Remote',
    'about.feature1.desc':
      'Based in Lyon for local projects across Auvergne-Rhône-Alpes, and available remotely worldwide.',
    'about.feature2.title': 'Speed & SEO',
    'about.feature2.desc':
      'Core Web Vitals optimization, fast load times, and search engine friendly structure.',
    'about.techTitle': 'Tech Stack Rationale',
    'about.techSubtitle': 'Tested technologies chosen for speed, security, and long-term maintenance',
    'about.tech.nextjs.title': 'Next.js & React',
    'about.tech.nextjs.desc':
      'The modern standard for fast web apps, offering server-side rendering, solid SEO foundations, and instant page transitions.',
    'about.tech.typescript.title': 'TypeScript',
    'about.tech.typescript.desc':
      'Static typing that catches bugs early and keeps the codebase maintainable as your project grows.',
    'about.tech.tailwind.title': 'Tailwind CSS',
    'about.tech.tailwind.desc':
      'A utility CSS system that creates lightweight, fully responsive layouts without bloat.',
    'about.tech.backend.title': 'Node.js, PostgreSQL & APIs',
    'about.tech.backend.desc':
      'Secure database management with Prisma and SQL, plus clean connections to external services and APIs.',

    'tech.title': 'Technologies',
    'tech.suffix': 'used daily to build modern, dependable websites',

    'portfolio.title': 'Recent Projects',
    'portfolio.subtitle': 'Selected Work',
    'portfolio.viewAll': 'View All Projects',
    'portfolio.viewDetails': 'Project Details',
    'portfolio.showMore': 'Show More',
    'portfolio.viewProject': 'Visit Site',
    'project.notFound': 'Project not found',

    'prices.title': 'Pricing',
    'prices.subtitle': 'Straightforward plans tailored to your needs',
    'prices.description':
      'Clear, modern websites to launch your brand, showcase your services, or grow your business online.',

    'prices.tier1.name': 'Starter Website',
    'prices.tier1.price': 'From €500',
    'prices.tier1.description': 'A clear and fast online presence to get your business started.',
    'prices.tier1.feature1': 'One-page site or up to 3 pages',
    'prices.tier1.feature2': 'Responsive mobile-ready layout',
    'prices.tier1.feature3': 'Clear presentation of your services',
    'prices.tier1.feature4': 'Functional contact form',
    'prices.tier1.feature5': 'Basic on-page SEO setup',
    'prices.tier1.feature6': 'Deployment on your domain and hosting',
    'prices.tier1.feature7': 'Clean, customized visual styling',
    'prices.tier1.cta': 'Start my project',

    'prices.tier2.name': 'Pro Business Site',
    'prices.tier2.price': 'From €900',
    'prices.tier2.description':
      'A full website to build your local visibility and convert visitors into clients.',
    'prices.tier2.feature1': 'Up to 6 custom pages',
    'prices.tier2.feature2': 'Modern and structured design',
    'prices.tier2.feature3': 'Technical and on-page SEO optimization',
    'prices.tier2.feature4': 'Blog or portfolio section (optional)',
    'prices.tier2.feature5': 'CMS content management (optional)',
    'prices.tier2.feature6': 'Post-launch support and guidance (1 month)',
    'prices.tier2.feature7': 'Google Analytics configuration',
    'prices.tier2.feature8': 'Mobile performance optimization',
    'prices.tier2.feature9': 'Scalable code for future growth',
    'prices.tier2.cta': 'View details',

    'prices.tier3.name': 'Custom & Web Apps',
    'prices.tier3.price': 'Custom Quote',
    'prices.tier3.description':
      'A tailored technical solution for complex requirements or custom applications.',
    'prices.tier3.feature1': 'Custom UI/UX with dedicated branding',
    'prices.tier3.feature2': 'Strategic page architecture and user flow',
    'prices.tier3.feature3': 'Advanced SEO with structured data schema',
    'prices.tier3.feature4': 'Core Web Vitals performance tuning',
    'prices.tier3.feature5': 'Full CMS administration capability',
    'prices.tier3.feature6': 'Blog, portfolio, or client dashboards',
    'prices.tier3.feature7': 'Third-party API and payment integrations',
    'prices.tier3.feature8': 'Dedicated 3-month technical support',
    'prices.tier3.feature9': 'Handoff training for self-management',
    'prices.tier3.feature10': 'Full domain setup and security headers',
    'prices.tier3.cta': 'Request a quote',

    'prices.custom': 'Have a specific project? Contact me to discuss your specifications.',
    'prices.quote': 'Request a quote',

    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let’s Discuss Your Project',
    'contact.description':
      'Planning a new website or a redesign? Send me a message to discuss your goals, timeline, and requirements.',
    'contact.address': 'Lyon, France',
    'contact.send': 'Request a Free Quote',
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

    'popup.success.title': 'Message Sent!',
    'popup.success.message':
      'Your message has been sent successfully. I will get back to you shortly.',

    'footer.rights': 'Sardorbek Sidikov, web developer in Lyon. Custom website development.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'Обо мне',
    'nav.prices': 'Тарифы',
    'nav.contact': 'Связаться',

    'hero.badge': 'Лион, Франция • Открыт к проектам',
    'hero.title1': 'Веб-разработчик',
    'hero.title2': 'Создание быстрых и современных сайтов',
    'hero.title3': ' ',
    'hero.title4': ' ',
    'hero.description':
      'Разрабатываю сайты и веб-приложения на Next.js и React: от сайтов-визиток до сложных сервисов с высокой скоростью и SEO-оптимизацией.',
    'hero.contact': 'Связаться',
    'hero.viewWork': 'Смотреть работы',

    'expertise.title': 'Навыки',
    'expertise.subtitle': 'Что я предлагаю',
    'expertise.item1.title': 'Веб-разработка',
    'expertise.item1.description':
      'Создание быстрых, адаптивных и масштабируемых сайтов на современных технологиях.',
    'expertise.item2.title': 'UI и UX дизайн',
    'expertise.item2.description':
      'Удобные интерфейсы, ориентированные на понятный пользовательский опыт.',
    'expertise.item3.title': 'Брендинг и логотипы',
    'expertise.item3.description':
      'Создание аккуратного фирменного стиля и логотипа для вашего дела.',
    'expertise.item4.title': 'Интеграция API',
    'expertise.item4.description':
      'Подключение внешних сервисов, баз данных, форм и платежных систем.',

    'about.badge': 'Обо мне',
    'about.title': 'Веб-разработчик',
    'about.subtitle': 'Лион и удаленно',
    'about.location': 'Лион, Франция',
    'about.role': 'Фриланс веб-разработчик',
    'about.intro':
      'Я Sardorbek Sidikov, веб-разработчик из Лиона (Франция). Помогаю компаниям и экспертам запускать понятные, быстрые и надежные сайты.',
    'about.description':
      'Специализируюсь на стеке React, Next.js и TypeScript. Уделяю главное внимание скорости загрузки, чистому коду и качественной SEO-структуре.',
    'about.p1':
      'Я Sardor, веб-разработчик из Лиона. Создаю функциональные сайты и сервисы, решающие реальные задачи бизнеса.',
    'about.p2':
      'Внимание к деталям, скорость и простота поддержки: ключевые ориентиры в моей работе.',
    'about.feature1.title': 'Локально и онлайн',
    'about.feature1.desc':
      'Работаю в Лионе (Овернь, Рона, Альпы) и сотрудничаю удаленно с клиентами по всему миру.',
    'about.feature2.title': 'Скорость и SEO',
    'about.feature2.desc':
      'Оптимизация Core Web Vitals, быстрая загрузка и продуманная структура для поисковых систем.',
    'about.techTitle': 'Технологический стек',
    'about.techSubtitle':
      'Надежный стек для быстрой работы, безопасности и удобной поддержки',
    'about.tech.nextjs.title': 'Next.js и React',
    'about.tech.nextjs.desc':
      'Современный стандарт веб-разработки: быстрый рендеринг, отличная база для SEO и плавная работа интерфейса.',
    'about.tech.typescript.title': 'TypeScript',
    'about.tech.typescript.desc':
      'Строгая типизация защищает проект от ошибок и упрощает развитие кода в будущем.',
    'about.tech.tailwind.title': 'Tailwind CSS',
    'about.tech.tailwind.desc':
      'Легкая и адаптивная верстка, которая быстро загружается на любых устройствах.',
    'about.tech.backend.title': 'Node.js, PostgreSQL и API',
    'about.tech.backend.desc':
      'Надежная работа с базами данных (Prisma, SQL) и подключение сторонних сервисов, форм и API.',

    'tech.title': 'Технологии',
    'tech.suffix': 'использую каждый день для создания быстрых и долговечных сайтов',

    'portfolio.title': 'Недавние проекты',
    'portfolio.subtitle': 'Избранные работы',
    'portfolio.viewAll': 'Смотреть все проекты',
    'portfolio.viewDetails': 'Подробнее о проекте',
    'portfolio.showMore': 'Показать еще',
    'portfolio.viewProject': 'Перейти на сайт',
    'project.notFound': 'Проект не найден',

    'prices.title': 'Тарифы',
    'prices.subtitle': 'Понятные и прозрачные условия',
    'prices.description':
      'Готовые решения для старта, продвижения услуг или масштабирования бизнеса в интернете.',

    'prices.tier1.name': 'Сайт-визитка',
    'prices.tier1.price': 'от 500€',
    'prices.tier1.description': 'Быстрый и аккуратный запуск базового сайта для презентации услуг.',
    'prices.tier1.feature1': 'Одностраничный сайт или до 3 страниц',
    'prices.tier1.feature2': 'Адаптивный дизайн для смартфонов',
    'prices.tier1.feature3': 'Четкая структура услуг',
    'prices.tier1.feature4': 'Рабочая контактная форма',
    'prices.tier1.feature5': 'Базовая SEO-настройка',
    'prices.tier1.feature6': 'Установка на ваш хостинг и домен',
    'prices.tier1.feature7': 'Индивидуальный дизайн',
    'prices.tier1.cta': 'Запустить проект',

    'prices.tier2.name': 'Pro сайт для бизнеса',
    'prices.tier2.price': 'от 900€',
    'prices.tier2.description':
      'Полноценный сайт для привлечения клиентов и укрепления позиций в поиске.',
    'prices.tier2.feature1': 'До 6 индивидуальных страниц',
    'prices.tier2.feature2': 'Современный и продуманный дизайн',
    'prices.tier2.feature3': 'Техническая и постраничная SEO-оптимизация',
    'prices.tier2.feature4': 'Блог или раздел портфолио (по выбору)',
    'prices.tier2.feature5': 'Панель управления CMS (по выбору)',
    'prices.tier2.feature6': 'Поддержка и консультации после запуска (1 месяц)',
    'prices.tier2.feature7': 'Подключение Google Analytics',
    'prices.tier2.feature8': 'Высокая скорость на мобильных устройствах',
    'prices.tier2.feature9': 'Гибкая структура для дальнейшего развития',
    'prices.tier2.cta': 'Подробнее',

    'prices.tier3.name': 'Индивидуальный проект и Web App',
    'prices.tier3.price': 'По запросу',
    'prices.tier3.description':
      'Сложные веб-приложения и сайты со специальными требованиями и интеграциями.',
    'prices.tier3.feature1': 'Индивидуальный UI/UX и фирменный стиль',
    'prices.tier3.feature2': 'Проработка пользовательского пути',
    'prices.tier3.feature3': 'Продвинутое SEO со структурированными данными',
    'prices.tier3.feature4': 'Максимальные показатели скорости Core Web Vitals',
    'prices.tier3.feature5': 'Полная система управления контентом (CMS)',
    'prices.tier3.feature6': 'Разделы блога, кейсов или личные кабинеты',
    'prices.tier3.feature7': 'Интеграция API, баз данных и платежей',
    'prices.tier3.feature8': 'Техническая поддержка (3 месяца)',
    'prices.tier3.feature9': 'Обучение по самостоятельному управлению',
    'prices.tier3.feature10': 'Полная настройка домена и безопасности',
    'prices.tier3.cta': 'Запросить расчет',

    'prices.custom': 'Нужен нестандартный функционал? Напишите, и мы обсудим детали.',
    'prices.quote': 'Запросить расчет',

    'contact.title': 'Связаться',
    'contact.subtitle': 'Обсудим ваш проект',
    'contact.description':
      'Планируете создание нового сайта или обновление текущего? Напишите мне, чтобы обсудить задачи, сроки и бюджет.',
    'contact.address': 'Лион, Франция',
    'contact.send': 'Запросить бесплатный расчет',
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
    'popup.success.message': 'Ваше сообщение отправлено. Я отвечу вам в ближайшее время.',

    'footer.rights': 'Sardorbek Sidikov, веб-разработчик в Лионе. Создание сайтов под ключ.',
  },
}

const detectBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined' && navigator) {
    const browserLang = navigator.language.toLowerCase().split('-')[0]
    const browserLanguages = navigator.languages || [navigator.language]

    for (const lang of browserLanguages) {
      const langCode = lang.toLowerCase().split('-')[0]
      if (langCode === 'fr') return 'fr'
      if (langCode === 'ru') return 'ru'
      if (langCode === 'en') return 'en'
    }

    if (browserLang === 'fr') return 'fr'
    if (browserLang === 'ru') return 'ru'
    return 'en'
  }

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
    const savedLanguage = localStorage.getItem('language') as Language

    if (savedLanguage && ['fr', 'en', 'ru'].includes(savedLanguage)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(savedLanguage)
    } else {
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
