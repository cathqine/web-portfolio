import Link from "../navbar/Link";
import SocialMedia from "../main/SocialMedia";

export default function Footer() {
  return (
    <footer className="pt-6 bottom-0">
      <div className='m-2 onest-light text-lg'>
        Thanks for visiting my space!
      </div>
      <hr />
      <div className='m-4 -mb-3 flex flex-row justify-end gap-8'>
        <Link text={'Projects'} underline={false} href='#projects' />
        <Link text={'Experiences'} underline={false} href='#about' />
        <Link text={'Creatives'} underline={false} href='#creatives' />
        <SocialMedia />
      </div>
    </footer>
  );
}