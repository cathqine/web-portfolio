import { useState } from "react";
import { DarkModeContext } from "../navbar/DarkModeContext";
interface PhotoCardProps {
  src: string,
  alt: string,
  hidden: string,
  isLeft: boolean,
}

export default function PhotoCard({ src, alt, hidden, isLeft }: PhotoCardProps) {
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`overflow-hidden h-75 w-75 lg:w-90 md:h-90 md:w-75 sm:w-140 rounded-t-2xl ${hidden} ${isLeft ? 'rounded-t-2xl border-l-[2px] border-t-[2px] border-b-[2px] md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-2xl' : 'border-r-[2px] border-t-[2px] border-b-[2px] rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none md:rounded-br-2xl'}`}>
        <img alt={alt} src={src} className={`object-cover md:h-90 sm:w-140 h-75 ${isLeft ? 'rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-2xl' : 'rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none md:rounded-br-2xl'}`} />
      </div>
    </DarkModeContext.Provider >
  );
}