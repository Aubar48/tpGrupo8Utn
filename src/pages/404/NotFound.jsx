import Carrousel from "../../components/carrousel/Carrousel";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "./../../components/navbar/Navbar";
function NotFound() {
  return (
    <>
      <div
        className="font-roboto bg-gradient-to-bl from-white via-slate-50 to-green-600
    dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700"
      >
        <Navbar />
        <Carrousel />
        <div className="p-5 w-full px-16 md:px-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700">
            <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
              404
            </p>
            <p className="text-2xl md:text-3xl h-24 lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
              Page Not Found
            </p>
            <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
              Sorry, the page you are looking for could not be found.
            </p>
            <a
              href="/home"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
              title="Return Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Return Home</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
