import DarkModeButton from "./DarkModeButton";
import Link from "./Link";
import Logo from "../main/Logo";
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <section id="navbar" className="z-10 backdrop-blur-xs fixed top-0 left-0 bg-[#fff7fdbc] w-full h-16 dark:bg-[#0000003f] dark:text-white text-black flex flex-row border-b-2">
      <Logo />
      <div className="flex flex-row justify-end sm:min-w-full w-full lg:gap-16 md:gap-12 sm:gap-8">
        <div id="mobile-dark-mode" className="sm:hidden justify-center flex">
          <DarkModeButton />
        </div>

        <div className="sm:flex flex-row lg:gap-16 md:gap-12 sm:gap-8 hidden">
          <Link text={'Projects'} underline={true} href='#projects' />
          <Link text={'Experiences'} underline={true} href='#about' />
          <Link text={'Background'} underline={true} href='#background' />
        </div>

        <div id="dark-mode" className="sm:flex justify-center hidden">
          <DarkModeButton />
        </div>

        <div className="justify-center items-center flex flex-col h-16 w-16">
          <button className="sm:hidden justify-center items-center flex flex-col p-2 dark:bg-[#000000]/75">
            <Menu size={28} />
          </button>
        </div>

      </div>
    </section>
  )
}