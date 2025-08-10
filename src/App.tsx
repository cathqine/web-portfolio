import './App.css'
import { useState } from 'react';
import Nav from './components/navbar/Nav';
import { DarkModeContext } from './components/navbar/DarkModeContext';
import Link from './components/navbar/Link';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [typedText, setTypedText] = useState<string>('');

  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode}`}> {/* toggles between dark and light mode */}
        <Nav />
        <section id='intro' className='w-screen h-[100vh] dark:text-white dark:bg-[#181818] dark:bg-none bg-radial-[at_400%_75%] from-[#c4269a] to-white p-8 pt-24'>

          <section className="onest text-3xl motion-preset-bounce">
            👋 Hi! My name is Catherine.
          </section>

          <span className='pt-6 text-7xl inline-block onest'>{`>`}&nbsp;</span>
          <TypeAnimation
            sequence={[
              'Casual academic @UNSW',
              2500, // Waits 2.5s
              'Computer Science Graduate',
              700,
              'Computer Science & Commerce Graduate',
              2500,
              'Anime Enth',
              0,
              'Creative Enthusiast',
              2500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            deletionSpeed={60}
            className='pt-6 text-7xl gradient-animated-text inline-block'
            style={{ whiteSpace: 'pre-line' }}
          />

          <div className='pt-2 '>
            text text text text
          </div>

          <footer className="pt-6 bottom-0">
            <div className='m-2'>
              Thanks for visiting my space!
            </div>

            <hr />

            <div className='m-2 flex flex-row justify-end gap-8'>
              <Link text='About' />
              <Link text='Projects' />
              <Link text='Contact' />
            </div>
          </footer>

        </section>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App;