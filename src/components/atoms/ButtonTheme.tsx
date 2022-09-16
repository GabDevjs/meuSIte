import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { Button } from "./Button";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <Button
      className={`focus:outline-none p-2 bg-zinc-100 bg-opacity-10 rounded-full flex justify-center items-center`}
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun className="inline" size={24} /> : <BiMoon className="inline" size={24} />}
    </Button>
  );
}