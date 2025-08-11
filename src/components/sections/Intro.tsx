import { useContext } from "react";
import { DarkModeContext } from "../navbar/DarkModeContext";
import heart from '../../assets/pinkheart.svg';

export default function IntroContent() {
  const mode = useContext(DarkModeContext); // {darkMode, setDarkMode}
  return (
    <>
      <div className='onest text-2xl inline-block'>
        I&nbsp;
        <p className='bg-clip-text text-transparent inline-block bg-gradient-to-r from-pink-500 to-violet-500'>
          {mode.darkMode ?
            <>
              l
              <img alt='pulsing heart' src={heart} width={18} className='m-[0.1rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
              ve&nbsp;
            </>
            :
            <p>
              l
              <img alt='pulsing heart' src={heart} width={18} className='m-[0.1rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
              ve&nbsp;
            </p>
            // <img alt='pulsing heart' src={filledheart} width={50} className='motion-preset-pulse-sm inline-block hover:motion-paused' />
          }

        </p>
        all
        <p className='motion-rotate-loop-2 motion-duration-[4000ms] motion-delay-2000 hover:motion-paused motion-preset-oscillate motion-preset-float-sm bg-gradient-to-r dark:from-amber-500 dark:to-pink-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>
          &nbsp;things
        </p>
        <p className='inline-block motion-preset-seesaw-sm hover:motion-paused motion-preset-oscillate motion-preset-float-sm'>
          &nbsp;within
        </p>
        <p className='inline-block motion-preset-oscillate motion-preset-float-sm hover:motion-paused'>
          &nbsp;the&nbsp;
        </p>
        <p className='inline-block -motion-rotate-loop-5 motion-duration-[4000ms] hover:motion-paused'>
          realm of
        </p>
        <p className='hover:motion-paused motion-preset-seesaw-sm motion-preset-oscillate motion-preset-float-sm bg-gradient-to-r dark:from-pink-500 dark:to-amber-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>
          &nbsp;creativity!&nbsp;
        </p>


        <p className='onest-bold text-lg pt-2 pb-16 pt-10'>
          {`>`} My greatest passions exist within
          <p className='bg-gradient-to-r dark:to-indigo-500 dark:via-indigo-400 dark:from-sky-400 to-pink-500 from-violet-500 bg-clip-text text-transparent inline-block'>
            &nbsp;software development&nbsp;
          </p>
          &
          <p className='bg-gradient-to-r dark:to-violet-500 dark:from-pink-500 to-pink-500 from-violet-500 bg-clip-text text-transparent inline-block'>
            &nbsp;product design&nbsp;
          </p>
          <p className='md:pt-0 pt-5'>
            {`>`} I also like to spend time on making illustrations and writing prose & poetry.
          </p>
        </p>
      </div>
    </>
  )
}