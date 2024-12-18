import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from 'react-icons/tb';
export const cv = {
   basics: {
      name: 'Fabrizio M. Gutiérrez Hernández',
      level: 'Ingeniero de Sistemas',
      label: 'Desarrollador Web - Frontend',
      phone: '',
      image: 'https://avatars.githubusercontent.com/u/91578919?s=400&u=224bf569574504a79fb2e7b9cb40de788e9b0378&v=4',
      email: 'gutierrezfabrizio02@gmail.com',
      url: '',
      summary:
         'Mi objetivo es utilizar mis habilidades y conocimientos para crear experiencias web interactivas y eficientes. Mi compromiso con la mejora continua y mi pasión por la tecnología me impulsan a estar siempre al día con las últimas tendencias y mejores prácticas en el desarrollo frontend.',
      location: {
         address: '',
         postalCode: '',
         city: 'Falcón',
         countryCode: 'VE',
         region: 'Venezuela',
      },
      profiles: [
         {
            name: 'GitHub',
            url: 'https://github.com/Fabriziomgh',
            icon: TbBrandGithub,
         },
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/fabrizio-miguel-gutierrez-hernandez/',
            icon: TbBrandLinkedin,
         },
         {
            name: 'X',
            url: 'https://x.com/Fabriziomgh',
            username: 'fabriziomgh',
            icon: TbBrandX,
         },
      ],
   },
   work: [
      {
         name: 'MangoNetwork C.A',
         position: 'Analista de Soporte Técnico',
         url: 'https://www.mangonet.com.ve/punto-fijo',
         startDate: '2024-07-16',
         endDate: '2024-10-14',
         summary:
            'Gestión proactiva de carteras de clientes en el sector de telecomunicaciones. Resolución de incidencias técnicas a través de herramientas como SmartOLT, asegurando la satisfacción del cliente y la optimización de los servicios. Configuración de equipos de internet y soporte técnico remoto, contribuyendo a la mejora continua de los procesos y la eficiencia operativa.',
         highlights: [
            'Soporte técnico',
            'Telecomunicaciones',
            'Configuración de equipos',
            'Mikrowisp',
            'SmartOLT',
         ],
      },
   ],
   volunteer: [
      {
         organization: 'Organization',
         position: 'Volunteer',
         url: 'https://organization.com/',
         startDate: '2012-01-01',
         endDate: '2013-01-01',
         summary: 'Description…',
         highlights: ["Awarded 'Volunteer of the Month'"],
      },
   ],
   education: [
      {
         institution: 'UNEFA',
         url: 'http://www.unefa.edu.ve/portal/',
         area: 'Ingeniería de Sistemas',
         studyType: 'Ingeniería',
         startDate: '2019-01-01',
         endDate: '2024-06-01',
         score: '4.0',
         courses: ['PHP', 'SQL Básico', 'JavaScript'],
      },
   ],
   awards: [
      {
         title: 'Award',
         date: '2014-11-01',
         awarder: 'Company',
         summary: 'There is no spoon.',
      },
   ],
   certificates: [
      {
         name: 'Programación Básica',
         date: '2022-02-21',
         issuer: 'Platzi',
         url: 'https://platzi.com/p/fabrizio.miguel.gutierres/curso/1050-basico-programacion/diploma/detalle/',
      },
      {
         name: 'Master JavaScript with Node.js',
         date: '2024-11-04',
         issuer: 'Udemy',
         url: 'https://www.udemy.com/certificate/UC-20a7294e-baa2-4ae8-81c2-b6a7d6f007c3/',
      },
      {
         name: ' Tailwind CSS Start to Mastery with 18 Project Examples 2024',
         date: '2024-11-04',
         issuer: 'Udemy',
         url: 'https://www.udemy.com/certificate/UC-8413a096-07f3-4bf3-af18-6cf751c32755/',
      },
   ],
   publications: [
      {
         name: 'Publication',
         publisher: 'Company',
         releaseDate: '2014-10-01',
         url: 'https://publication.com',
         summary: 'Description…',
      },
   ],
   skills: [
      {
         name: 'JavaScript',
         level: 'Master',
         keywords: ['Desarrollo Web', 'Frontend', 'Backend', 'Fullstack'],
      },
      {
         name: 'TypeScript',
         level: 'Master',
         keywords: ['Desarrollo Web', 'Frontend', 'Backend', 'Fullstack'],
      },
      {
         name: 'Tailwind',
         level: 'Avanzado',
         keywords: [
            'Desarrollo Web',
            'Frontend',
            'CSS Framework',
            'Diseño Responsive',
         ],
      },

      {
         name: 'MySQL',
         level: 'Avanzado',
         keywords: [
            'Bases de Datos',
            'SQL',
            'Almacenamiento de Datos',
            'Backend',
         ],
      },
      {
         name: 'Git',
         level: 'Avanzado',
         keywords: ['Control de Versiones', 'Colaboración', 'Código Fuente'],
      },
      {
         name: 'GitHub',
         level: 'Avanzado',
         keywords: [
            'Control de Versiones',
            'Colaboración',
            'Código Fuente',
            'Git',
         ],
      },

      {
         name: 'React',
         level: 'Avanzado',
         keywords: ['Desarrollo Web', 'Frontend', 'JavaScript Library', 'UI'],
      },
      {
         name: 'Next',
         level: 'Avanzado',
         keywords: ['Desarrollo Web', 'Frontend', 'JavaScript Library', 'UI'],
      },
   ],
   languages: [
      {
         language: 'Spanish',
         fluency: 'Native speaker',
      },
      {
         language: 'English',
         fluency: 'Advanced',
      },
   ],
   interests: [
      {
         name: 'Wildlife',
         keywords: ['Ferrets', 'Unicorns'],
      },
   ],
   references: [
      {
         name: 'Jane Doe',
         reference: 'Reference…',
      },
   ],
   projects: [
      {
         name: 'JS Quizz',
         isActive: true,
         description:
            'JS Quiz es una aplicación web que permite a los usuarios responder preguntas y obtener su puntuación al final del cuestionario ',
         highlights: ['React', 'Zustand', 'Material UI'],
         url: 'https://js-quizz.vercel.app/',
         github: 'https://github.com/Fabriziomgh/js-quizz',
      },
      {
         name: 'To do List App',
         isActive: true,
         description:
            'El proyecto permite a los usuarios gestionar sus tareas diarias de forma interactiva.',
         highlights: [
            'Next',
            'Supabase',
            'Auth.js',
            'Tailwind',
            'Zod',
            'Typescript',
         ],
         url: 'https://todolist-app-six-nu.vercel.app/',
         github: 'https://github.com/Fabriziomgh/todolist-app',
      },
      {
         name: 'Minimalist Portfolio',
         isActive: true,
         description: 'Portafolio minimalista basado en un archivo JSON.',
         highlights: ['React', 'Typescript', 'Tailwind', 'Ninja Keys'],
         url: 'https://fg-minimalist-portfolio.vercel.app/',
         github: 'https://github.com/Fabriziomgh/minimalist-portfolio',
      },
   ],
} as const;
