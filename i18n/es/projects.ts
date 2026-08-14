export const projects = [
  {
    title: "Atom Challenge – Constructor de Flujos con Agentes de IA",
    description:
      "Un proyecto colaborativo de hackathon para crear visualmente flujos de agentes de IA, donde agentes especializados procesan solicitudes y pasan sus resultados al siguiente nodo.",
    details:
      "Construí este proyecto con un compañero y me enfoqué principalmente en el backend: un motor de ejecución con Fastify y TypeScript que valida y ejecuta flujos guardados, dirige las solicitudes entre agentes orquestadores, validadores, especialistas y genéricos mediante Genkit y OpenAI, y persiste los datos con Firebase. El frontend en Angular ofrece un editor basado en nodos y un chat en vivo.",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "ngx-vflow", "Fastify", "Genkit", "OpenAI", "Firebase"],
  },
  {
    title: "Pokémon Team Builder",
    description:
      "Una aplicación para construir equipos Pokémon hecha con React y Redux que te permite elegir un equipo de hasta 6 Pokémon.",
    details:
      "Esta aplicación utiliza la PokéAPI para obtener datos de Pokémon y mostrarlos de una manera amigable para el usuario. También utiliza React Router para navegar entre páginas y Redux Toolkit para gestionar el estado de la aplicación.",
  },
  {
    title: "Company App",
    description:
      "Una aplicación de empresa construida con Vue.js 3 y Laravel con permisos granulados y localizacion con i18n.",
    details:
      "Esta es una aplicación full-stack que se hizo para gestionar las órdenes de producción y los materiales de una empresa. Utiliza Element Plus para la interfaz de usuario, Laravel para el backend y MySQL para la base de datos. Se desplegó en DigitalOcean con CI/CD.",
  },
  {
    title: "Portfolio",
    description:
      "Este sitio web está construido con Vue.js 3 y estilizado con Tailwind CSS, combinando el poder de un framework reactivo con un framework CSS de utilidades.",
  },
];
