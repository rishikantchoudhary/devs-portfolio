import ImageGrid from './ImageGrid'

const Skills = () => {
  return (
    <div className="py-[clamp(50px,10vw,100px)] relative">
      <span className="absolute top-0 left-0 w-full h-[55%] bg-bg dark:bg-bg-dark z-0"></span>
      <span className="absolute bottom-0 left-0 w-full h-[45%] bg-gray dark:bg-black z-0"></span>
      <div className="m-auto rounded-2xl max-w-6xl w-[clamp(250px,80vw,600px)] lg:w-[70vw] bg-skill-bg dark:bg-skill-bg-dark relative z-10 shadow-2xl">
        <h2 className="pt-8 m-auto w-fit text-[clamp(20px,4vw,50px)] text-text-blue">
          MY SKILLS AND TECH STACK
        </h2>
        <ImageGrid />
      </div>
    </div>
  )
}
export default Skills
