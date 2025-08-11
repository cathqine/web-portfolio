import { Moon, Sun } from 'lucide-react';

import { useContext, useEffect } from 'react';
import { DarkModeContext } from './DarkModeContext';

export default function DarkModeButton() {
  const mode = useContext(DarkModeContext); // {darkMode, setDarkMode}

  useEffect(() => {
    localStorage.setItem('dark-mode', mode.darkMode);
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