const Card = () => {
  // Array de objetos con información para cada tarjeta
  const cardData = [
    {
      title: "Entrena En Equipo",
      description:
        "En nuestro gimnasio, creemos en el poder del trabajo en equipo. Cada levantamiento, cada sudor y cada esfuerzo se suma a un objetivo compartido: alcanzar nuestras metas juntos.",
      tags: ["#photography", "#party", "#winter"],
      imageIndex: 0,
    },
    {
      title: "Unete A Un Equipo",
      description:
        "En este espacio, no solo esculpimos nuestros cuerpos, sino que también fortalecemos nuestros lazos y construimos una comunidad que se apoya mutuamente.",
      tags: ["#photography", "#nakama", "#winter"],
      imageIndex: 1,
    },
    {
      title: "En Equipo Es Mas",
      description:
        "Cuando entrenamos en equipo, superamos límites que nunca podríamos alcanzar solos. Nos motivamos, nos desafiamos y celebramos cada logro, grande o pequeño, como una victoria colectiva. En este gimnasio, somos más que individuos; somos un equipo que se impulsa hacia el éxito.",
      tags: ["#photography", "#compañero", "#winter"],
      imageIndex: 2,
    },
    {
      title: "La Union Es La Fuerza",
      description:
        "Así que, levántate, inspira a tu compañero de entrenamiento y juntos conquistemos cada repetición. En este viaje de transformación física y mental, descubrimos que la fuerza del equipo es la clave para alcanzar alturas que nunca imaginamos. ¡Vamos, equipo, a por ello! Espero que este mensaje motive y inspire a todos en tu gimnasio. ¡A entrenar en equipo y alcanzar esas metas juntos! 💪🏋️‍♂️🏋️‍♀️.",
      tags: ["#photography", "#amistad", "#winter"],
      imageIndex: 3,
    },
  ];

  return (
    <div
      className="flex flex-wrap justify-center"
      
    >
      {cardData.map((data, index) => (
        <div
          key={index}
          className="m-5 ml-2 max-w-sm  rounded-lg overflow-hidden shadow-lg md:w-1/2 shadow-red-600"
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="50"
          data-aos-duration="1000"
          
        >
          <img
            className="w-full object-cover hover:scale-105 transform-gpu duration-700"
            src={`/img/card/gym${data.imageIndex}.jpg`}
            alt="Gym"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-1">{data.title}</div>
            <p className="text-gray-700 text-base line-clamp-4">
              {data.description}
            </p>
          </div>
          <div className="px-6 mt-4 flex flex-wrap justify-between">
            {data.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag me-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
