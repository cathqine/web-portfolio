interface PhotoCardProps {
  src: string,
  alt: string,
  hidden: string,
  isLeft: boolean,
}

export default function PhotoCard({ src, alt, hidden, isLeft }: PhotoCardProps) {
  return (
    <div className={`overflow-hidden h-75 w-75 lg:w-90 md:h-90 md:w-75 sm:w-140 border-1 rounded-t-2xl ${hidden} ${isLeft ? 'rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-2xl' : 'rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none md:rounded-br-2xl'}`}>
      <img alt={alt} src={src} className={`object-cover md:h-90 sm:w-140 h-75 ${isLeft ? 'rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-bl-2xl' : 'rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none md:rounded-br-2xl'}`} />
    </div>
  );
}