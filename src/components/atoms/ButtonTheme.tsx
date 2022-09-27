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
    <button
      className={` text-2xl p-1.5 border text-zinc-900 dark:text-zinc-300 border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full flex justify-center items-center hover:scale-110 transition-all duration-200`}
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun className="inline "  /> : <BiMoon className="inline" />}
    </button>
  );
}