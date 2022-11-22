import Spline from "@splinetool/react-spline";
import { useTheme } from "next-themes";
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../services/context";

interface BackGroundProps {
  backLight: any;
  backDark: any;
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
      return "dark";
    }
  }

  const cube = useRef();

  function onLoad(spline: { findObjectByName: (arg0: string) => any; }) {
    const obj = spline.findObjectByName('Cube');
    cube.current = obj;
  }

  return (
    <>
      {themeValue == "dark" && (
        <div className="absolute block w-screen h-screen ">
          <Spline  onLoad={onLoad} scene={backDark} />
        </div>
      )}

      {themeValue == "light" && (
        <div className="absolute block w-screen h-screen">
          <Spline  onLoad={onLoad} scene={backLight} />
        </div>
      )}
    </>
  );
};
