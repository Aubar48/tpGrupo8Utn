import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    // Función para avanzar automáticamente
    const autoAdvance = () => {
      const nextIndex = (currentIndex % 5) + 1;
      setCurrentIndex(nextIndex);
    };

    // Configuración del temporizador para avanzar automáticamente cada cierto tiempo (por ejemplo, cada 5 segundos)
    const intervalId = setInterval(autoAdvance, 5000);

    // Limpieza del temporizador al desmontar el componente
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    const prevIndex = currentIndex === 1 ? 4 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = currentIndex === 4 ? 1 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full p-2"
      data-carousel="static"
    >
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "" : "hidden"
            }`}
            data-carousel-item={index === currentIndex ? "active" : null}
          >
            <img
              src={`/img/carrousel/gym${index}.jpg`}
              className="absolute max-h-[500px] max-w-[2000px] object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Gym ${index}`}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
