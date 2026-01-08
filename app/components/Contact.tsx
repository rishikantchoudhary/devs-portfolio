import Image from 'next/image'

import email from '../../public/email.png'
import linkedin from '../../public/linkedin.png'
import x from '../../public/x.png'
import github from '../../public/github-highlight.png'

const emailURL =
  'mailto:rishikantchoudhary951@gmail.com?subject=Portfolio%20Inquiry'

const imageArr = [
  { src: email, alt: 'Email', href: emailURL },
  {
    src: linkedin,
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishi951',
  },
  { src: x, alt: 'X', href: 'https://x.com/Rishi_951' },
  { src: github, alt: 'GitHub', href: 'https://github.com/rishikantchoudhary' },
]

const Contact = () => {
  return (
    <div
      className="my-[clamp(30px,10vh,80px)] mx-auto max-w-6xl w-[clamp(250px,80vw,600px)] md:w-[80vw] flex flex-col md:flex-row"
      id="contact"
    >
      <h2 className="my-4 md:mr-8 md:pl-8 flex-2 text-[clamp(30px,6vw,100px)] font-light flex justify-center md:flex-col">
        <p className="px-4 text-white bg-highlight w-fit">CONTACT</p>
        <p className=" w-fit px-4 text-text-blue dark:text-white">ME</p>
      </h2>
      <span className="h-1 md:h-auto md:w-1 bg-highlight"></span>
      <div className="md:ml-4 xl:ml-8 md:flex-3 md:py-6 dark:text-white flex flex-col justify-evenly items-center">
        <p className="my-8 md:my-0 text-[clamp(16px,4vw,30px)] md:text-[clamp(16px,2.3vw,30px)]">
          Email : rishikantchoudhary951@gmail.com
        </p>
        <ul className="flex min-w-65 w-[80%] md:w-full justify-around">
          {imageArr.map((img, index) => {
            return (
              <li
                key={index}
                className="relative h-8 w-9 md:h-10 md:w-12 hover:scale-110 duration-100"
              >
                <a href={img.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Contact
