import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";
import { useEffect, useState } from "react";

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
    <header className="bg-backGround h-screen z-10">
      <div className=" w-full h-full flex justify-center items-center ">
        <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
          <div className="relative px-4 sm:px-8  mb-10  md:px-10">
            <div className="hidden md:grid grid-cols-1 col  gap-x-4  sm:grid-cols-2 sm:gap-x-6 xl:gap-x-">
              <div className="flex w-full justify-center items-center">
                <div className="w-60 lg:w-96 xl:w-full text-center">
                  
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="flex w-72 lg:w-96 xl:w-full justify-center items-center">
                 
                </div>
              </div>
            </div>

            <div className="grid md:hidden grid-cols-1 col  gap-x-4  md:grid-cols-2 md:gap-x-6 xl:gap-x-">
              <div className="flex justify-center items-center w-full">
                <div className="flex w-80 lg:w-96 xl:w-full justify-center items-center">
           
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <div className="w-72 lg:w-96 xl:w-full text-center">
                  <h1 className="text-xl  sm:text-2xl  font-bold text-white leading-snug">
                    Uma solução simples e moderna para seus{" "}
                    <span className="text-[#05eacc]">Enriquecimentos</span> e
                    suas <span className="text-[#0df9a1]">Consultas</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute  w-full left-0 mt-20 ${arrow} flex justify-center items-center transition-all `}
          >
            <div className="">
              <UseAnimations
                animation={arrowDown}
                size={56}
                style={{ padding: 100 }}
                strokeColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
