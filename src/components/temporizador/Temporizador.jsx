/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const Temporizador = ({ tiempoInicial, onFinish }) => {
  const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);
  const [tiempoInput, setTiempoInput] = useState(tiempoInicial);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let temporizador;

    if (corriendo && tiempoRestante > 0) {
      temporizador = setInterval(() => {
        setTiempoRestante((prevTiempo) => prevTiempo - 1);
      }, 1000);
    }

    return () => {
      clearInterval(temporizador);
      if (tiempoRestante === 0 && onFinish) {
        onFinish();
      }
    };
  }, [corriendo, tiempoRestante, onFinish]);

  const handleStart = () => {
    setCorriendo(true);
  };

  const handlePause = () => {
    setCorriendo(false);
  };

  const handleReset = () => {
    setCorriendo(false);
    setTiempoRestante(tiempoInput);
  };

  const handleInputChange = (e) => {
    setTiempoInput(parseInt(e.target.value, 10) || 0);
  };

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Temporizador</h2>
      {Number.isFinite(minutos) && Number.isFinite(segundos) && (
        <p className="text-lg mb-4">
          Tiempo restante: {minutos}:{segundos < 10 ? `0${segundos}` : segundos}
        </p>
      )}
      <input
        type="number"
        value={tiempoInput}
        onChange={handleInputChange}
        disabled={corriendo}
        className="p-2 border border-gray-300 mb-4 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
      />
      <div className="space-x-4 mb-2.5">
        <button
          onClick={handleStart}
          disabled={corriendo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
        >
          Iniciar
        </button>
        <button
          onClick={handlePause}
          disabled={!corriendo}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
        >
          Pausar
        </button>
        <button
          onClick={handleReset}
          disabled={corriendo}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Temporizador;
