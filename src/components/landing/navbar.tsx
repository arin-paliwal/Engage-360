import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between px-12 py-6 ">
      <div className="flex items-center">
        <h1 className="text-2xl">Engage360</h1>
      </div>
      <div className="hidden md:flex gap-8">
        {/* <a href="#" className="text-gray-600 hover:text-gray-900">
          Solutions
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Features
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Resources
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Company
        </a> */}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 border-2 border-borders-primary dark:border-borders-secondary rounded-full hover:bg-lightMode-secondaryBackground hover:dark:bg-darkMode-secondaryBackground"
        >
          {theme === "dark" ? (
            <Sun className="" size={18} />
          ) : (
            <Moon className="" size={18} />
          )}
        </button>
        <button className="bg-lightMode-accentBlue px-4 py-2 text-white rounded-md text-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
}
