import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 border ${
        theme === "dark"
          ? "bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700"
          : "bg-slate-50 border-slate-200 text-indigo-600 hover:bg-indigo-50"
      } ${className}`}
    >
      <Sun
        className={`w-5 h-5 absolute transition-all duration-150 ${
          theme === "dark"
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`w-5 h-5 absolute transition-all duration-150 ${
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
