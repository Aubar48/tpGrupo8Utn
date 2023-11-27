import { Navbar } from "../navbar/Navbar";
import Carrousel from "./../carrousel/Carrousel";
import { Footer } from "../footer/Footer";
import { useState } from "react";
import Swal from 'sweetalert2';
import ReproductorAudio from './../reproductoAudio/ReproductorAudio';
const validacionDatos = (nombre, email, mensaje) => {
  if (nombre === "") return "Por favor, ingrese su nombre";
  if (email === "") return "Por favor, ingrese su email";
  if (mensaje === "") return "Por favor, ingrese su mensaje";
  return null;
};

export default function Contact() {
  // Uso del useState para los valores de los inputs
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Mensaje, setMensaje] = useState("");
  const [setErrorEnviar] = useState(false);

  // Mensaje de error en caso de no completar los datos
  const errorMensaje = validacionDatos(Nombre, Email, Mensaje);
  // Función para manejar el envio del formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (!errorMensaje) {
      //Si el formulario esta completo surge se habilita el boton enviar y surge un alert, reset del form
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Mensaje Enviado"
      });
      setNombre("");
      setEmail("");
      setMensaje("");
      setErrorEnviar(false);
    } else {
      //Sino se desabilita el boton enviar
      setErrorEnviar(true);
    }
  };

  return (
    <>
      <div
        className="font-roboto bg-gradient-to-bl from-white via-slate-50 to-green-600
      dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700"
      >
        <Navbar />
        <Carrousel />

        <div
          className="font-mono "
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="50"
          data-aos-duration="1000"
        >
          <div className="container mx-auto ">
            <div className="flex justify-center px-6">
              <div className="m-5 w-full xl:w-3/4 lg:w-11/12 flex rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700 ">
                <div
                  className="object-cover w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-[url('/img/card/gym1.jpg')]"
                 
                ></div>

                <div className="w-full  lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">Contactanos!</h3>
                  <form
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded "
                    onSubmit={manejarEnvio}
                  >
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
                        name="nombre"
                        onChange={(evento) => setNombre(evento.target.value)}
                        value={Nombre}
                        autoComplete="off"
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
                        onChange={(evento) => setEmail(evento.target.value)}
                        value={Email}
                        autoComplete="off"
                        name="email"
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
                        id="mensaje"
                        placeholder="Ingrese su mensaje aquí"
                        style={{ height: "120px" }} // Establecer una altura fija, por ejemplo, 120px
                        name="mensaje"
                        onChange={(evento) => setMensaje(evento.target.value)}
                        value={Mensaje}
                        autoComplete="off"
                      />
                    </div>

                    <div className="mb-6 text-center">
                      <p className="font-semibold ">{errorMensaje}</p>
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-green-700 dark:bg-purple-700 rounded-full  focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={!!errorMensaje}
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
      </div>
      <ReproductorAudio/>
      <Footer />
    </>
  );
}
