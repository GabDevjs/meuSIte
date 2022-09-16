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
  

      </div>
    </header>
  );
};
