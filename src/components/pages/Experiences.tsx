import ExperienceCard from "../experience/ExperienceCard";

export default function Experiences() {
  return (

    <section id="about" className='scroll-mt-25'>
      <div className='flex flex-row justify-end sm:pr-10 mb-12 ml-78'>
        {/* ml-78 on line 6 for mobile responsiveness */}
        <span className="text-6xl md:text-8xl mr-1 md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-pink-600 to-violet-600 ">✨</span>
        <div className='text-6xl md:text-8xl md:onest-bold onest-lighter bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Experiences
        </div>
      </div>
      <div className="text-center -ml-6">
        <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-fit mb-10 bg-gradient-to-r from-violet-600 to-pink-600'>
          Work experience
        </div>
      </div>
      {/* negative margin left negates the screen's padding left */}
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ExperienceCard caption={'UNSW Academic Tutor for COMP3511 - Human Computer Interaction'} />
        <ExperienceCard caption={'UNSW Academic Tutor for COMP4920 - Professional Issues and Ethics'} />
        <ExperienceCard caption={'Junior Digital Design, Collateral, and Administrative Intern @Xylo Bio'} />
        <ExperienceCard caption={'Retail Sales Assistant @Miniso'} />

      </div>
      <div className="text-center -ml-6">
        <div className='text-5xl onest-lighter max-w-full bg-clip-text text-transparent inline-block h-fit mb-10 bg-gradient-to-r from-violet-600 to-pink-600'>
          Education
        </div>
      </div>
      <div className="flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ExperienceCard caption={"UNSW - Bachelor's of Commerce and Computer Science"} />
      </div>
    </section>
  );
};