import datakeeperImage from '../assets/datakeeper.png'
import internhireImage from '../assets/internhire.png'
import stcWebsiteImage from '../assets/STC-Website.png'
import lmsPortalImage from '../assets/lms-portal.png'
import epcImage from '../assets/epc.png'
import collegeWebsiteImage from '../assets/hetauuda city.png'
import profileImage from '../assets/profile.jpeg'
import awsBadgeImage from '../assets/AWS Academy Graduate - Cloud Foundations - Training Badge.png'
import awsDataEngineeringBadgeImage from '../assets/AWS Academy Graduate - Data Engineering - Training Badge.png'
import awsMLFoundationsBadgeImage from '../assets/AWS Academy Graduate - Machine Learning Foundations - Training Badge.png'
import awsMLNLPBadgeImage from '../assets/AWS Academy Graduate - Machine Learning for Natural Language Processing - Training Badge.png'
import resumePdf from '../assets/cv/Aryan_Jaiswal_CV.pdf'

export const personalInfo = {
  name: 'Aryan Jaiswal',
  role: 'Full Stack Developer',
  education: 'BSc (Hons) Computing — First Class Honours',
  location: 'Damak-Jhapa, Nepal',
  email: 'aj628980@gmail.com',
  phone: '+977 9817900948',
  yearsOfExperience: 3,
  intro:
    'I design and build modern websites and web applications using React, Tailwind CSS, and modern web practices. I focus on creating polished, responsive experiences that solve real problems for users and businesses.',
  profileImage,
  resumeUrl: resumePdf,
  social: {
    github: 'https://github.com/Aryan8400',
    linkedin: 'https://www.linkedin.com/feed/',
    facebook: 'https://www.facebook.com/aryan.jaiswal.3532507',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const typingRoles = [
  'Full Stack Developer',
  'React Developer',
  'Frontend Developer',
  'Problem Solver',
]

export const aboutHighlights = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'Supabase',
  'MongoDB',
]

export const skillCategories = {
  Frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 82 },
  ],
  Database: [
    { name: 'MongoDB', level: 80 },
    { name: 'Supabase', level: 85 },
  ],
  Tools: [
    { name: 'Git', level: 88 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 75 },
  ],
}

