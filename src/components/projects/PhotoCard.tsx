interface PhotoCardProps {
  leftval: string,
  rightval: string,
  hidden: string,
}

export default function PhotoCard({ leftval, rightval, hidden }: PhotoCardProps) {
  // const [h, w] = dimensions; // h-80, w-80

  return (
    <div className={`h-75 w-75 md:h-80 md:w-80 ml-10 border-1 rounded-t-2xl md:rounded-2xl ${hidden} ${leftval} ${rightval}`}>
      <img src="" />
    </div>
  );
}