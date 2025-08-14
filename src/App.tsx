import './App.css'
import { useState } from 'react';
import Nav from './components/navbar/Nav';
import { DarkModeContext } from './components/navbar/DarkModeContext';
import Footer from './components/pages/Footer';
import GradientTypewriteText from './components/main/GradientTypewriteText';
import Intro from './components/pages/Intro';
import Projects from './components/pages/Projects';
import Tagline from './components/main/Tagline';

function App() {
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode}`}> {/* toggles between dark and light mode */}
        <Nav />
        <section id='full-screen' className='w-screen h-100% pt-30 pl-20 dark:text-white dark:bg-radial-[at_120%_170%] dark:from-[#ff00bb] dark:via-[#130022] dark:to-[#0a0a0a] bg-radial-[at_120%_120%] from-[#fffafe] via-[#fff3fb] to-[#ffcef1] p-8'>
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