// Add isCompany: true on work done at a company (no company name needed).
// Company projects usually have no github/demo — just omit those fields.
export const projects = [
  {
    id: 1,
    title: 'DataKeeper',
    subtitle: 'Accounting & Inventory for Metal Trading',
    description:
      'A full-stack accounting and inventory management system built for metal trading businesses. It helps teams manage inventory, record sales, track customer dues, and gain real-time financial insights through a centralized, user-friendly platform.',
    features: [
      'Real-time dashboard analytics',
      'Inventory tracking in KG',
      'Low-stock alerts',
      'Sales with auto stock updates',
      'Customer due management',
      'Profit & sales reporting',
      'Auth with Row-Level Security',
      'Light & dark mode support',
    ],
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'React Router',
      'Recharts',
    ],
    github: 'https://github.com/Aryan8400/datakeeper-accounting-system',
    demo: 'https://datakeeper-accounting-system-41je.vercel.app/#/login',
    video: null,
    image: datakeeperImage,
    gradient: 'from-indigo-500/20 via-violet-500/20 to-purple-500/20 light:from-indigo-100 light:via-violet-100 light:to-purple-100',
    icon: '📊',
  },
  {
    id: 2,
    title: 'InternHire',
    subtitle: 'Job & Internship Platform',
    description:
      'A full-stack job and internship platform connecting students with employers. Built with a Node.js, Express, and MongoDB backend and a modern React + Vite frontend, it includes profiles, job listings, applications, blogging, real-time chat, and admin analytics in one integrated experience.',
    features: [
      'User & company profiles',
      'Job listings & applications',
      'Real-time chat & notifications',
      'Blog section',
      'Cloudinary image uploads',
      'Nodemailer email workflows',
      'Redux Toolkit state persistence',
      'Admin analytics with Recharts',
      'Location features with React-Leaflet',
    ],
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Redux Toolkit',
      'Cloudinary',
      'Recharts',
      'React-Leaflet',
    ],
    github: 'https://github.com/Aryan8400/Intern_Hire_FYP',
    video: null,
    image: internhireImage,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20 light:from-emerald-100 light:via-teal-100 light:to-cyan-100',
    icon: '💼',
  },
  {
    id: 3,
    title: 'STC Website',
    subtitle: 'Your Auto Parts Solution — Corporate Marketing Website',
    isCompany: true,
    description:
      'A frontend-only corporate marketing website for Shree STC Group, an automobile parts company based in Nepal. Built with React and Vite, it presents the company, product catalog, industries served, certifications, news, testimonials, and contact information across six routed pages — with all content managed in React components.',
    features: [
      'Multi-page routing (Home, Products, About, Contact, FAQ)',
      'Product catalog with category filter, sort & detail pages',
      'Bilingual navbar toggle (NEP/EN)',
      'Industries served & testimonials carousels',
      'Certifications, gallery, news & brand showcase',
      'Responsive layout with mobile navigation',
    ],
    tech: [
      'React 19',
      'Vite 7',
      'React Router DOM',
      'Tailwind CSS',
      'Swiper',
      'Heroicons',
      'React Icons',
    ],
    github: 'https://github.com/Aryan8400/STC-Website-Work',
    demo: 'https://stc-website-work.vercel.app/',
    video: null,
    image: stcWebsiteImage,
    gradient: 'from-slate-500/20 via-zinc-500/20 to-neutral-500/20 light:from-slate-100 light:via-zinc-100 light:to-neutral-100',
    icon: '🚗',
  },
  {
    id: 4,
    title: 'LMS Portal',
    subtitle: 'Learning Management System — Hetauda City College',
    isCompany: true,
    description:
      'A frontend-only Learning Management System built for Hetauda City College. A role-based React SPA with separate portals for students, teachers, principals, and super admins — featuring protected routing, role-specific dashboards, and full UI flows for courses, assignments, quizzes, and grades. Auth and data are mocked client-side, ready for backend integration.',
    features: [
      'Role-based access control with protected routes',
      'Four portals: Student, Teacher, Principal & Admin',
      'Dynamic sidebar navigation per role',
      'Student flows: courses, assignments, quizzes & grades',
      'Teacher flows: course management, gradebook & monitoring',
      'Admin dashboards with stats, tables & search',
      'Shared announcements & responsive mobile layout',
    ],
    tech: [
      'React 19',
      'Vite 7',
      'React Router DOM',
      'Tailwind CSS',
      'React Context API',
      'React Icons',
    ],
    github: 'https://github.com/Aryan8400/LMS-Portal',
    demo: 'https://lms-portal-ten-azure.vercel.app/',
    video: null,
    image: lmsPortalImage,
    gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 light:from-violet-100 light:via-purple-100 light:to-fuchsia-100',
    icon: '🎓',
  },
  {
    id: 5,
    title: 'EPC Company',
    subtitle: 'Electrical, Plumbing & Safety — Corporate Services Website',
    isCompany: true,
    description:
      'A modern, multi-page corporate website for an EPC services company offering electrical, plumbing, and safety solutions for residential, commercial, and industrial clients. Built with React and Vite, featuring six routed pages, Framer Motion animations, a filterable project gallery, and a mobile-first responsive layout.',
    features: [
      'Six-page SPA (Home, About, Services, Projects, Safety, Contact)',
      'Framer Motion scroll reveals & hover animations',
      'Filterable & paginated project gallery by category',
      'Services page with Electrical, Plumbing & Safety sections',
      'Contact form with loading & success feedback states',
      'Smooth scroll navigation & mobile hamburger menu',
      'Reusable layout with custom brand color system',
    ],
    tech: [
      'React',
      'Vite',
      'React Router DOM',
      'Tailwind CSS',
      'Framer Motion',
      'React Icons',
    ],
    github: 'https://github.com/Aryan8400/EPC-Company-Website',
    demo: 'https://epc-company-website.vercel.app/',
    video: null,
    image: epcImage,
    gradient: 'from-orange-500/20 via-amber-500/20 to-blue-500/20 light:from-orange-100 light:via-amber-100 light:to-blue-100',
    icon: '⚡',
  },
  {
    id: 6,
    title: 'Hetauda City College',
    subtitle: 'Institutional Website — Programs, Admissions & Announcements',
    isCompany: true,
    description:
      'A production-ready college website built for Hetauda City College. A React SPA with 10+ routes covering admissions, academics, faculty, resources, and dedicated program pages for BSc CSIT, BCA, BBA, and BBS — featuring live announcements via a PHP REST API, EmailJS contact form, interactive academic calendar, and Framer Motion animations.',
    features: [
      'Multi-page SPA with 10+ routes & lazy-loaded pages',
      'Program landing pages for BSc CSIT, BCA, BBA & BBS',
      'Live announcements fetched from PHP REST API',
      'Interactive academic calendar with event modals',
      'Contact form with EmailJS integration',
      'SEO metadata, Open Graph tags & structured data',
      'Environment-based deployment & Apache SPA routing',
    ],
    tech: [
      'React 19',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Framer Motion',
      'EmailJS',
      'PHP API',
    ],
    github: 'https://github.com/Aryan8400/College-Website',
    demo: 'https://college-website-beta-ten.vercel.app/',
    video: null,
    image: collegeWebsiteImage,
    gradient: 'from-sky-500/20 via-blue-500/20 to-indigo-500/20 light:from-sky-100 light:via-blue-100 light:to-indigo-100',
    icon: '🏫',
  },
]

