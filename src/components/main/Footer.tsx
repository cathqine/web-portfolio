import Link from "../navbar/Link";

export default function Footer() {
  return (
    <footer className="pt-6 bottom-0">
      <div className='m-2 onest'>
        Thanks for visiting my space!
      </div>
      <hr />
      <div className='m-2 flex flex-row justify-end gap-8'>
        <Link text={'Projects'} underline={false} />
        <Link text={'About'} underline={false} />
        <Link text={'Contact'} underline={false} />
      </div>
    </footer>
  );
}