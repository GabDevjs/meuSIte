import Spline from "@splinetool/react-spline";
import { Console } from "console";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Background = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState("");

  useEffect(() => {
    setMounted(true);
    setThemeValue(theme ? theme : "");
    console.log(themeValue);
  }, [theme]);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <>
      {themeValue === "dark" && (
       <>
        <div
        data-aos="zoom-in"
        data-aos-duration="3000"
         className="absolute hidden md:block w-screen h-screen ">
          <Spline scene="https://prod.spline.design/Hs26iQ9lzbtmyHbb/scene.splinecode" />
        </div>
        <div
         className="absolute block md:hidden w-screen h-screen ">
          <Spline scene="https://prod.spline.design/Hs26iQ9lzbtmyHbb/scene.splinecode" />
        </div>
       </>
      )}

      {themeValue === "light" && (
        <>
        <div
        
        data-aos="zoom-in"
        data-aos-duration="800"
        className="absolute hidden md:block w-screen h-screen">
          <Spline scene="https://prod.spline.design/Vs8GpYE54xmRqALi/scene.splinecode"                      
          />
        </div>
        <div
        className="absolute block md:hidden w-screen h-screen">
          <Spline scene="https://prod.spline.design/Vs8GpYE54xmRqALi/scene.splinecode"                      
          />
        </div>
        </>
      )}
    </>
  );
};