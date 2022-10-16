import Spline from "@splinetool/react-spline";
import { Console } from "console";
import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../services/context";

interface BackGroundProps {
  backLight: any
  backDark: any
}

export const Background = (props: BackGroundProps) => {
  const { backLight, backDark } = props;
  const { theme, setTheme } = useTheme();
  const context = useContext(AppContext);
  const [themeValue, setThemeValue] = useState(handleSetBgTheme(context.hora));

  useEffect(() => {
    setThemeValue(theme ? theme : "");
  }, [theme]);

  function handleSetBgTheme(horaValue: Number) {
    if (horaValue >= 6 && horaValue < 12) {
      return "light";
    } else if (horaValue >= 12 && horaValue < 18) {
      return "light";
    } else if (horaValue >= 18 && horaValue <= 23) {
      return "dark";
    } else if (horaValue >= 0 && horaValue < 6) {
      return "dark";
    } else {
      return "";
    }
  }

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
            className="absolute hidden md:block w-screen h-screen "
          >
            <Spline scene={backDark} />
          </div>
          <div className="absolute block md:hidden w-screen h-screen ">
            <Spline scene={backDark} />
          </div>
        </>
      )}

      {themeValue === "light" && (
        <>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="absolute hidden md:block w-screen h-screen"
          >
            <Spline scene={backLight} />
          </div>
          <div className="absolute block md:hidden w-screen h-screen">
            <Spline scene={backLight} />
          </div>
        </>
      )}
    </>
  );
};
