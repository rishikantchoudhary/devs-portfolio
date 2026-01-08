import ProjectCard from './ProjectCard'

import html from '../../public/html.png'
import css from '../../public/css.png'
import js from '../../public/js.png'
import vite from '../../public/Vite.js.png'
import reactjs from '../../public/react.png'
import nextjs from '../../public/Next.js.png'
import flask from '../../public/Flask.png'
import nodejs from '../../public/nodeJS.png'
import python from '../../public/Python.png'
import sqlite from '../../public/SQLite.png'

import site from '../../public/site-white.png'
import github_white from '../../public/github-white.png'
import figma_white from '../../public/figma-white.png'

const imageArr = [
  { src: html, alt: 'HTML' },
  { src: css, alt: 'CSS' },
  { src: js, alt: 'JavaScript' },
  { src: vite, alt: 'Vite' },
  { src: reactjs, alt: 'ReactJS' },
  { src: nextjs, alt: 'NextJS' },
  { src: flask, alt: 'Flask' },
  { src: nodejs, alt: 'NodeJS' },
  { src: python, alt: 'Python' },
  { src: sqlite, alt: 'SQLite' },
]

const linkPngs = {
  site: { src: site, alt: 'Site' },
  github: { src: github_white, alt: 'GitHub' },
  figma: { src: figma_white, alt: 'Figma' },
}

const projectsArr = [
  {
    name: 'QuizMaster',
    description: `A light weight note taking web application, which uses browser’s local storage to securely save, display and delete the note.`,
    stack: ['HTML', 'CSS', 'JavaScript', 'Flask', 'NodeJS', 'NextJS', 'Python'],
    links: {
      site: 'https://www.google.com/',
      github: 'https://www.youtube.com/',
      figma: 'https://www.figma.com',
    },
  },
  {
    name: 'QuizMaster',
    description: `A light weight note taking web application, which uses browser’s local storage to securely save, display and delete the note.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://www.google.com/',
      github: 'https://www.youtube.com/',
      figma: 'https://www.figma.com',
    },
  },
  {
    name: 'QuizMaster',
    description: `A light weight note taking web application, which uses browser’s local storage to securely save, display and delete the note.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://www.google.com/',
      github: 'https://www.youtube.com/',
      figma: 'https://www.figma.com',
    },
  },
  {
    name: 'QuizMaster',
    description: `A light weight note taking web application, which uses browser’s local storage to securely save, display and delete the note.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://www.google.com/',
      github: 'https://www.youtube.com/',
      figma: 'https://www.figma.com',
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
