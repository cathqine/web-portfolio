interface LinkProps {
  text: string
}

export default function Link({ text }: LinkProps) {
  return (
    <a href="/">
      <div className="h-full text-lg hover-underline-animation left hover:text-white/80 transition duration-300 ease-in-out pl-4 onest-bold flex flex-col justify-center dark:hover:text-[#e4e4e4]">
        {text}
      </div>
    </a>
  );
}