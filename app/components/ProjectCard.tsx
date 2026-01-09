import Image, { StaticImageData } from 'next/image'

export type StackItem = {
  src: StaticImageData | string
  alt: string
}

export type linkPngs = Record<string, StackItem>

interface TechStackProps {
  stackImages: StackItem[]
  linkPngs: linkPngs
  projectDetail: {
    name: string
    description: string
    stack: string[]
    links: {
      site: string
      github: string
      figma?: string
    }
  }
}

const ProjectCard = ({
  projectDetail,
  stackImages,
  linkPngs,
}: TechStackProps) => {
  return (
    <div className="mx-auto p-5 max-w-80 sm: max-w-auto bg-bg dark:bg-bg-dark text-text-blue dark:text-white rounded-2xl hover:scale-105 duration-200 hover:shadow-2xl shadow-xl dark:shadow-stone-950">
      <h3 className="pb-3 font-semibold text-4xl md:text-3xl">
        {projectDetail.name}
      </h3>
      <p>{projectDetail.description}</p>
      <p className="py-2 font-semibold text-2xl md:text-xl">Tech Stack:</p>
      <div className="grid grid-cols-4 gap-3">
        {stackImages.map((img, i) => {
          return (
            <div key={i} className="mx-auto relative h-8 lg:h-10 aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                placeholder="blur"
                fill
                className={`object-contain ${
                  img.alt === 'NodeJS' ? 'dark:invert' : ''
                }`}
                sizes="(max-width: 1024px) 50px, 100px"
              />
            </div>
          )
        })}
      </div>
      <p className="py-2 font-semibold text-2xl md:text-xl">Links:</p>
      <div className="flex gap-3">
        {Object.entries(projectDetail.links).map(([platform, url], i) => {
          return (
            <a
              href={url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="py-2 px-3 h-10 bg-highlight rounded-full flex">
                <Image
                  src={linkPngs[platform].src}
                  alt={linkPngs[platform].alt}
                  height={20}
                />
                <div className="overflow-hidden transition-all duration-300 ease-in-out max-w-0 opacity-0 group-hover:max-w-fit group-hover:opacity-100 group-hover:ml-3">
                  <p className="text-white">{linkPngs[platform].alt}</p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default ProjectCard
