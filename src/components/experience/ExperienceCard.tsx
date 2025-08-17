interface ExperienceCardProps {
  caption: string,
}

export default function ExperienceCard({ caption }: ExperienceCardProps) {
  return (
    <div className="w-50 h-20 bg-white/20 flex justify-center items-center border-2 mb-8">
      {caption}
    </div>
  );
}