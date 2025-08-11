import './App.css'
import { useState } from 'react';
import Nav from './components/navbar/Nav';
import { DarkModeContext } from './components/navbar/DarkModeContext';
import Footer from './components/sections/Footer';
import filledheart from './assets/filledheart.svg';
import heart from './assets/pinkheart.svg';
import GradientTypewriteText from './components/main/GradientTypewriteText';
import Card from './components/main/Card';
import Intro from './components/sections/Intro';
import Projects from './components/sections/Projects';

function App() {
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode}`}> {/* toggles between dark and light mode */}
        <Nav />
        <section id='full-screen' className='w-screen h-100% pt-30 pl-20 dark:text-white bg-radial-[at_200%_75%] dark:bg-radial-[at_300%_400%] dark:from-[#d800ca] dark:to-black from-[#c4269a] to-white p-8 pt-24'>
          <section id="intro" className=''>
            <p className="onest-bold text-2xl">👋 Hi! My name is Catherine
              {darkMode ?
                <img alt='pulsing heart' src={heart} width={23} className='mb-[0.2rem] ml-[0.3rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
                :
                <img alt='pulsing heart' src={filledheart} width={23} className='mb-[0.25rem] ml-[0.1rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
              }
            </p>
            <GradientTypewriteText />
          </section>

          <section id="content" className='pt-10 pl-8 flex flex-col'>
            <Intro />
            <Projects />
          </section>

          <Footer />

        </section>
      </div>
    </DarkModeContext.Provider >
  )
}

export default App;