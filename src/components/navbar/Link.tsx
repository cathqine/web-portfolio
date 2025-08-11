interface LinkProps {
  text: string,
  underline: boolean,
}

export default function Link({ text, underline }: LinkProps) {
  return (
    <a href="#">
      <div className={`h-full text-lg ${underline ? 'hover-underline-animation' : 'hover:underline'} left hover:text-[#b6439b]/90 transition duration-300 ease-in-out pl-4 onest-bold flex flex-col justify-center dark:hover:text-[#ffc9f3]`}>
        {text}
      </div>
    </a>
  );
}