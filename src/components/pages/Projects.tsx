import ProjectCard from "../projects/ProjectCard";
import capstone from '../../assets/capstone.png'
import bbd from '../../assets/bbd.png';
import port from '../../assets/portweb.png'
import lovelink from '../../assets/love_link.png';

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
          Featured Projects
        </div>
      </div>
      {/* negative margin left negates the screen's padding left */}
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ProjectCard index={1} src={capstone}
          title={"eCOM Dashboard"}
          caption={"• An ESG dashboard app assisting corporations & investors in exploring, monitoring and reporting ESG metrics. \nMade as part of COMP3900's 24T3 capstone project."}
          status={["Completed"]}
          techstack={["React", "NodeJS", "TypeScript", "TailwindCSS"]} />
        <ProjectCard src={bbd} index={2}
          title={"Baked by Dora: Bakery and Cafe"}
          caption={"• The official BBD cafe website.\n• Features include home page, menu, cart for shopping menu products and email order confirmation. \nTo be officially launched."}
          status={["Completed"]}
          techstack={[]} />
        <ProjectCard src={lovelink} index={3}
          title={"Love Link"}
          caption={"• A singles facilitator web application designed for singles to find love from attending in-person group dates/events. \n• Features include user/host dashboards, events search and compatibility quizzes.\nMade as part of DevSoc's 25T2 Training Program."}
          status={["WIP"]}
          techstack={["React", "TypeScript", "TailwindCSS"]} />
        <ProjectCard src={port} index={4}
          title={"Website Portfolio"}
          caption={"• The mobile-responsive website you are currently viewing! Made to showcase my projects & work.\n• Further improvements to be worked on: light/dark mode, animations, creatives (blogs), missing projects, more mobile responsiveness."}
          status={["WIP"]}
          techstack={["React", "TypeScript", "TailwindCSS"]} />
      </div>
    </section>
  )
}