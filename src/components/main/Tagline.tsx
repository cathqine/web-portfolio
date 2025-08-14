import { useContext } from "react";
import { DarkModeContext } from "../navbar/DarkModeContext";
import filledheart from '../../assets/filledheart.svg';
import heart from '../../assets/pinkheart.svg';

export default function Tagline() {
  const mode = useContext(DarkModeContext); // {darkMode, setDarkMode}
  return (
    <p className="onest-bold sm:text-2xl text-xl">👋 Hi! My name is Catherine
      {mode.darkMode ?
        <img alt='pulsing heart' src={heart} width={23} className='mb-[0.2rem] ml-[0.3rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
        :
        <img alt='pulsing heart' src={filledheart} width={23} className='mb-[0.25rem] ml-[0.1rem] motion-preset-pulse-sm inline-block hover:motion-paused' />
      }
    </p>
  );
}