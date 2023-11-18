import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  // Función para obtener la hora actual en formato HH:MM:SS
  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    // Función para actualizar la hora cada segundo
    const updateCurrentTime = () => {
      setCurrentTime(getFormattedTime());
    };

    // Configuración del temporizador para actualizar la hora cada segundo
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Limpieza del temporizador al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-3">
        <div className="flex items-center flex-shrink-0 text-red-950 dark:text-red-950mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <Link to="/home" className="font-semibold text-xl tracking-tight">Gym Entrena Salud</Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-red-950 border-white ">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow ml-4 lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-red-950 dark:text-red-950 hover:text-zinc-950 mr-4">
              Login
            </Link>
            <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-red-950 dark:text-red-950 hover:text-zinc-950 mr-4">
              Register
            </Link>
            <Link to="/contacto" className="block mt-4 lg:inline-block lg:mt-0 text-red-950 dark:text-red-950 hover:text-zinc-950">
              Contact
            </Link>
          </div>
          <div>
            <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-white  border-white hover:border-transparent hover:text-red-950 hover:bg-white mt-4 lg:mt-0">
              {currentTime}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
