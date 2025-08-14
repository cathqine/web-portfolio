import './App.css'
import { useState } from 'react';
import Nav from './components/navbar/Nav';
import { DarkModeContext } from './components/navbar/DarkModeContext';
import Footer from './components/sections/Footer';
import GradientTypewriteText from './components/main/GradientTypewriteText';
import Intro from './components/sections/Intro';
import Projects from './components/sections/Projects';
import Tagline from './components/main/Tagline';

function App() {
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode}`}> {/* toggles between dark and light mode */}
        <Nav />
        <section id='full-screen' className='w-screen h-100% pt-30 pl-20 dark:text-white bg-radial-[at_200%_75%] dark:bg-radial-[at_300%_400%] dark:from-[#d800ca] dark:to-black from-[#c4269a] to-white p-8'>
          <Tagline />
          <section id="intro" className='sm:ml-0 -ml-2'>
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