import DarkModeButton from "./DarkModeButton";
import Link from "./Link";
import Logo from "../Logo";

export default function Nav() {
  return (
    <section id="navbar" className="backdrop-blur fixed top-0 left-0 bg-[#fff7fdbc] w-full h-16 dark:bg-[#181818d6] dark:text-white text-black flex flex-row border-b-2">
      <Logo />
      <div className="flex flex-row justify-end w-full gap-16">
        <Link text={'About'} />
        <Link text={'Projects'} />
        <Link text={'Contact'} />
        <DarkModeButton />
      </div>
    </section>
  )
}