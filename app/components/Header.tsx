'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import './switch.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChange = () => {
    const rootElem = document.documentElement
    rootElem.classList.toggle('dark')
  }

  return (
    <header
      id="home"
      className="w-screen h-24 rounded-b-2xl bg-header-bg dark:bg-black text-white fixed top-0 z-50"
    >
      <div className="max-w-7xl w-[90vw] lg:w-[80vw] m-auto h-full flex items-center justify-between">
        <a href="#home">
          <h1 className="text-4xl lg:text-5xl font-bold">Rishi's Portfolio</h1>
        </a>
        <nav
          className={`${
            isOpen
              ? 'p-10 h-screen w-[min(80vw,30rem)] bg-header-bg dark:bg-black absolute top-0 right-0 shadow-[0_0_300px_600px_rgba(1,1,1,0.5)] flex flex-row-reverse justify-between'
              : ''
          } lg:w-[55%] text-xl font-semibold`}
        >
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center"
            >
              {isOpen ? (
                <X size={28} strokeWidth={3} />
              ) : (
                <Menu size={24} strokeWidth={3} />
              )}
            </button>
          </div>
          <ul
            className={`lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center ${
              isOpen ? 'flex flex-col gap-6' : 'hidden'
            }`}
          >
            <li className="hover:transform-[scale(1.08)] duration-200">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:transform-[scale(1.08)] duration-200">
              <a href="#work">My Work</a>
            </li>
            <li className="hover:transform-[scale(1.08)] duration-200">
              <a href="#contact">Contact Me</a>
            </li>
            <li className="hover:transform-[scale(1.08)] duration-200">
              <a href="/Rishikant_Resume.pdf" download="Rishikant_Resume.pdf">
                Resume
              </a>
            </li>
            <label className="switch">
              <input onChange={handleChange} type="checkbox" id="toggle-dark" />
              <span className="slider"></span>
            </label>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
