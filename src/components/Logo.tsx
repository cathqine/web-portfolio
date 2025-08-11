
export default function Logo() {
  const logo = 'CL';
  return (
    <a href="/">
      <div className="pl-4 text-xl onest-bold flex flex-col justify-center h-full dark:hover:text-[#ffc9f3] hover:text-[#b6439b]">
        {logo}
      </div>
    </a>
  )
}