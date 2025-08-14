import { /*useEffect,*/ useState } from "react";

interface TagProps {
  tag: string,
  colour: string,
}

export default function Tag({ tag, /*colour*/ }: TagProps) {
  const [tagColour, /*setTagColour*/] = useState<string>('white');
  const [tagTextColour, /*setTagTextColour*/] = useState<string>('white')

  /* useEffect(() => {
    getTagTextColour();
  }, [])

  const getTagTextColour = () => {
    if (colour === 'blue') {
      setTagColour('#B4E5FC')
      setTagTextColour('#0E5D95')
    }
    else if (colour === 'orange') {
      setTagColour('#FCDAB8')
      setTagTextColour('#DA9006')
    }
    else if (colour === 'green') {
      setTagColour('#CFF0C3')
      setTagTextColour('#0E9530')
    }
  } */

  return (
    <div className={`lexend-light w-fit p-[0.3rem] text-[${tagTextColour}] text-sm bg-[${tagColour}] border-1 rounded-3xl ml-2`}>
      {tag}
    </div>
  );
};