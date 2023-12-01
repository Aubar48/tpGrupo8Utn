import { Link } from "react-router-dom";
export const Footer = () => {
  // Obtener la fecha actual
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.getDate();

  return (
    <>
      <footer
        className="shadow p-5 
        bg-gradient-to-bl from-white via-slate-50 to-green-600
        dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700 "
      >
        <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
          <span className="text-sm text-red-950 sm:text-center ">
            ©{day} {month} {year}{" "}
            <Link
              target="_blank"
              to="https://github.com/Aubar48/tpGrupo8Utn"
              className="hover:underline text-red-950 font-semibold "
            >
              Gym Entrena Salud™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-bold text-red-950 sm:mt-0">
            <li>
              <Link
                to="/about"
                className="focus:underline hover:underline me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/PoliciesPrivacy"
                className="focus:underline hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/lista"
                className="focus:underline hover:underline me-4 md:me-6"
              >
                Lista Gym
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
