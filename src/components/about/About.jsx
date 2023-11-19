import { Navbar } from "./../navbar/Navbar";
import { Footer } from './../footer/Footer';

import '../../../public/css/about/about.css'

export const About = () => {
  return (
    <>
      <Navbar />
    <body>
    <div className="about-baner">
        <div className="about-baner-text">
          <h1>
          Sobre Nosotros
        </h1>
        <p>

               "fusionamos el fitness con el bienestar. <br /> 
               Descubre una vida más fuerte y saludable en cada entrenamiento."
        </p>
        </div>
        
      </div>

      <div className="about-main">
      <div className="about-text-1">
        <h2>Bienvenido a Gym Entrena Salud</h2>
        <p>
          En Gym Entrena Salud, nos dedicamos a brindar un ambiente acogedor y
          motivador para ayudarte a alcanzar tus objetivos de salud y bienestar.
          Nuestro equipo de entrenadores altamente calificados está aquí para
          guiarte en cada paso de tu viaje fitness.
        </p>
        <hr />
      </div>
      

      <div className="about-image">
        <img
          src="/img/about/gym-about.jpg"
          alt="Gym Entrena Salud"
          
        />
      </div>

      <div className="about-text">
        <h2>Nuestra Misión</h2>
        <p>
          En Gym Entrena Salud, creemos en la importancia de la salud integral.
          Nuestra misión es proporcionar a nuestros miembros no solo un lugar
          para hacer ejercicio, sino también una comunidad donde puedan
          aprender, crecer y alcanzar su máximo potencial.
        </p>
      </div>
    </div>


    </body>
      
 
      <Footer />
    </>
  );
};