export const experienceTimeline = [
  {
    year: 'Jul 2025 – Oct 2025',
    title: 'UI Designer & Frontend Developer',
    organization: 'Aviyantra Tech — Hetauda, Nepal',
    type: 'work',
    description:
      'Designed and developed responsive frontend applications for client projects, including corporate websites and a college LMS portal. Worked with React, Tailwind CSS, and modern UI patterns to deliver polished, production-ready interfaces.',
  },
  {
    year: '2023 – 2025',
    title: 'BSc (Hons) Computing — First Class Honours',
    organization: 'Islington College — Kathmandu, Nepal',
    type: 'education',
    description:
      'Completed an honours degree in computing with a focus on software development, web technologies, databases, and full-stack application design. Graduated with First Class Honours.',
  },
  {
    year: 'Aug 2024 – Nov 2024',
    title: 'Frontend Developer Intern',
    organization: 'Bluefox Company Pvt. Ltd. — Ithari, Nepal',
    type: 'internship',
    description:
      'Gained hands-on experience building and maintaining web interfaces in a professional team environment. Contributed to frontend development tasks using React and modern CSS practices.',
  },
  {
    year: '2020 – 2022',
    title: 'Higher Secondary Education (+2)',
    organization: 'Himalaya Secondary School — Damak, Jhapa',
    type: 'education',
    description:
      'Completed higher secondary level education under the National Examination Board (NEB), building the academic foundation for university-level computing studies.',
  },
  {
    year: '2020',
    title: 'Secondary Level Education (SEE)',
    organization: 'Himalaya Secondary School — Damak, Jhapa',
    type: 'education',
    description:
      'Completed secondary level education under the National Examination Board (NEB) in Damak, Jhapa.',
  },
]

export const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'GitHub Repositories', value: 20, suffix: '+' },
  { label: 'Years of Learning', value: 3, suffix: '+' },
]

export const certifications = [
  {
    title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services',
    year: '2024',
    url: 'https://www.credly.com/badges/e06412c8-113a-4e98-810d-b812dae8c8f4/print',
    image: awsBadgeImage,
  },
  {
    title: 'AWS Academy Graduate - Machine Learning Foundations - Training Badge',
    issuer: 'Amazon Web Services',
    year: '2024',
    url: 'https://www.credly.com/badges/895ecd61-537d-49be-94c9-dc546317ca60/print',
    image: awsMLFoundationsBadgeImage,
  },
  {
    title: 'AWS Academy Graduate - Data Engineering - Training Badge',
    issuer: 'Amazon Web Services',
    year: '2024',
    url: 'https://www.credly.com/badges/4127eba5-71bb-4449-89af-a816be299674/print',
    image: awsDataEngineeringBadgeImage,
  },
  {
    title: 'AWS Academy Graduate - Machine Learning for Natural Language Processing - Training Badge',
    issuer: 'Amazon Web Services',
    year: '2024',
    url: 'https://www.credly.com/badges/f05edf3d-8680-47a9-abe0-9deb2f6f9ff6/print',
    image: awsMLNLPBadgeImage,
  },
  
]
