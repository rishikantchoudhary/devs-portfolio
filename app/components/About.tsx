const About = () => {
  return (
    <div
      className="mt-[clamp(50px,15vh,250px)] lg:mt-[clamp(100px,20vh,250px)] mx-auto max-w-6xl w-[clamp(250px,80vw,600px)] lg:w-[70vw] flex flex-col lg:flex-row"
      id="about"
    >
      <h2 className="my-8 lg:mr-8 lg:pl-8 flex-2 text-[clamp(30px,6vw,100px)] font-light flex justify-center lg:flex-col">
        <p className="px-4 text-white bg-highlight w-fit">ABOUT</p>
        <p className=" w-fit px-4 text-text-blue dark:text-white">ME</p>
      </h2>
      <span className="h-1 lg:h-auto lg:w-1 bg-highlight"></span>
      <div className="m-8 lg:flex-3 lg:py-6 text-base sm:text-lg dark:text-white">
        <p>Hello,</p>
        <p>
          I’m a Full Stack Developer who enjoys the entire creative process,
          from designing interfaces in Figma to coding complex backends with
          Next.js and Python. I’ve honed my skills by building and shipping
          diverse end-to-end projects, focusing on clean code and real-world
          functionality rather than just theory. I’m always learning and looking
          for the next challenge. I’m open to any opportunities or
          collaborations, so feel free to reach out!
        </p>
      </div>
    </div>
  )
}
export default About
