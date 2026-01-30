import { useState } from "react";
import { DarkModeContext } from "../navbar/DarkModeContext";
import Tag from "./Tag";

interface CardDescProps {
  title: string,
  caption: string,
  status: string[],
  techstack: string[],
  isRight: boolean,
}

export default function CardDesc({ title, caption, status, techstack, isRight }: CardDescProps) {
  // tag types
  // const frontend = ['ReactTSX', 'ReactJS', 'TailwindCSS', 'MUI']; // blue
  // const stage = ['Launched', 'Figma Design', 'Github', 'Completed']; // green // TODO: edit this.
  // const inProgress = ['WIP', 'Archived']; // orange

  const [type, /*setType*/] = useState<string>('blue');
  const sepCaption = caption.split('\n');
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('dark-mode')!);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`border-[2px] lexend dark:bg-gradient-to-b dark:from-[#4b044c] dark:to-[#0f0136] h-fit rounded-b-2xl w-75 2xl:w-250 xl:w-200 lg:w-150 md:h-90 md:w-110 sm:w-140 ${isRight ? 'md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none' : 'md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-br-none'} flex flex-col justify-center p-10`}>
        <section id='status-mobile' className="sm:hidden flex flex-row items-center justify-end -mr-5 pb-2 sm:pb-0 sm:mr-0">
          <div className="ml-2 sm:flex sm:flex-row items-center overflow-y-auto">
            {status?.map((tag: string) => {
              return (
                <div className={`lexend w-fit p-[0.6rem] text-[0.85rem] sm:text-sm border-1 rounded-3xl sm:ml-2`}>
                  {tag}
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col mb-8 sm:pt-5">
          <span className="lexend sm:text-3xl text-4xl">{title}</span>
          {/* captions */}
          {sepCaption?.map((caption: string) => {
            return (
              <div className="p-2 pl-0 onest sm:text-lg text-base">{caption}</div>
            );
          })}
        </div>

        {techstack.length != 0 ? // rmv empty space if list is empty
          <div id="tech-stack" className="flex flex-col md:mb-2 sm:mb-8">
            <div className="flex flex-row items-center mt-3">
              <span className="hidden sm:block sm:min-w-fit sm: onest-bolder sm:text-lg">Tech stack</span>
              <div className="ml-2 grid grid-cols-2 gap-4 place-items-center sm:flex sm:flex-row overflow-y-auto">
                {techstack?.map((tag: string) => {
                  // if (frontend.includes(tag)) setType('blue')
                  // else if (stage.includes(tag)) setType('green')
                  // else if (inProgress.includes(tag)) setType('orange')
                  return (
                    <Tag tag={tag} colour={type} />
                  );
                })}
              </div>
            </div>
          </div>
          :
          <></>
        }

        <section id='status-desktop' className="hidden sm:flex sm:flex-row items-center justify-end -mr-5 pb-2 sm:pb-0 sm:mr-0">
          <div className="ml-2 sm:flex sm:flex-row items-center overflow-y-auto">
            {status?.map((tag: string) => {
              return (
                // <Tag tag={tag} colour={type} />
                <div className={`lexend-light w-fit p-[0.6rem] text-[0.85rem] sm:text-sm border-1 rounded-3xl sm:ml-2`}>
                  {tag}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </DarkModeContext.Provider>
  );
}