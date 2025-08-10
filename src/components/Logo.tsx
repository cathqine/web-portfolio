
export default function Logo() {
  const logo = 'CL';
  return (
    <a href="/">
      <div className="pl-4 text-xl onest-bold flex flex-col justify-center h-full dark:hover:text-[#e4e4e4] hover:text-[#5d5d5d]">
        {logo}
      </div>
    </a>
  )
}