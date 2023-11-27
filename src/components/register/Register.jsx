import { Navbar } from "./../navbar/Navbar";
import Carrousel from "./../carrousel/Carrousel";
import { Footer } from "./../footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import ReproductorAudio from './../reproductoAudio/ReproductorAudio';
const validacionDatos = (nombre, email, password, password2) => {
  if (nombre === "") return "Por favor, ingrese su nombre";
  if (email === "") return "Por favor, ingrese su email";
  if (password === "") return "Por favor, ingrese su password";
  if (password2 === "") return "Por favor, repita su password";
  return null;
};
function Register() {
  // Uso del useState para los valores de los inputs
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");

  const [setErrorEnviar] = useState(false);

  // Mensaje de error en caso de no completar los datos
  const errorMensaje = validacionDatos(Nombre, Email, Password, Password2);
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
        },
      });
      Toast.fire({
        icon: "success",
        title: "Usuario Registrado",
      });
      setNombre("");
      setEmail("");
      setPassword("");
      setPassword2("");
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
              <div className="m-5  w-full xl:w-3/4 lg:w-11/12 flex rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700 ">
                <iframe
                  width="1250"
                  height="703"
                  src="https://www.youtube.com/embed/MzXI4GDrvww"
                  title="CORE CARDIO | FIT CAMP - SIN EXCUSAS"
                  className="object-cover w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div className="w-full  lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">
                    Welcome Our Gym!
                  </h3>
                  <form
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                    onSubmit={manejarEnvio}
                  >
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Username"
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
                        type="text"
                        placeholder="Email"
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
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        onChange={(evento) => setPassword(evento.target.value)}
                        value={Password}
                        autoComplete="off"
                        name="password"
                      />
                      <p className="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Repeat Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password2"
                        type="password"
                        placeholder="******************"
                        onChange={(evento) => setPassword2(evento.target.value)}
                        value={Password2}
                        autoComplete="off"
                        name="password2"
                      />
                      <p className="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div className="mb-4">
                      <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        id="checkbox_id"
                      />
                      <label className="text-sm" htmlFor="checkbox_id">
                        Remember Me
                      </label>
                    </div>
                    <div className="mb-6 text-center">
                      <p className="font-semibold">{errorMensaje}</p>
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-green-700 dark:bg-purple-700 rounded-full  focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={!!errorMensaje}
                      >
                        Sign Up
                      </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                      <Link
                        className="inline-block text-sm font-semibold text-green-700 dark:text-purple-700 align-baseline "
                        to="/login"
                      >
                        Sign In
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link
                        className="inline-block text-sm text-green-700 dark:text-purple-700 align-baseline "
                        to="#"
                      >
                        Forgot Password?
                      </Link>
                    </div>
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

export default Register;
