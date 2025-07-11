export const projects = [
  {
    id: '1',
    title: { en: 'Kasa', fr: 'Kasa', ru: 'Kasa' },
    description: {
      en: 'A rental platform with a responsive design.',
      fr: 'Plateforme de location avec design responsive.',
      ru: 'Платформа аренды с адаптивным дизайном.',
    },
    image: '/projects/kasa.webp',
    longDescription: {
      en: 'Kasa provides users with a user-friendly interface for searching and booking accommodations. The project includes navigation, dropdown menus, and a fully responsive design.',
      fr: 'Kasa offre une interface conviviale pour rechercher et réserver des logements. Le projet inclut la navigation, des menus déroulants et un design entièrement responsive.',
      ru: 'Kasa предоставляет удобный интерфейс для поиска и бронирования жилья. Проект включает навигацию, выпадающие меню и полностью адаптивный дизайн.',
    },
    technologies: ['React', 'SASS'],
    link: 'https://ssidikov.github.io/kasa/',
  },
  {
    id: '2',
    title: { en: 'SportSee', fr: 'SportSee', ru: 'SportSee' },
    description: {
      en: 'A dashboard for analyzing fitness data.',
      fr: 'Tableau de bord pour l’analyse des données de fitness.',
      ru: 'Дашборд для анализа фитнес-данных.',
    },
    image: '/projects/sport-see.webp',
    longDescription: {
      en: 'SportSee visualizes user fitness data, including sessions and key metrics. Built with React and API integration.',
      fr: 'SportSee visualise les données de fitness des utilisateurs, y compris les sessions et les indicateurs clés. Réalisé avec React et intégration API.',
      ru: 'SportSee визуализирует фитнес-данные пользователя, включая сессии и ключевые метрики. Реализовано на React с интеграцией API.',
    },
    technologies: ['React', 'React Router', 'Recharts', 'SASS', 'Axios'],
    link: 'https://ssidikov.github.io/SportSee/',
  },
  {
    id: '3',
    title: { en: 'ArgentBank', fr: 'ArgentBank', ru: 'ArgentBank' },
    description: {
      en: 'A banking interface for account management.',
      fr: 'Interface bancaire pour la gestion de comptes.',
      ru: 'Банковский интерфейс для управления счетами.',
    },
    image: '/projects/argent-bank.webp',
    longDescription: {
      en: 'ArgentBank offers users secure and convenient access to their account information. It features authentication and state management using Redux.',
      fr: 'ArgentBank offre un accès sécurisé et pratique aux informations de compte. Authentification et gestion d’état via Redux.',
      ru: 'ArgentBank обеспечивает безопасный и удобный доступ к информации о счетах. Аутентификация и управление состоянием через Redux.',
    },
    technologies: ['React', 'Redux', 'React Router', 'REST API', 'Swagger'],
    link: 'https://ssidikov.github.io/Argent-Bank/',
  },
  {
    id: '4',
    title: { en: 'HRnet', fr: 'HRnet', ru: 'HRnet' },
    description: {
      en: 'A modern application for managing employee records.',
      fr: 'Application moderne pour la gestion des employés.',
      ru: 'Современное приложение для управления сотрудниками.',
    },
    image: '/projects/hrNet.webp',
    longDescription: {
      en: 'HRnet allows users to add, view, and manage employee data with ease. It includes a responsive design, local storage support, and features like form validation, real-time updates, and data persistence.',
      fr: 'HRnet permet d’ajouter, consulter et gérer les données des employés facilement. Design responsive, stockage local, validation de formulaire, mises à jour en temps réel.',
      ru: 'HRnet позволяет легко добавлять, просматривать и управлять данными сотрудников. Включает адаптивный дизайн, локальное хранилище, валидацию форм и обновления в реальном времени.',
    },
    technologies: ['React', 'Redux Toolkit', 'Material-UI', 'SASS', 'Vite', 'date-fns'],
    link: 'https://ssidikov.github.io/HRnet/',
  },
  {
    id: '5',
    title: { en: 'Les petits plats', fr: 'Les petits plats', ru: 'Les petits plats' },
    description: {
      en: 'Development of a search algorithm for a cooking recipe platform with performance optimization.',
      fr: 'Développement d’un algorithme de recherche pour une plateforme de recettes avec optimisation des performances.',
      ru: 'Разработка алгоритма поиска для платформы рецептов с оптимизацией производительности.',
    },
    image: '/projects/petits-plats.webp',
    longDescription: {
      en: 'This project focused on creating a performant search algorithm for a cooking recipe platform. It involved designing an intuitive UI, implementing two versions of search algorithms (native loops and functional programming), comparing their performance using Jsben.ch, and documenting the results while adhering to Green Code principles.',
      fr: 'Ce projet a consisté à créer un algorithme de recherche performant pour une plateforme de recettes. Conception d’une UI intuitive, deux versions d’algorithmes (boucles natives et programmation fonctionnelle), comparaison de performance via Jsben.ch et documentation selon les principes Green Code.',
      ru: 'В этом проекте реализован производительный алгоритм поиска для платформы рецептов. Разработан интуитивный интерфейс, две версии алгоритма (циклы и функциональное программирование), сравнение производительности через Jsben.ch и документация с учетом принципов Green Code.',
    },
    technologies: [
      'JavaScript',
      'Bootstrap',
      'HTML',
      'SASS',
      'Functional Programming',
      'Performance Analysis',
    ],
    link: 'https://ssidikov.github.io/PetitsPlats2.0/',
  },
  {
    id: '6',
    title: { en: 'Trendy Cookies', fr: 'Trendy Cookies', ru: 'Trendy Cookies' },
    description: {
      en: 'A website for ordering trendy cookies.',
      fr: 'Site web pour commander des cookies tendance.',
      ru: 'Сайт для заказа модных печений.',
    },
    image: '/projects/cookies.webp',
    longDescription: {
      en: 'Trendy Cookies offers users an easy-to-use platform for ordering sweet cookies. Built with Angular, it includes a responsive design and simple ordering process.',
      fr: 'Trendy Cookies propose une plateforme simple pour commander des cookies. Réalisé avec Angular, design responsive et processus de commande simplifié.',
      ru: 'Trendy Cookies — это удобная платформа для заказа сладких печений. Реализовано на Angular, адаптивный дизайн и простой процесс заказа.',
    },
    technologies: ['Angular', 'CSS', 'HTML'],
    link: 'https://ssidikov.github.io/cookies_angular/',
  },
  {
    id: '7',
    title: { en: 'Fisheye', fr: 'Fisheye', ru: 'Fisheye' },
    description: {
      en: 'An accessible platform for photographers to showcase their portfolios.',
      fr: 'Plateforme accessible pour les photographes afin de présenter leurs portfolios.',
      ru: 'Доступная платформа для фотографов для показа портфолио.',
    },
    image: '/projects/fisheye.webp',
    longDescription: {
      en: 'Fisheye is a web application that allows photographers to present their portfolios. It includes features like dynamic page rendering, LightBox for media, contact forms, and like management. The project focuses on accessibility, modularity, and using JavaScript design patterns.',
      fr: 'Fisheye est une application web permettant aux photographes de présenter leurs portfolios. Rendu dynamique, LightBox, formulaires de contact, gestion des likes. Accent sur l’accessibilité et la modularité.',
      ru: 'Fisheye — это веб-приложение для фотографов для презентации портфолио. Динамические страницы, LightBox, формы обратной связи, лайки. Акцент на доступности и модульности.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON', 'AChecker'],
    link: 'https://ssidikov.github.io/Front-End-Fisheye/',
  },
  {
    id: '8',
    title: { en: 'GameOn Landing Page', fr: 'GameOn Landing Page', ru: 'GameOn Landing Page' },
    description: {
      en: 'A dynamic landing page for a gaming conference and contest organization.',
      fr: 'Landing page dynamique pour une société d’organisation de conférences et concours gaming.',
      ru: 'Динамический лендинг для компании по организации гейминг-мероприятий.',
    },
    image: '/projects/game-on.webp',
    longDescription: {
      en: 'GameOn is a landing page for a small company specializing in organizing gaming conferences and contests. The project involves dynamic interactions, form validation, responsive design, and uses JavaScript to manipulate HTML and CSS.',
      fr: 'GameOn est une landing page pour une société spécialisée dans l’organisation de conférences et concours gaming. Interactions dynamiques, validation de formulaire, design responsive, manipulation du DOM en JavaScript.',
      ru: 'GameOn — лендинг для компании, организующей гейминг-конференции и конкурсы. Динамические взаимодействия, валидация форм, адаптивный дизайн, работа с DOM на JavaScript.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flexbox'],
    link: 'https://ssidikov.github.io/GameOn-website-FR/',
  },
  {
    id: '9',
    title: { en: 'Ohmyfood Paris', fr: 'Ohmyfood Paris', ru: 'Ohmyfood Paris' },
    description: {
      en: 'A dynamic page showcasing the menus of four Parisian restaurants with online booking and menu composition.',
      fr: 'Page dynamique présentant les menus de quatre restaurants parisiens avec réservation en ligne.',
      ru: 'Динамическая страница с меню четырёх парижских ресторанов и онлайн-бронированием.',
    },
    image: '/projects/ohmyfood.webp',
    longDescription: {
      en: 'This project involves developing a webpage presenting the menus of four renowned Parisian restaurants, with online booking functionality and menu composition. The site incorporates CSS animations to enhance user experience and was designed using a mobile-first approach.',
      fr: 'Développement d’une page web présentant les menus de quatre restaurants parisiens, réservation en ligne et composition de menu. Animations CSS et approche mobile-first.',
      ru: 'Разработка страницы с меню четырёх известных ресторанов Парижа, онлайн-бронирование и составление меню. CSS-анимации и mobile-first дизайн.',
    },
    technologies: ['HTML', 'SASS', 'CSS Animations', 'Figma', 'Flexbox'],
    link: 'https://ssidikov.github.io/OhMyFood/',
  },
  {
    id: '10',
    title: {
      en: 'Billed Expense Feature',
      fr: 'Billed Expense Feature',
      ru: 'Billed Expense Feature',
    },
    description: {
      en: 'Debugging and testing the employee expense submission feature for a SaaS HR solution.',
      fr: 'Débogage et tests de la fonctionnalité de notes de frais pour une solution RH SaaS.',
      ru: 'Отладка и тестирование функции подачи расходов для SaaS HR-решения.',
    },
    image: '/projects/billed.webp',
    longDescription: {
      en: 'This project involved debugging and writing unit, integration, and end-to-end tests for the employee expense submission feature. Tasks included fixing bugs using Chrome Debugger, ensuring over 80% test coverage, and drafting a structured manual test plan for core functionalities.',
      fr: 'Débogage et rédaction de tests unitaires, d’intégration et end-to-end pour la fonctionnalité de notes de frais. Correction de bugs avec Chrome Debugger, couverture de tests >80%, plan de test manuel structuré.',
      ru: 'В проекте проводилась отладка и написание unit-, интеграционных и e2e-тестов для функции подачи расходов. Исправление багов через Chrome Debugger, покрытие тестами >80%, составление тест-плана.',
    },
    technologies: ['JavaScript', 'Jest', 'Chrome Debugger', 'End-to-End Testing'],
    link: 'https://github.com/ssidikov/Billed-app-FR-Front/',
  },
  {
    id: '11',
    title: {
      en: 'Booki - Travel Agency Homepage',
      fr: 'Booki - Page d’accueil',
      ru: 'Booki - Главная страница турагентства',
    },
    description: {
      en: 'Developed a responsive homepage for a travel agency using HTML and CSS.',
      fr: 'Développement d’une page d’accueil responsive pour une agence de voyage.',
      ru: 'Разработка адаптивной главной страницы для туристического агентства.',
    },
    image: '/projects/booki.webp',
    longDescription: {
      en: 'In this project, I developed the homepage for a travel agency using HTML and CSS. The focus was on creating a responsive design compatible with various screen sizes and devices, using the Figma designs provided for mobile, tablet, and desktop versions.',
      fr: 'Développement de la page d’accueil d’une agence de voyage en HTML et CSS. Accent sur le responsive et la compatibilité multi-écrans à partir de maquettes Figma.',
      ru: 'В этом проекте я разработал главную страницу турагентства на HTML и CSS. Основной акцент — адаптивность и поддержка разных устройств по макетам Figma.',
    },
    technologies: ['HTML', 'CSS', 'Figma', 'Flexbox', 'Grid'],
    link: 'https://ssidikov.github.io/Booki/',
  },
  {
    id: '12',
    title: {
      en: 'Burger House - Landing Page',
      fr: 'Burger House - Landing Page',
      ru: 'Burger House - Лендинг',
    },
    description: {
      en: 'Created a landing page with a burger order form.',
      fr: 'Création d’une landing page avec formulaire de commande de burgers.',
      ru: 'Создание лендинга с формой заказа бургеров.',
    },
    image: '/projects/burger-house.webp',
    longDescription: {
      en: 'This project involves creating a landing page for a burger restaurant with an interactive order form. The page allows users to select and customize their burger order.',
      fr: 'Création d’une landing page pour un restaurant de burgers avec formulaire интерактивный. L’utilisateur peut choisir et personnaliser sa commande.',
      ru: 'Проект по созданию лендинга для бургерной с интерактивной формой заказа. Пользователь может выбрать и настроить свой бургер.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flexbox'],
    link: 'https://ssidikov.github.io/burgers-landing/',
  },
  {
    id: '13',
    title: {
      en: 'Learn Home - Tutoring App',
      fr: 'Learn Home - Application de tutorat',
      ru: 'Learn Home - Приложение для репетиторства',
    },
    description: {
      en: 'Defining the requirements and designing the solution for a tutoring app.',
      fr: 'Définition des besoins et conception de la solution pour une application de tutorat.',
      ru: 'Определение требований и проектирование решения для приложения репетиторства.',
    },
    image: '/projects/learn-home.webp',
    longDescription: {
      en: 'This project involved defining the requirements and creating a technical solution for a tutoring application for the Learn@Home association. The goal was to identify the functional needs of the platform, design user stories, create use case diagrams, develop mockups using Figma, and build a Kanban board for project management. The project was executed using an agile methodology to ensure efficient planning and clear communication with the client and development team.',
      fr: 'Ce projet a consisté à définir les besoins et à concevoir une solution technique pour une application de tutorat pour l’association Learn@Home. Identification des besoins, user stories, diagrammes de cas d’utilisation, maquettes Figma, Kanban. Méthodologie agile.',
      ru: 'В этом проекте определялись требования и разрабатывалось техническое решение для приложения репетиторства для Learn@Home. Выявление потребностей, user stories, диаграммы, макеты в Figma, Kanban. Гибкая методология.',
    },
    technologies: ['Figma', 'Kanban', 'User Stories', 'Agile Methodology', 'UX/UI Design'],
    link: '#',
  },
  {
    id: '14',
    title: {
      en: 'Landing Page for Euclid - Project Systems',
      fr: 'Landing Page pour Euclid - Project Systems',
      ru: 'Лендинг для Euclid - Project Systems',
    },
    description: {
      en: 'Landing page for the company Euclid - Project Systems.',
      fr: 'Landing page pour la société Euclid - Project Systems.',
      ru: 'Лендинг для компании Euclid - Project Systems.',
    },
    image: '/projects/euclid.webp',
    longDescription: {
      en: 'Developed a responsive landing page for the company Euclid - Project Systems, ensuring a modern and professional look.',
      fr: 'Développement d’une landing page responsive pour la société Euclid - Project Systems, avec un look moderne et professionnel.',
      ru: 'Разработка адаптивного лендинга для компании Euclid - Project Systems с современным и профессиональным видом.',
    },
    technologies: ['Figma', 'HTML', 'CSS', 'Flexbox'],
    link: 'https://ssidikov.github.io/Evklid_website/',
  },
]

