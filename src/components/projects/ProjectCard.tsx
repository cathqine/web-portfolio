import CardDesc from "./CardDesc"
import PhotoCard from "./PhotoCard"

interface ProjectCardProps {
  src: string,
  index: number,
  title: string,
  caption: string,
  status: string[],
  techstack: string[],
}

export default function ProjectCard({ src, index, title, caption, status, techstack }: ProjectCardProps) {
  // use state to see if it is in mobile mode, if it is in mobile mode then it is hidden. otherwise it is not hidden
  return (
    <div className="flex flex-row mb-15 sm:mb-20 sm:m-2 -ml-10 overflow-x-scroll">
      <div className="flex md:flex-row flex-col md:overflow-y-scroll md:overflow-x-scroll">
        {
          (index % 2 === 1) ?
            <>
              <PhotoCard src={src} hidden={''} isLeft={(index % 2 === 1) ? true : false} alt={title} /> {/* overflow-y doesn't work for these? */}
              <CardDesc
                title={title}
                caption={caption}
                status={status}
                techstack={techstack}
                isRight={(index % 2 === 1) ? true : false} />
            </> :

            <>
              <PhotoCard src={src} hidden={'visible md:hidden'} isLeft={(index % 2 === 1) ? true : false} alt={title} />
              <CardDesc
                title={title}
                caption={caption}
                status={status}
                techstack={techstack}
                isRight={(index % 2 === 1) ? true : false} />
              <PhotoCard src={src} alt={title} hidden={'max-md:hidden visible'} isLeft={(index % 2 === 1) ? true : false}
              />
            </>
        }
      </div>
    </div>
  );
}