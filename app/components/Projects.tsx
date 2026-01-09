import ProjectCard from './ProjectCard'

import html from '../../public/html.png'
import css from '../../public/css.png'
import js from '../../public/js.png'
import ts from '../../public/ts.png'
import vite from '../../public/Vite.js.png'
import reactjs from '../../public/react.png'
import nextjs from '../../public/Next.js.png'
import flask from '../../public/Flask.png'
import nodejs from '../../public/nodeJS.png'
import python from '../../public/Python.png'
import sqlite from '../../public/SQLite.png'
import tailwind from '../../public/tailwind.png'

import site from '../../public/site-white.png'
import github_white from '../../public/github-white.png'
import figma_white from '../../public/figma-white.png'

const imageArr = [
  { src: html, alt: 'HTML' }, //
  { src: css, alt: 'CSS' }, //
  { src: js, alt: 'JavaScript' }, //
  { src: ts, alt: 'TypeScript' }, //
  { src: vite, alt: 'Vite' }, //
  { src: reactjs, alt: 'ReactJS' }, //
  { src: nextjs, alt: 'NextJS' }, //
  { src: flask, alt: 'Flask' }, //
  { src: nodejs, alt: 'NodeJS' }, //
  { src: python, alt: 'Python' }, //
  { src: sqlite, alt: 'SQLite' }, //
  { src: tailwind, alt: 'Tailwind CSS' }, //
]

const linkPngs = {
  site: { src: site, alt: 'Site' },
  github: { src: github_white, alt: 'GitHub' },
  figma: { src: figma_white, alt: 'Figma' },
}

const projectsArr = [
  {
    name: 'QuizMaster',
    description: `A comprehensive full-stack quiz platform featuring user authentication, score tracking, and a robust admin dashboard for managing content and users.`,
    stack: ['CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
    links: {
      site: 'https://rishi951.pythonanywhere.com/',
      github: 'https://github.com/rishikantchoudhary/QuizMaster',
    },
  },
  {
    name: 'PantryPal',
    description: `A dynamic recipe application built with React and Tailwind that leverages the Gemini API to suggest meals based on your available ingredients.`,
    stack: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Vite', 'NodeJS'],
    links: {
      site: 'https://pantry-pal-swart.vercel.app/',
      github: 'https://github.com/rishikantchoudhary/PantryPal',
      figma:
        'https://www.figma.com/design/fxLlfr3NjresssszQohveN/PantryPal?node-id=2-2&t=1l0goVlklOJOC6XR-1',
    },
  },
  {
    name: 'Dev Portfolio',
    description: `A responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS to professionally showcase my full-stack projects and technical skills.`,
    stack: ['NextJS', 'TypeScript', 'Tailwind CSS'],
    links: {
      site: 'https://rishis-dev-portfolio.vercel.app/',
      github: 'https://github.com/rishikantchoudhary/devs-portfolio',
      figma:
        'https://www.figma.com/design/qQPH0xbXfygRpQKk0P2HhJ/Personal-Portfolio?node-id=23-19&t=PitPFHvzad4tVYEr-1',
    },
  },
  {
    name: 'SIMPLE NOTE!',
    description: `A light weight note taking web application, which uses browser’s local storage to securely save, display and delete the note.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://simplenote-rishi.netlify.app/',
      github:
        'https://github.com/rishikantchoudhary/NoteTakingApplication-html-css-js',
      figma:
        'https://www.figma.com/design/m7kuh8YWePoi73cYJXwSdT/Note-Taking-App?node-id=0-1&t=ePq48DiAoJDMIdVT-1',
    },
  },
  {
    name: 'React Calculator',
    description: `A modern, responsive calculator application built using React, designed to perform basic arithmetic operations with a clean and intuitive user interface.`,
    stack: ['ReactJS', 'JavaScript', 'CSS', 'Vite'],
    links: {
      site: 'https://react-calculator-rishi.netlify.app/',
      github: 'https://github.com/rishikantchoudhary/React-Calculator',
    },
  },
]

const Projects = () => {
  return (
    <div id="work" className="py-10 bg-gray dark:bg-black w-screen">
      <h2 className="m-auto w-fit font-light text-[clamp(30px,6vw,100px)]">
        <p className="mr-3 md:mr-4 text-black dark:text-white inline">My</p>
        <p className="px-4 text-white dark:text-black bg-black dark:bg-white inline">
          Work
        </p>
      </h2>
      <div className="mt-20 max-w-7xl w-[90vw] lg:w-[80vw] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {projectsArr.map((project, index) => {
          const projectStackImages = imageArr.filter((img) =>
            project.stack.includes(img.alt)
          )
          return (
            <ProjectCard
              key={index}
              projectDetail={project}
              stackImages={projectStackImages}
              linkPngs={linkPngs}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Projects