export const expertiseItems = [
  {
    titleKey: 'expertise.item1.title',
    descriptionKey: 'expertise.item1.description',
    icon: '/logo/code.svg',
  },
  {
    titleKey: 'expertise.item2.title',
    descriptionKey: 'expertise.item2.description',
    icon: '/logo/uxui.svg',
  },
  {
    titleKey: 'expertise.item3.title',
    descriptionKey: 'expertise.item3.description',
    icon: '/logo/logo.svg',
  },
  {
    titleKey: 'expertise.item4.title',
    descriptionKey: 'expertise.item4.description',
    icon: '/logo/api.svg',
  },
]

export const technologies = [
  { name: 'React', icon: '/logo/react.svg' },
  { name: 'Next.js', icon: '/logo/nextjs.svg' },
  { name: 'TypeScript', icon: '/logo/typescript.svg' },
  { name: 'JavaScript', icon: '/logo/javascript.svg' },
  { name: 'Tailwind', icon: '/logo/tailwindcss.svg' },
  { name: 'Redux', icon: '/logo/redux.svg' },
  { name: 'Vite', icon: '/logo/vite.svg' },
  { name: 'Git', icon: '/logo/git.svg' },
  { name: 'npm', icon: '/logo/npm.svg' },
  { name: 'Figma', icon: '/logo/figma.svg' },
]
