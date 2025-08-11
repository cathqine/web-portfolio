import DarkModeButton from "./DarkModeButton";
import Link from "./Link";
import Logo from "../main/Logo";
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <section id="navbar" className="z-10 backdrop-blur-xs fixed top-0 left-0 bg-[#fff7fdbc] w-full h-16 dark:bg-[#0000003f] dark:text-white text-black flex flex-row border-b-2">
      <Logo />
      <div className="flex flex-row justify-end w-full lg:gap-16 md:gap-12">
        <div className="md:hidden justify-center flex">
          <DarkModeButton />
        </div>
        <div className="md:flex flex-row lg:gap-16 md:gap-12  hidden">
          <Link text={'Projects'} underline={true} />
          <Link text={'About'} underline={true} />
          <Link text={'Contact'} underline={true} />
        </div>
        <div className="md:flex justify-center hidden">
          <DarkModeButton />
        </div>
        <div className="justify-center items-center flex flex-col h-16 w-16">
          <button className="md:hidden justify-center items-center flex flex-col p-2 dark:bg-[#000000]/75">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}