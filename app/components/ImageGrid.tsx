import Image from 'next/image'

import figma from '../../public/figma.png'
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

import git from '../../public/git.png'
import github from '../../public/github.png'

const imageArr = [
  { src: figma, alt: 'Figma' },
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
  { src: git, alt: 'Git' },
  { src: github, alt: 'GitHub' },
]

const ImageGrid = () => {
  return (
    <div className="m-auto py-10 w-[90%] md:w-[80%] grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-y-8 ">
      {imageArr.map((img, index) => {
        return (
          <div key={index}>
            <div
              className={`relative h-10 lg:h-18 ${
                ['Flask', 'NextJS', 'GitHub'].includes(img.alt)
                  ? 'dark:invert'
                  : ''
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                placeholder="blur"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 80px, 160px"
              />
            </div>
            <p className="m-auto mt-2 w-fit md:text-lg text-text-blue font-semibold">
              {img.alt}
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default ImageGrid
