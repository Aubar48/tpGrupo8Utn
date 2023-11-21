import { Link } from "react-router-dom";
export const Footer = () => {
  // Obtener la fecha actual
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.getDate();

  return (
    <>
      <footer className="shadow bg-white mt-1">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-red-950 dark:text-red-950 sm:text-center ">
            ©{day} {month} {year}{" "}
            <Link
              to="https://www.instagram.com/entrenasaludybienestar/?hl=es-la"
              className="hover:underline text-red-950 dark:text-red-950"
            >
              Gym Entrena Salud™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/PoliciesPrivacy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
