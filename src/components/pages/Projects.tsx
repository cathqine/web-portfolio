import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className='scroll-mt-25'>
      <div className='flex flex-row justify-end sm:pr-10 mb-12 ml-78'>
        {/* ml-78 on line 6 for mobile responsiveness */}
        <span className="text-8xl mr-1 md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-pink-600 to-violet-600 ">✨</span>
        <div className='text-8xl md:onest-bold onest-lighter bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Projects
        </div>
      </div>
      <div className="text-center -ml-6">
        <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Completed Projects
        </div>
      </div>
      {/* negative margin left negates the screen's padding left */}
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ProjectCard index={1} src={''}
          title={"eCOM Dashboard"}
          caption={"An ESG dashboard app assisting corporations & investors in exploring, monitoring and reporting ESG metrics. \nMade as part of COMP3900's 24T3 capstone project."}
          status={["Completed"]}
          techstack={["React", "NodeJS", "TypeScript", "TailwindCSS"]} />
        <ProjectCard index={2} src={''}
          title={"Electus"}
          caption={"A voting tool for UNSW society held AGMs. \nMade as part of DevSoc's 25T1 Training Program."}
          status={["Completed"]}
          techstack={["React", "NodeJS", "TypeScript", "TailwindCSS"]} />
      </div>

    </section>
  )
}