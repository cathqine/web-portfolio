import { useContext } from "react";
import { DarkModeContext } from "../navbar/DarkModeContext";
import heart from '../../assets/pinkheart.svg';

export default function IntroContent() {
  const mode = useContext(DarkModeContext); // {darkMode, setDarkMode}
  return (
    <>
      <div className='onest text-2xl inline-block'>
        I&nbsp;
        <div className='bg-clip-text text-transparent inline-block bg-gradient-to-r from-pink-500 to-violet-500'>
          {mode.darkMode ?
            <>
              l
              <img alt='pulsing heart' src={heart} width={18} className='m-[0.1rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
              ve&nbsp;
            </>
            :
            <div>
              l
              <img alt='pulsing heart' src={heart} width={18} className='m-[0.1rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
              ve&nbsp;
            </div>
            // <img alt='pulsing heart' src={filledheart} width={50} className='motion-preset-pulse-sm inline-block hover:motion-paused' />
          }

        </div>
        all
        <div className='motion-rotate-loop-2 motion-duration-[4000ms] motion-delay-2000 hover:motion-paused motion-preset-oscillate motion-preset-float-sm bg-gradient-to-r dark:from-amber-500 dark:to-pink-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>
          &nbsp;things
        </div>
        <div className='inline-block motion-preset-seesaw-sm hover:motion-paused motion-preset-oscillate motion-preset-float-sm'>
          &nbsp;within
        </div>
        <div className='inline-block motion-preset-oscillate motion-preset-float-sm hover:motion-paused'>
          &nbsp;the&nbsp;
        </div>
        <div className='inline-block -motion-rotate-loop-5 motion-duration-[4000ms] hover:motion-paused'>
          realm of
        </div>
        <div className='hover:motion-paused motion-preset-seesaw-sm motion-preset-oscillate motion-preset-float-sm bg-gradient-to-r dark:from-pink-500 dark:to-amber-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>
          &nbsp;creativity!&nbsp;
        </div>

        {mode.darkMode ?
          <div className='onest-bold text-lg pb-16 pt-10'>
            {`>`} My greatest
            <div className='text-outline inline-block bg-gradient-to-r dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent'>&nbsp;passions&nbsp;</div>
            exist within
            <div className='text-outline bg-gradient-to-r dark:to-violet-500 dark:via-indigo-400 dark:from-sky-400 bg-clip-text text-transparent inline-block'>
              &nbsp;software development&nbsp;
            </div>
            &
            <div className='text-outline bg-gradient-to-r dark:to-violet-500 dark:from-pink-500 bg-clip-text text-transparent inline-block'>
              &nbsp;UX/UI design.
            </div>
            <div className='md:pt-0 pt-5'>
              {`>`} I also like creating <div className='text-outline bg-gradient-to-r dark:to-violet-500 dark:via-indigo-400 dark:from-sky-400 bg-clip-text text-transparent inline-block'>artworks</div> and writing <div className='text-outline bg-gradient-to-r dark:to-violet-500 dark:from-pink-500 bg-clip-text text-transparent inline-block'>prose & poetry.</div>
            </div>
          </div>
          : <div className='onest-bold text-lg pb-16 pt-10'>
            {`>`} My greatest
            <div className='inline-block bg-gradient-to-r dark:from-violet-400 dark:to-pink-400 to-pink-500 from-violet-500 bg-clip-text text-transparent'>&nbsp;passions&nbsp;</div>
            exist within
            <div className='bg-gradient-to-r to-pink-500 from-violet-500 bg-clip-text text-transparent inline-block'>
              &nbsp;software development&nbsp;
            </div>
            &
            <div className='bg-gradient-to-r to-pink-500 from-violet-500 bg-clip-text text-transparent inline-block'>
              &nbsp;product design&nbsp;
            </div>
            <div className='md:pt-0 pt-5'>
              {`>`} I also like creating
              <div className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-pink-500 to-violet-500">
                &nbsp;artworks&nbsp;
              </div>
              and writing
              <div className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-pink-500 to-violet-500">
                &nbsp;prose & poetry.
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}