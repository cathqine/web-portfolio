import ProjectCard from "../projects/ProjectCard";

export default function ArchivedProjects() {
  return (
    <>
      <section id="current-projects" className='scroll-mt-25'>
        <div className="text-center -ml-6">
          <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
            Current Projects
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
          <ProjectCard index={3}
            title={"Baked by Dora"}
            caption={"The official BBD cafe website. Currently in the website design process."}
            status={["WIP"]}
            techstack={[]} />
          <ProjectCard index={4}
            title={"Website Portfolio"}
            caption={"The website you are currently viewing! Made to showcase my projects & work. Will be making updates to projects & blogs."}
            status={["WIP"]}
            techstack={["React", "TypeScript", "TailwindCSS"]} />
        </div>
      </section>
      <section id="archived-projects" className='scroll-mt-25'>
        <div className="flex flex-col text-center -ml-6">
          <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
            Archived Projects
          </div>
          <div className="sm:text-2xl text-xl onest-lighter sm:-mt-10 sm:-mb-10 bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-pink-400 to-violet-400">
            Personal projects that are no longer being worked on
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
          <ProjectCard index={5}
            title={"Workout Timer"}
            caption={"Check it out here: https://workout-timer-phi.vercel.app/"}
            status={["Archived"]}
            techstack={["React", "TypeScript", "MUI / TailwindCSS"]} />
          <ProjectCard index={6}
            title={"Willow Quizzes"}
            caption={"Check it out here: https://willow-quizzes.vercel.app/"}
            status={["Archived"]}
            techstack={["React", "TypeScript", "TailwindCSS"]} />
        </div>
      </section>
    </>
  )
};