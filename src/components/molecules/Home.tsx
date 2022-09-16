import { useEffect, useState } from "react";
import Typed from "react-typed";
import UseAnimations from "react-useanimations";
import UseAnimation from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

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
    <header className="bg-backGround bg-opacity-50 backdrop-blur-md h-screen z-10">
      <div className=" w-full h-full flex justify-center items-center ">
        <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
          <div className="relative px-4 sm:px-8  mb-10  md:px-10">
            <div className="hidden md:grid grid-cols-1 col  gap-x-4  sm:grid-cols-2 sm:gap-x-6 xl:gap-x-">
              <div className="flex w-full justify-center items-center">
                <div className=" w-full text-center">
                  <div className="text-5xl text-gray-50 text-center  font-semibold leading-snug lin text ">
                    <p>Olá, meu nome é</p>
                    <h1 className=" text-6xl">
                      <span className="text-primary-orange">Flavio Gabriel</span>,
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
              <div className="flex justify-center items-center w-full">
                <div className="flex w-72 lg:w-96 xl:w-full justify-center items-center">
                  item 3d
                </div>
              </div>
            </div>

            <div className="grid md:hidden grid-cols-1 col  gap-x-4  md:grid-cols-2 md:gap-x-6 xl:gap-x-">
              <div className="flex justify-center items-center w-full">
                <div className="flex w-80 lg:w-96 xl:w-full justify-center items-center">
                  items 3d
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <div className="w-72 lg:w-96 xl:w-full text-center">
                <div className="text-5xl text-gray-50 text-center  font-semibold leading-snug lin text ">
                    <p>Olá, meu nome é</p>
                    <h1 className=" text-6xl">
                      <span className="text-primary-orange">Flavio Gabriel</span>,
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
