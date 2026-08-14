interface ProjectRepository {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  details: string;
  stack: string[];
  image: string;
  repositories?: ProjectRepository[];
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Atom Challenge – AI Agent Flow Builder',
    description:
      'A collaborative hackathon project for visually building AI-agent workflows, where specialized agents process requests and pass their output to the next node.',
    details:
      'I built this project with a teammate and focused primarily on the backend: a Fastify and TypeScript execution engine that validates and runs saved flows, routes requests through orchestrator, validator, specialist, and generic agents using Genkit and OpenAI, and persists data with Firebase. The Angular frontend provides a node-based editor and live chat.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'ngx-vflow', 'Fastify', 'Genkit', 'OpenAI', 'Firebase'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/DiegoMMR/atom-challenge-frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/DiegoMMR/atom-challenge-backend',
      },
    ],
    image: '/img/atom-challenge.png',
  },
  {
    title: 'Pokémon Team Builder',
    description: 'A Pokémon team builder app made with React and Redux that allows you to choose a team of up to 6 Pokémon.',
    details:
      'This app uses the PokéAPI to fetch Pokémon data and display it in a user-friendly way. It also uses the React Router to navigate between pages and the Redux Toolkit to manage the state of the app. It was deployed in Vercel.',
    stack: ['React.js', 'Redux', 'Typescript', 'SCSS', 'HTML'],
    repositories: [{ label: 'GitHub', url: 'https://github.com/DiegoMMR/react-pokedex' }],
    demo: 'https://react-pokedex-murex.vercel.app',
    image: '/img/react-pokedex.png',
  },
  {
    title: 'Company App',
    description: 'A company app built with Vue.js 3 and Laravel with fine-tuned permission and i18n localization',
    details:
      'This is a full-stack application that was made to manage the production orders and materials of a company. Use Element plus for the UI, Laravel for the backend, and MySQL for the database. It was deployed in DigitalOcean with CI/CD.',
    stack: ['Vue.js', 'Typescript', 'SCSS', 'Element Plus', 'Laravel', 'MySQL', 'Docker', 'CI/CD', 'i18n'],
    image: '/img/company-app.png',
  },
  {
    title: 'Portfolio',
    description:
      'This website is built with Nuxt 3 and styled with Tailwind CSS, combining the power of a reactive framework with a utility-first CSS framework.',
    details: 'It have i18n for the Localization fully responsive and accesible and it was deployed using DigitalOcean App Platform.',

    stack: ['Nuxt', 'Vue.js', 'Typescript', 'SCSS', 'Tailwind', 'Vite', 'i18n'],
    repositories: [{ label: 'GitHub', url: 'https://github.com/DiegoMMR/portfolio' }],
    image: '/img/portfolio.png',
  },
];
