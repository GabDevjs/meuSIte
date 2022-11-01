import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className={` text-lg p-1.5 border border-zinc-200 border-opacity-10 bg-zinc-100 bg-opacity-10 rounded-full flex justify-center items-center hover:scale-110 transition-all duration-200`}
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun className="inline "  /> : <BiMoon className="inline" />}
    </button>
  );
}