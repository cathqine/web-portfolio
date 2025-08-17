import ProjectCard from "../projects/ProjectCard";
import bbd from '../../assets/bbd.png';
import port from '../../assets/portweb.png';

export default function CurrentProjects() {
  return (
    <section id="current-projects" className='scroll-mt-25'>
      <div className="text-center -ml-6">
        <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Current Projects
        </div>
      </div>
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ProjectCard src={bbd} index={3}
          title={"Baked by Dora"}
          caption={"The official BBD cafe website. \n\nCurrently in the early stages of design."}
          status={["WIP"]}
          techstack={[]} />
        <ProjectCard src={port} index={4}
          title={"Website Portfolio"}
          caption={"The mobile-responsive website you are currently viewing! Made to showcase my projects & work.\nTODO's: light/dark mode, animations, creatives, missing projects."}
          status={["WIP"]}
          techstack={["React", "TypeScript", "TailwindCSS"]} />
      </div>
    </section>
  )
};