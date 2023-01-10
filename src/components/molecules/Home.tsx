import { useContext, useEffect, useState } from "react";
import Typed from "react-typed";
import Image from "next/image";
import ImageABout from "../../assets/perfil.webp";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import AppContext from "../../services/context";
import { navigation } from "../organisms";
import Link from "next/link";

export const Home = () => {
  const context = useContext(AppContext);
  const [mesagem, setMesagem] = useState("");
  useEffect(() => {
    setMesagem(context.MsDeboasVindas ? context.MsDeboasVindas : "Bem vindo");
  }, []);

  return (
    <header className="w-full h-full md:h-screen flex justify-center items-center overflow-hidden ">
      <div className="max-w-5xl w-full pt-20 md:pt-0  px-4 lg:px-6 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-4 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8  gap-y-16 pb-20 md:pb-0">
          <div className="flex w-full flex-wrap  justify-center items-center">
            <div
              data-aos="zoom-in"
              className="text-2xl lg:text-4xl w-full gap-2 md:gap-4 text-gray-900 text-center  md:text-left dark:text-gray-200 font-semibold leading-snug  flex flex-col"
            >
              <p>{mesagem}, me chamo</p>
              <h1 className=" text-4xl lg:text-6xl">
                <span className="text-degrade">Flavio Gabriel</span>
              </h1>
              <p>
                <Typed
                  strings={[
                    "Front-end Developer",
                    "Back-end Developer",
                    "Full-stack Developer",
                  ]}
                  typeSpeed={160}
                  backSpeed={90}
                  loop
                />
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-10 items-center pt-5 md:pt-10 w-full">
              {navigation.social.map((item, index) => (
                <div data-aos="zoom-in" key={index}>
                  <div className="bg-gray-900 dark:bg-zinc-600 bg-opacity-20 p-3  hover:scale-125 rounded-full group shadow-xl shadow-zinc-400 dark:shadow-zinc-700 flex justify-center flex-col max-w-xs text-gray-800 border border-gray-500 border-opacity-30 dark:hover:border-primary-orange hover:border-primary-orange hover:shadow-primary-orange dark:hover:shadow-primary-orange dark:border-zinc-400 transition-all duration-300 cursor-pointer ">
                    <Link href={item.href}>
                      <a
                        className="text-gray-700 dark:text-gray-300
                    group-hover:text-primary-orange"
                        target="_blank"
                        title={`Botão ${item.name}`}
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-center relative flex-col text-lg max-w-sm  px-10"
          >
            <div className=" left-0 absolute desenho-efeito-about1 w-[100%] md:w-[110%] h-[120%]"></div>
            <div className=" absolute rotate-90 md:rotate-0 desenho-efeito-about1 opacity-10 w-[130%] h-[140%] -top-10"></div>

            <div className="flex rounded-[20rem]  relative z-20 justify-center items-end ">
             
             <Image
             className="rounded-[10rem] "
                src={ImageABout}
                alt="Flavio Gabriel foto do inicio da pagina"
                priority
              />

              <div className="absolute left-0 top-0 flex justify-center items-center rounded-full text-2xl   bg-[#65d3f3] bg-opacity-80 border-2 border-cyan-500 animete-ball backdrop-blur-xl">
                <SiReact className="inline" />
              </div>

              <div className="absolute right-0 bottom-20 flex justify-center items-center rounded-full  bg-primary-blue bg-opacity-80 shadow-2xl border-2 border-secondy-blue animete-ball2 backdrop-blur-xl text-2xl">
                <SiTypescript className="inline" />
              </div>

              <div className="absolute left-0 bottom-0 flex justify-center items-center rounded-full  bg-gray-500 bg-opacity-80 shadow-2xl border-2 border-gray-600 animete-ball3 backdrop-blur-xl text-2xl">
                <SiNextdotjs className="inline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
