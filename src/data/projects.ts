export interface ProjectProps {
  title: string;
  date: string;
  summary: string;
  image: string;
  stack: Array<string>;
  link: {
    github: string;
    demo: string;
  };
}

export const projects: ProjectProps[] = [
  {
    title: 'Portfolio Website',
    date: '11/02/2023',
    summary: 'Build My portfolio website with ReactJS and TailwindCSS.',
    image: '',
    stack: ['ReactJS', 'Javascript', 'TailwindCSS'],
    link: {
      github: 'https://github.com/rpadliwinata/rpadliwinata.my.id',
      demo: 'https://rpadliwinata.my.id/',
    },
  },
  // {
  //   title: 'Lasles VPN',
  //   date: '17/04/2021',
  //   summary:
  //     'Practice slicing web design into a website page with Tailwindcss.',
  //   image: '',
  //   stack: ['ReactJS', 'TailwindCSS'],
  //   link: {
  //     github: 'https://github.com/RevDonz/react-laslesvpn',
  //     demo: 'https://revdonz.github.io/react-laslesvpn/',
  //   },
  // },
  // {
  //   title: 'Inventory Lab',
  //   date: '07/09/2021',
  //   summary: 'Build an Inventory website page with MERN Stack.',
  //   image: '',
  //   stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'TailwindCSS'],
  //   link: {
  //     github: 'https://github.com/RevDonz/Inventory-Lab',
  //     demo: 'https://inventory-lab.netlify.app/',
  //   },
  // },
  // {
  //   title: 'Paper Anotation',
  //   date: '07/09/2021',
  //   summary: 'Build a website for anotate paper.',
  //   image: '',
  //   stack: ['NextJS', 'Typescript', 'Redux', 'TailwindCSS'],
  //   link: {
  //     github: 'https://github.com/fanzru/web-anotasi-paper',
  //     demo: 'https://skripsi.fanzru.dev/',
  //   },
  // },
  // {
  //   title: 'SISFO Klinik',
  //   date: '01/05/2021',
  //   summary:
  //     'Build website to manage clinical data such as patient data, drug data and transaction data.',
  //   image: '',
  //   stack: ['NextJS', 'Typescript', 'Redux', 'TailwindCSS'],
  //   link: {
  //     github: 'https://github.com/ilhamizzul/FE-SISFO-KLINIK',
  //     demo: 'https://fe-sisfo-klinik.vercel.app/',
  //   },
  // },
  // {
  //   title: 'Kerjago Web',
  //   date: '07/09/2021',
  //   summary: 'Build a landing page website for Kerjago.',
  //   image: '',
  //   stack: ['NextJS', 'Typescript', 'Redux', 'TailwindCSS'],
  //   link: {
  //     github: '',
  //     demo: 'https://kerjago.id/',
  //   },
  // },
  // {
  //   title: 'To Do List',
  //   date: '20/08/2022',
  //   summary: 'Todolist apps build with NextJS, Mantine.',
  //   image: '',
  //   stack: ['NextJS', 'Typescript', 'Mantine'],
  //   link: {
  //     github: 'https://github.com/RevDonz/next-todolist',
  //     demo: 'https://next-todolist-peach.vercel.app/',
  //   },
  // },
  // {
  //   title: 'Next.js Starter',
  //   date: '20/08/2022',
  //   summary:
  //     'NEXT.js starter with Tailwind CSS, TypeScript, next-themes (Dark Mode), and React Icons.',
  //   image: '',
  //   stack: ['NextJS', 'Typescript', 'TailwindCSS'],
  //   link: {
  //     github: 'https://github.com/RevDonz/next-tailwindcss-starter',
  //     demo: 'http://next-tailwindcss-starter-five.vercel.app/',
  //   },
  // },
];
