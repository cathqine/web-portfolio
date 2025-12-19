import { useContext } from 'react';
import bubbles from '../../assets/bubbles.png';
import { DarkModeContext } from '../navbar/DarkModeContext';

export default function Background() {
  const mode = useContext(DarkModeContext); // {darkMode, setDarkMode}

  return (
    <section id="about" className='scroll-mt-25'>
      <div className='flex flex-row justify-end sm:pr-10 mb-12 ml-78'>
        {/* ml-78 on line 6 for mobile responsiveness */}
        <span className="text-6xl md:text-8xl mr-1 md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-pink-600 to-violet-600">✨</span>
        <div className='text-6xl md:text-8xl md:onest-bold onest-lighter bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Background
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='opacity-100 bg-pink-400 hover:opacity-70 w-fit transition-opacity duration-300'>
          {mode.darkMode ?
            <>
              <div className='onest opacity-0 hover:opacity-100 w-75 h-90 absolute pt-32 pl-4 text-sm transition-opacity text-pink-200'>
                blowing bubbles up to the evening sky {'<3'}
                <div className='mt-2'>{'>'} the sky's the limit</div>
                <div className='mt-20 ml-45 onest'>july 21st 2025</div>
              </div>
            </>
            :
            <div className='onest opacity-0 hover:opacity-100 w-75 h-90 absolute pt-32 pl-4 text-sm transition-opacity text-pink-300'>
              blowing bubbles up to the evening sky {'<3'}
              <div className='mt-20 ml-45 onest'>july 21st 2025</div>
            </div>
          }
          <img alt='picture of me looking up to the bubbles blown to the evening sky' src={bubbles} width={300} />
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-10 gap-8">
          <div className={`text-md onest w-60 ${mode.darkMode ? 'text-pink-200 ' : 'text-pink-600'}`}>
            By now, I'm sure you can tell that I love to create things - whether it's in the form of art, words or code.
          </div>
          <div className={`text-md onest w-80 ${mode.darkMode ? 'text-pink-300' : 'text-pink-500'}`}>
            Beyond this realm of creativity, I have a BIG love for teaching. As an academic tutor, providing beneficial learning experiences for my students brings me a lot of fulfilment & joy!
          </div>
        </div>
        <div className={`text-md onest w-100 ${mode.darkMode ? 'text-pink-300' : 'text-pink-400'} absolute mt-2 right-8`}>
          See <a className='underline' href='#creatives'>Creatives</a> for my photo album, artworks & blogs!
        </div>
      </div>
    </section>
  );
}