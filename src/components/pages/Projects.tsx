import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects-section" className=''>
      <div className='flex flex-row justify-end pr-10 mb-12'>
        <span className='text-8xl md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Projects
        </span>
      </div>
      <div className="flex justify-center items-center flex-col -ml-30 lexend">
        <ProjectCard index={1}
          title={"eCOM Dashboard"}
          caption={"An ESG dashboard app assisting corporations & investors in exploring, monitoring and reporting ESG metrics."}
          status={["Completed", "Github"]}
          techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
        <ProjectCard index={2}
          title={"Electus"}
          caption={"A voting tool for UNSW society held AGMs."}
          status={["Completed", "Github"]}
          techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
        <ProjectCard index={3}
          title={"Baked by Dora"}
          caption={"The official BBD cafe website."}
          status={["WIP", "Github", 'Figma Design']}
          techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
      </div>
    </section>
  )
}