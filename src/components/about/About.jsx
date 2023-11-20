/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "./../navbar/Navbar";
import { Footer } from './../footer/Footer';

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
          alt="Gym Entrena Salud"/>
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

      <div className="about-text-1">
        <h2>Nuestro equipo</h2>
        <p>
        "Juntos somos más fuertes. Conoce a nuestro equipo, tu apoyo personal
         en cada paso hacia tus metas de salud y bienestar."
        </p>
        <hr />
      </div>

      <div className="cards">
         <div className="card">
           <div className="profileImage">
   

           </div>
             <div className="textContainer">
               <p className="name">Tincho Adab</p>
               <p className="profile">Jefe Personal trainer</p>
             </div>
         </div>

         <div className="card">
           <div className="profileImage">
           <img src="/img/about/lonja.jpg" alt="" />

           </div>
             <div className="textContainer">
               <p className="name">Micaela Lonja</p>
               <p className="profile">Jefe Personal Trainer</p>
             </div>
         </div>

         <div className="card">
           <div className="profileImage">
              <img src="/img/about/anteojo.jpg" alt="" />

           </div>
             <div className="textContainer">
               <p className="name">Manteo Jito</p>
               <p className="profile">SEO y fundador</p>
             </div>
         </div>

         <div className="card">
           <div className="profileImage">
   

           </div>
             <div className="textContainer">
               <p className="name">Nocoma Tanto</p>
               <p className="profile">Nutricionista/Salud</p>
             </div>
         </div>
      </div>
      
    </div>




    </body>
      
 
      <Footer />
    </>
  );
};
