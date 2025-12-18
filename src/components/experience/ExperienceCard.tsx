interface ExperienceCardProps {
  logo: string,
  alt: string,
  caption: string,
  duration: string,
}

export default function ExperienceCard({ logo, caption, duration }: ExperienceCardProps) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="ml-30 mr-13 w-70 md:w-20 overflow-hidden grid col-2 text-center h-20 bg-white/20 border-1 border-white rounded-full mb-8">
        <img src={logo} className="min-w-[100%]" />
      </div>
      <div className="w-70 md:w-140 p-5 rounded-2xl grid col-2 text-center h-fit bg-white/20 mb-8 items-center justify-center">
        <span title="role" className="font-bold">{caption.split('\n')[0]}</span>
        <span title="details" className="font-light">{caption.split('\n')[1]}</span>
        <span title="details" className="font-light">{caption.split('\n')[2]}</span> {/* is this problematic? */}
      </div>
      <div className="w-70 font-light md:w-75 ml-8 p-5 rounded-2xl text-center h-fit bg-white/20 mb-8 items-center justify-center">
        {duration}
      </div>
    </div>
  );
}