/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "./../navbar/Navbar";
import { Footer } from "./../footer/Footer";

export const About = () => {
  return (
    <>
      <div
        className="font-roboto bg-gradient-to-bl from-white via-slate-50 to-green-600
      dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700"
      >
        <Navbar />
        <div className="about-baner">
          <div className="about-baner-text">
            <h1>Sobre Nosotros</h1>
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
              En Gym Entrena Salud, nos dedicamos a brindar un ambiente acogedor
              y motivador para ayudarte a alcanzar tus objetivos de salud y
              bienestar. Nuestro equipo de entrenadores altamente calificados
              está aquí para guiarte en cada paso de tu viaje fitness.
            </p>
            <hr />
          </div>

          <div
            className="about-image "
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="50"
            data-aos-duration="1000"
          >
            <img
              className="hover:scale-105 transform-gpu duration-700"
              src="/img/about/gym-about.jpg"
              alt="Gym Entrena Salud"
            />
          </div>

          <div className="about-text">
            <h2>Nuestra Misión</h2>
            <p>
              En Gym Entrena Salud, creemos en la importancia de la salud
              integral. Nuestra misión es proporcionar a nuestros miembros no
              solo un lugar para hacer ejercicio, sino también una comunidad
              donde puedan aprender, crecer y alcanzar su máximo potencial.
            </p>
          </div>

          <div className="about-text-1">
            <h2>Nuestro equipo</h2>
            <p>
              "Juntos somos más fuertes. Conoce a nuestro equipo, tu apoyo
              personal en cada paso hacia tus metas de salud y bienestar."
            </p>
            <hr />
          </div>

          <div
            className="cards"
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="50"
            data-aos-duration="1000"
          >
            <div className="card">
              <div className="profileImage">
                <img
                  className="hover:scale-105 transform-gpu duration-700"
                  src="/img/about/perso.jpg"
                  alt=""
                />
              </div>
              <div className="textContainer">
                <p className="name">Gustafa Chero</p>
                <p className="profile">Jefe Personal trainer</p>
              </div>
            </div>

            <div className="card">
              <div className="profileImage">
                <img
                  className="hover:scale-105 transform-gpu duration-700"
                  src="/img/about/lonja.jpg"
                  alt=""
                />
              </div>
              <div className="textContainer">
                <p className="name">Micaela Lonja</p>
                <p className="profile">Jefe Personal Trainer</p>
              </div>
            </div>

            <div className="card">
              <div className="profileImage">
                <img
                  className="hover:scale-105 transform-gpu duration-700"
                  src="/img/about/anteojo.jpg"
                  alt=""
                />
              </div>
              <div className="textContainer">
                <p className="name">Manteo Jito</p>
                <p className="profile">SEO y fundador</p>
              </div>
            </div>

            <div className="card">
              <div className="profileImage">
                <img
                  className="hover:scale-105 transform-gpu duration-700"
                  src="/img/about/nocoma.jpg"
                  alt=""
                />
              </div>
              <div className="textContainer">
                <p className="name">Nocoma Tanto</p>
                <p className="profile">Nutricionista/Salud</p>
              </div>
            </div>
          </div>

          <div className="about-text-1">
            <h2>Sumate</h2>
            <p>
              Estamos entusiasmados en recibirte en nuestro equipo, desde
              nuestro SEO hasta el mas nuevo de nuestros fitn formamos parte de
              esta gran familia de Gym Entrena Salud. Te estamos esperando¡
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
