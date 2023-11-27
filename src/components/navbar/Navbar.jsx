import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getFormattedTime());
    };
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-5 bg-gradient-to-bl from-white via-slate-50 to-green-700 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700">
        <div className="flex items-center flex-shrink-0 text-red-950 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <Link to="/home" className="font-semibold text-xl tracking-tight">
            Gym Entrena Salud
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-red-950 border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow ml-4 lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow font-bold">
            <Link to="/login" className="focus:underline hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-950   mr-4">
              Login
            </Link>
            <Link to="/register" className="focus:underline hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-950 d  mr-4">
              Register
            </Link>
            <Link to="/contacto" className="focus:underline hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-950  ">
              Contact
            </Link>
          </div>
          <label className="mr-2 relative block aspect-[2/0.75] cursor-pointer w-20 rounded-full  bg-gradient-to-r from-purple-700 to-green-700 bg-[length:100%_100%] shadow-2xl shadow-purple-300 transition-all duration-500 [&amp;:has(input:checked)]:rotate-180  hover:bg-[length:100%_500%] focus:bg-[length:100%_500%]">
            <input
              onClick={handleChangeTheme}
              type="checkbox"
              className="peer/input hidden "
            />
            <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
          </label>
          <div>
            <span className="inline-block text-sm px-4 py-2 leading-none border rounded dark:text-white dark:border-white text-black border-black shadow-lg shadow-green-700 dark:shadow-purple-700 hover:text-red-950  mt-4 lg:mt-0">
              {currentTime}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
