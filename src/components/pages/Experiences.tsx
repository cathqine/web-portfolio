import ExperienceCard from "../experience/ExperienceCard";
import unsw from '../../assets/unsw_logo.png';
import cse from '../../assets/cse_logo.png';
import sghs from '../../assets/sghs_logo.png';
import xylo from '../../assets/xylo_logo.jpg';
import miniso from '../../assets/miniso_logo.png';

export default function Experiences() {
  return (

    <section id="experiences" className='scroll-mt-25'>
      <div className='flex flex-row justify-end sm:pr-10 mb-12 ml-78'>
        {/* ml-78 on line 6 for mobile responsiveness */}
        <span className="text-6xl md:text-8xl mr-1 md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-pink-600 to-violet-600 ">✨</span>
        <div className='text-6xl md:text-8xl md:onest-bold onest-lighter bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Experiences
        </div>
      </div>
      <div className="ml-30">
        <div className='text-5xl onest-light max-w-full bg-clip-text text-transparent inline-block h-16 mb-10 bg-gradient-to-r from-violet-600 to-pink-600'>
          Work experience
        </div>
      </div>
      {/* negative margin left negates the screen's padding left */}
      <div className="flex justify-center items-center flex-col sm:-ml-20 -ml-8 lexend mb-8">
        <ExperienceCard logo={cse} alt={'logo of UNSW CSE'} caption={'CSE Academic Tutor @UNSW\n COMP4920 - Professional Issues and Ethics - 24T3, 25T1, 25T3\n COMP3511 - Human Computer Interaction - 25T2'} duration={'September 2024—December 2025'} />
        {/* <ExperienceCard logo={cse} alt={'logo of UNSW CSE'} caption={'UNSW Casual Academic (CSE Tutor)\n COMP3511 - Human Computer Interaction - 25T2'} duration={'April 2025—August 2025'} /> */}
        <ExperienceCard logo={xylo} alt={'logo of Xylo Bio'} caption={'Digital Design, Collateral, and Administrative Intern @Xylo'} duration={'June 2023—August 2023'} />
        <ExperienceCard logo={miniso} alt={'logo of Miniso'} caption={'Retail Sales Assistant @Miniso'} duration={'October 2022—January 2024'} />
      </div>
      <div className="ml-30 mb-4">
        <div className='text-5xl onest-light max-w-full bg-clip-text text-transparent inline-block h-fit mb-10 bg-gradient-to-r from-violet-600 to-pink-600'>
          Education
        </div>
      </div>
      <div className="-mt-4 flex justify-center items-center flex-col sm:-ml-20 lexend">
        <ExperienceCard logo={unsw} alt={'logo of UNSW'} caption={"Bachelor of Commerce and Computer Science \n w/ Distinction in Computer Science"} duration={'February 2021—February 2025'} />
        <ExperienceCard logo={sghs} alt={'logo of SGHS'} caption={"High School Diploma \n 2020 Graduate"} duration={'February 2015—November 2020'} />
      </div>
    </section>
  );
};