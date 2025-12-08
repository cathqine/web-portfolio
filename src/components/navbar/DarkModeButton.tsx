import { Moon, Sun } from 'lucide-react';

import { useContext, useEffect } from 'react';
import { DarkModeContext } from './DarkModeContext';

export default function DarkModeButton() {
  const mode = useContext(DarkModeContext); // {darkMode, setDarkMode}

  useEffect(() => {
    if (mode.darkMode !== null) localStorage.setItem('dark-mode', mode.darkMode); // toggles
    else window.matchMedia("(prefers-color-scheme: dark)").matches ? mode.setDarkMode('dark') : mode.setDarkMode('light'); // system preferences
  }, [mode.darkMode]);

  return (
    <div className='flex flex-col justify-center'>
      <button className={`onest-bold dark:bg-[#000000]/40 ${mode.darkMode} p-2 h-12 w-12 flex flex-col justify-center items-center`} onClick={() => {
        localStorage.getItem('dark-mode') as string === 'dark' ? mode.setDarkMode('') : mode.setDarkMode('dark')
      }}>
        {mode.darkMode === 'dark' ? <Moon size={28} color='white' className='hover:text-white' /> : <Sun size={28} color='black' />}
      </button>
    </div>
  )
}