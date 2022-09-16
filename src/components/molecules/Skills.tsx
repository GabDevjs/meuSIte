import { BsLockFill, BsSpeedometer } from "react-icons/bs";
import {GiSupersonicArrow } from 'react-icons/gi'
import {FaNodeJs, FaReact } from 'react-icons/fa'
import {SiNextdotjs, SiTypescript, SiTailwindcss, SiSass } from 'react-icons/si'

const Conpedencias = [
  {
    text: "performance",
    icon: FaNodeJs,
  },
  {
    text: "Acertividade ",
    icon: SiNextdotjs,
  },
  {
    text: "Segurança",
    icon: FaReact,
  },
  {
    text: "performance",
    icon: SiTypescript,
  },
  {
    text: "Acertividade ",
    icon: SiTailwindcss,
  },
  {
    text: "Segurança",
    icon: SiSass,
  },
];

export const SkillsSection = () => {
  return (
    <div className="bg-zinc-400 dark:bg-zinc-600 py-5 border-zinc-700 dark:border-zinc-500 border-opacity-10 border-b-2 border-t-2">
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-32 md:grid-cols-6 lg:grid-cols-6">
            {Conpedencias.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-offset="200"
              data-aos-delay="50" className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-zinc-200  transition-all duration-500">
                <span className="h-12 flex justify-center">
                    <item.icon  className="text-4xl "/>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};