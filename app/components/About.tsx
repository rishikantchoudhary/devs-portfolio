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
          I am Rishikant A web developer is a programmer who develops World Wide
          Web applications using a client–server model. The applications
          typically use HTML, CSS, and JavaScript in the client, and any
          general-purpose programming language in the server. HTTP is used for
          communications between client and server. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nesciunt, eligendi necessitatibus.
          Aliquam placeat velit laborum? At cum voluptatem a iusto.
        </p>
      </div>
    </div>
  )
}
export default About
