import { Navbar } from "../navbar/Navbar";
import Carrousel from "./../carrousel/Carrousel";
import { Footer } from "../footer/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <div className="font-mono ">
        <div className="container mx-auto ">
          <div className="flex justify-center px-6">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex ">
              <div
                className="object-cover w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-[url('/img/card/gym3.jpg')]"
                style={{ backgroundColor: "red" }}
              ></div>

              <div className="w-full  lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Contactanos!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="username"
                    >
                      Nombre
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="nombre"
                      type="text"
                      placeholder="Ingrese aqui su nombre"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="username"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Ingrese aqui su Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="Ingrese su mensaje aquí"
                      style={{ height: "120px" }} // Establecer una altura fija, por ejemplo, 120px
                    />
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Enviar
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
