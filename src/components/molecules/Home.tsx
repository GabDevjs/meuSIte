import { useEffect, useState } from "react";
import Typed from "react-typed";
import Image from "next/image";
import ImageABout from "../../assets/perfil.png";
import {IoLogoJavascript } from 'react-icons/io'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si";

export const Home = () => {
  const [arrow, setArrow] = useState("opacity-100");
  const listenScrollEvent = () => {
    window.scrollY > 300 ? setArrow("opacity-0") : setArrow("opacity-100");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="bg-backGround bg-opacity-25 backdrop-blur-xl h-screen z-10">
      <div className=" w-full h-full flex justify-center items-center ">
        <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
          <div className="relative px-4 sm:px-8  mb-10  md:px-10">
            <div className="grid grid-cols-1 col  gap-x-4  sm:grid-cols-2 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8  space-y-16 ">
              <div className="flex w-full justify-center items-center">
                <div className=" w-full text-center">
                  <div className="text-2xl lg:text-5xl text-gray-50 text-center  font-semibold leading-snug  ">
                    <p>Olá, meu nome é</p>
                    <h1 className=" text-4xl lg:text-6xl">
                      <span className="text-primary-orange">
                        Flavio Gabriel
                      </span>
                      ,
                    </h1>
                    <p>
                      <Typed
                        strings={[
                          "Front-end Developer",
                          "Back-end Developer",
                          "Web Developer",
                          "Full-stack Developer",
                          "Web Designer",
                        ]}
                        typeSpeed={80}
                        backSpeed={90}
                        loop
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div
                  data-aos="zoom-in"
              data-aos-duration="1100"
                              className="flex justify-center flex-col  items-cente text-lg max-w-lg px-10 "
              >
                <div className="flex relative z-20  rounded-full ring-2 border-4 border-transparent ring-primary-orange text-gray-50 justify-center items-center ">
                  <Image
                    src={ImageABout}
                    className="w-full rounded-full object-cover "
                    priority
                  />
                   <div className="absolute left-0 top-0 flex justify-center items-center rounded-full   bg-primary-green bg-opacity-80 border-2 border-secondy-green animete-ball backdrop-blur-xl">
                   <SiNodedotjs className="inline"/>
                  </div>

                  <div className="absolute right-0 bottom-20 flex justify-center items-center rounded-full  bg-primary-blue bg-opacity-80 shadow-2xl border-2 border-secondy-blue animete-ball2 backdrop-blur-xl">
                    <SiTypescript className="inline" />
                  </div>

                  <div className="absolute left-0 bottom-0 flex justify-center items-center rounded-full  bg-gray-500 bg-opacity-80 shadow-2xl border-2 border-gray-600 animete-ball3 backdrop-blur-xl">
                    <SiNextdotjs className="inline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
