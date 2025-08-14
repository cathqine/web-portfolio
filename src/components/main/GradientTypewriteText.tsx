import { TypeAnimation } from "react-type-animation";

export default function GradientTypewriteText() {
  return (
    <div className="flex flex-col justify-center h-80 md:h-fit pt-10">
      <div className='flex flex-row'>
        <span className='sm:text-7xl text-6xl inline-block onest-bold'>{`>`}&nbsp;</span>
        <TypeAnimation
          sequence={[
            'Casual academic @UNSW',
            8000, // Waits 2.5s
            'Computer Science Graduate',
            700,
            'Computer Science & Commerce Graduate',
            10000,
            'Anime Enth',
            0,
            'Creative Enthusiast',
            10500,
          ]}
          wrapper="span"
          cursor={false} // text gradient clips out cursor
          repeat={Infinity}
          deletionSpeed={60}
          className='h-outline sm:text-7xl text-6xl bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'
          style={{ whiteSpace: 'pre-line' }}
        />
        <div id="cursor-blink" className="invisible xl:visible motion-preset-blink motion-duration-1500 sm:text-7xl text-6xl onest">
          |
        </div>
      </div>
    </div>
  );
}
