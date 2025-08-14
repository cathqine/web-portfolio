import Link from "../navbar/Link";
import SocialMedia from "../main/SocialMedia";

export default function Footer() {
  return (
    <footer className="pt-6 bottom-0">
      <div className='m-2 onest'>
        Thanks for visiting my space!
      </div>
      <hr />
      <div className='m-4 -mb-3 flex flex-row justify-end gap-8'>
        <Link text={'Projects'} underline={false} href='projects' />
        <Link text={'About'} underline={false} href='#about' />
        <SocialMedia />
      </div>
    </footer>
  );
}