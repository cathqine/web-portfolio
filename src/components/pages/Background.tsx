import { TypeAnimation } from 'react-type-animation';
import pfp from '../../assets/pfp.png';
import { useState } from 'react';

export default function Background() {
  const [hovered, setHovered] = useState<boolean>(false);

  const startTyping = () => {
    if (!hovered) setHovered(true);
  }

  return (
    <>
      <div className='w-screen h-10 border-pink-500' onMouseOver={startTyping}></div>
      <section id="background" className='scroll-mt-25'>
        <div className='flex flex-row justify-end sm:pr-10 mb-12 ml-78'>
          {/* ml-78 on line 6 for mobile responsiveness */}
          <span className="text-6xl md:text-8xl mr-1 md:onest-bold onest-lightest bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-pink-600 to-violet-600">✨</span>
          <div className='text-6xl md:text-8xl md:onest-bold onest-lighter bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
            Background
          </div>
        </div>
        <div className='flex justify-center'>
          <div title='picture of me at nour, surry hills!' className='opacity-100 bg-pink-400 hover:opacity-90 w-fit transition-opacity duration-300'>
            <img alt='profile picture' src={pfp} width={300} className='rounded-2xl border-[1px]' />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-10 gap-8">
          <p className='italic motion-rotate-loop-2 motion-duration-[4000ms] motion-delay-2000 hover:motion-paused motion-preset-oscillate motion-preset-float-sm bg-gradient-to-r dark:from-pink-400 dark:to-amber-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>
            I love to create things—whether it's in the form of
            <span className='bg-gradient-to-r dark:from-pink-500 dark:to-amber-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>&nbsp;art,</span>
            <span className='bg-gradient-to-r dark:from-amber-500 dark:to-pink-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>&nbsp;words, or</span>
            <span className='bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block'>&nbsp;code.</span>
          </p>
          <div className='md:w-1/2 font-light text-lg mb-20 bg-gradient-to-r dark:from-pink-500 dark:to-amber-500 from-pink-600 to-violet-600 bg-clip-text text-transparent inline-block'>
            {
              hovered ?
                <>
                  <div className='mb-4'><span className='font-bold'>{'>'}&nbsp;</span>
                    <TypeAnimation sequence={[
                      "Despite my early love for games and the internet, I only wrote my first line of code when I had entered my first year of university.",
                    ]}
                      cursor={true}
                      speed={50}
                      className='onest-light text-base'
                    />
                  </div>
                  <div className='mb-4'>
                    <span className='font-bold'>{'>'}&nbsp;</span>
                    <TypeAnimation sequence={[
                      8000,
                      "Since then, I've fallen in love with programming. Learning how to code opened up a whole new exciting world for me; a space where creativity and software come together, where I create exceptional user experience in my softwares."
                    ]}
                      cursor={true}
                      speed={40}
                      className='onest-light text-base'
                    />
                  </div>
                  <div className='mb-4'>
                    <span className='font-bold'>{'>'}&nbsp;</span>
                    <TypeAnimation sequence={[
                      23000,
                      "Outside of the tech world, I love to stay active: with yoga, pilates and the gym. I also like making latte art ♥ (I'm still working on mastering the skill to this day!)"
                    ]}
                      cursor={true}
                      speed={33}
                      className='onest-light text-base'
                    />
                  </div>
                </>
                :
                <div onMouseOver={startTyping} className='font-bold w-screen flex flex-col flex-start'>
                  <div className='font-bold mb-4'>{'>'}&nbsp;</div>
                  <div className='font-bold mb-4'>{'>'}&nbsp;</div>
                  <div className='font-bold mb-4'>{'>'}&nbsp;</div>
                </div>
            }
          </div>
        </div>
      </section>
    </>
  );
}