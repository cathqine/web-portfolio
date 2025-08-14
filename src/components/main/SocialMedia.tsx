import { useContext } from "react";
import { DarkModeContext } from "../navbar/DarkModeContext";
import linkedin from '../../assets/linkedin.svg';
import lightLinkedin from '../../assets/light-linkedin.svg';
import github from '../../assets/github.svg';
import lightGithub from '../../assets/light-github.svg';

export default function SocialMedia() {
  const mode = useContext(DarkModeContext);
  return (
    <div id="contact" className='ml-4 flex flex-row justify-end gap-6 items-center'>
      {/* linkedin logo */}
      {
        mode.darkMode ?
          <a href="https://www.linkedin.com/in/catherineliu2479/" target="_blank">
            <img src={lightLinkedin} width={28} alt="linkedin logo" />
          </a> :
          <a href="https://www.linkedin.com/in/catherineliu2479/" target="_blank" className="hover:bg-black">
            <img src={linkedin} width={28} alt="linkedin logo" />
          </a>
      }
      {/* github logo */}
      {
        mode.darkMode ?
          <a href="https://github.com/cathqine" target="_blank">
            <img src={lightGithub} width={30} alt="github logo" />
          </a> :
          <a href="https://github.com/cathqine" target="_blank">
            <img src={github} width={30} alt="github logo" />
          </a>
      }
    </div>
  );
}