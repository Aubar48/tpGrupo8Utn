import { Navbar } from "./../navbar/Navbar";
import Carrousel from "./../carrousel/Carrousel";
import { Footer } from "/src/components/footer/Footer.jsx";
import AlCostado from "../aside/AlCostado.jsx";

function PoliciesPrivacy() {
  return (
    <>
      <div
        className="font-roboto bg-gradient-to-bl from-white via-slate-50 to-green-600
      dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700"
      >
        <Navbar />
        <Carrousel />

        <div className="flex flex-col md:flex-row lg:max-w-screen-xl lg:mx-auto p-">
          <div className="md:w-1/3 lg:w-1/4 md:mr-4 md:ml-4">
            <AlCostado />
          </div>
          <div className="md:w-2/3 lg:w-1/2 md:pl-4 md:pr-4">
            <div className="policies-privacy-container">
              <h1 className="policies-privacy-header">
                Políticas y Privacidad
              </h1>
              <div className="policies-privacy-content">
                <p>
                  Bienvenido/a a Gym Entrena Salud, donde tu privacidad es una
                  prioridad para nosotros. Al proporcionar tus datos personales
                  a través de nuestro formulario de registro, reconoces y
                  aceptas las siguientes políticas:
                </p>

                <h2>1- Recopilación de Información</h2>
                <p>
                  Recolectamos información como tu nombre, dirección de correo
                  electrónico y datos de contacto para crear y gestionar tu
                  cuenta en nuestro sitio web.
                </p>

                <h2>2- Uso de la Información</h2>
                <p>
                  Utilizamos tus datos para personalizar tu experiencia en Gym
                  Entrena Salud, brindarte información relevante y mejorar
                  nuestros servicios.
                </p>

                <h2>3- Seguridad de la Información</h2>
                <p>
                  Implementamos medidas de seguridad para proteger tus datos
                  contra accesos no autorizados y garantizar su
                  confidencialidad.
                </p>

                <h2>4- Cookies</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar la
                  funcionalidad del sitio web y entender cómo interactúas con
                  nuestra plataforma.
                </p>

                <h2>5- Compartir Información</h2>
                <p>
                  No compartiremos tus datos personales con terceros sin tu
                  consentimiento, a menos que sea necesario para cumplir con
                  obligaciones legales.
                </p>

                <h2>6- Derechos del Usuario</h2>
                <p>
                  Tienes el derecho de acceder, corregir o eliminar tus datos
                  personales. Puedes gestionar tus preferencias de privacidad
                  desde tu cuenta en nuestro sitio web.
                </p>

                <h2>7- Retención de Datos</h2>
                <p>
                  Conservamos tus datos solo durante el tiempo necesario para
                  los fines para los cuales fueron recopilados, a menos que la
                  ley requiera lo contrario.
                </p>
                <br />

                <p>
                  Al registrarte en Gym Entrena Salud, confías en nosotros tu
                  información. Estamos comprometidos a proteger tu privacidad y
                  proporcionarte una experiencia segura y satisfactoria. Para
                  obtener más detalles sobre nuestras políticas de privacidad,
                  no dudes en ponerte en contacto con nosotros.
                </p>

                <p className="policies-privacy-thanks">
                  ¡Gracias por formar parte de nuestra comunidad!
                </p>
                <p className="policies-privacy-gym-name">Gym Entrena Salud</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 lg:w-1/4 md:ml-4 md:mr-4">
            {/* Contenido para la tercera columna */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PoliciesPrivacy;
