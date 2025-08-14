import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className='scroll-mt-25'>
      <div className='flex flex-row justify-end sm:pr-10 mb-12 ml-78'>
        {/* ml-78 on line 6 for mobile responsiveness */}
        <div className='text-8xl md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Projects
        </div>
      </div>
      {/* negative margin left negates the screen's padding left */}
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ProjectCard index={1}
          title={"eCOM Dashboard"}
          caption={"An ESG dashboard app assisting corporations & investors in exploring, monitoring and reporting ESG metrics."}
          status={["Completed"]}
          techstack={["React", "NodeJS", "TypeScript", "TailwindCSS"]} />
        <ProjectCard index={2}
          title={"Electus"}
          caption={"A voting tool for UNSW society held AGMs."}
          status={["Completed"]}
          techstack={["React", "NodeJS", "TypeScript", "TailwindCSS"]} />
        <ProjectCard index={3}
          title={"Baked by Dora"}
          caption={"The official BBD cafe website."}
          status={["WIP"]}
          techstack={["React", "NodeJS", "TypeScript", "TailwindCSS"]} />
        <ProjectCard index={4}
          title={"Website Portfolio"}
          caption={"The website you are currently viewing! Made to showcase my projects & work."}
          status={["WIP"]}
          techstack={["React", "TypeScript", "TailwindCSS"]} />
      </div>
    </section>
  )
}