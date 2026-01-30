import { createContext } from 'react';

interface DarkModeProps {
  darkMode: string,
  setDarkMode: React.Dispatch<React.SetStateAction<string>>,
  // mode: string,
  // setMode: React.Dispatch<React.SetStateAction<string>>,
}

// intialisng dark mode context
export const DarkModeContext = createContext<DarkModeProps>({
  darkMode: '',
  setDarkMode: () => null,
});