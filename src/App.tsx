import './App.css'
import { useState } from 'react';
import Nav from './components/navbar/Nav';
import { DarkModeContext } from './components/navbar/DarkModeContext';
import Card from './components/Card';
import Footer from './components/main/Footer';
// import heart from './assets/heart.svg';
import heart from './assets/pinkheart.svg';
import filledheart from './assets/filledheart.svg';
import GradientTypewriteText from './components/main/GradientTypewriteText';

function App() {
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode}`}> {/* toggles between dark and light mode */}
        <Nav />
        <section id='full-screen' className='w-screen h-[100vh] pt-30 pl-20 dark:text-white bg-radial-[at_200%_75%] dark:bg-radial-[at_300%_400%] dark:from-[#d800ca] dark:to-black from-[#c4269a] to-white p-8 pt-24'>
          <section id="intro" className=''>
            <p className="onest-bold text-2xl">👋 Hi! My name is Catherine.</p>
            <GradientTypewriteText />
          </section>

          <section id="content" className='pt-10 pl-8 flex flex-col'>
            <div className='onest text-2xl inline-block'>
              I&nbsp;
              <p className='bg-clip-text text-transparent inline-block bg-gradient-to-r from-pink-500 to-violet-500'>
                {darkMode ?
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
            {/* <Card /> */}
            <p className='text-2xl onest-bold text-red-400'>
              todo - projects cards section (including this one as a project)
            </p>
          </section>

          <Footer />

        </section>
      </div>
    </DarkModeContext.Provider >
  )
}

export default App;