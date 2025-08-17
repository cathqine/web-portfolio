import ProjectCard from "../projects/ProjectCard";
import workoutimer from '../../assets/workout-timer.jpg';
import willowquizzes from '../../assets/willow-quizzes-1.jpg';

export default function ArchivedProjects() {
  return (
    <section id="archived-projects" className='scroll-mt-25'>
      <div className="flex flex-col text-center -ml-6">
        <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-fit sm:mb-15 mb-6 bg-gradient-to-r from-violet-600 to-pink-600'>
          Archived Projects
        </div>
        <div className="sm:text-2xl text-xl onest-lighter sm:-mt-10 sm:-mb-10 bg-clip-text text-transparent inline-block h-20 sm:h-30  mb-4 bg-gradient-to-r from-pink-400 to-violet-400">
          Discontinued personal and university course projects
        </div>
      </div>
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ProjectCard index={5}
          title={"Workout Timer"}
          src={workoutimer}
          caption={"Project idea inspired from when I was working out.\nAccessible via Github cathqine/workout-timer."}
          status={["Archived"]}
          techstack={["React", "TypeScript", "TailwindCSS"]} />
        <ProjectCard index={6}
          title={"Willow Quizzes"}
          src={willowquizzes}
          caption={"Discontinued from its initial phase. Made as part of the publications' personal projects initiative.\nAccessible via Github cathqine/willow-quizzes."}
          status={["Archived"]}
          techstack={["React", "JavaScript", "MUI"]} />
      </div>
    </section>
  )
};