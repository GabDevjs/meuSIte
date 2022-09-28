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
  }, []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <>
      {theme === "dark" && (
        <div
          className="absolute w-screen h-screen hidden dark:block"
        >
          <Spline scene="https://prod.spline.design/Hs26iQ9lzbtmyHbb/scene.splinecode" />
        </div>
      )}

      {theme === "light" && (
        <div
          className="absolute w-screen h-screen block dark:hidden"
        >
          <Spline
          
           scene="https://prod.spline.design/Vs8GpYE54xmRqALi/scene.splinecode" />
        </div>
      )}
    </>
  );
};
