/* eslint-disable react/no-unknown-property */
import React from 'react';

class ReproductorAudio extends React.Component {
  componentDidMount() {
    // Verificar si ya se ha reproducido el audio
    const audioAlreadyPlayed = localStorage.getItem('audioPlayed');

    if (!audioAlreadyPlayed) {
      // Obtener la referencia al elemento de audio
      const audioElement = this.audioRef;

      // Reproducir el audio
      audioElement.play().catch(error => {
        console.error('Error al reproducir audio:', error);
      });

      // Marcar que el audio ha sido reproducido
      localStorage.setItem('audioPlayed', 'true');
    }
  }

  render() {
    return (
      <div>
       
        <audio ref={ref => (this.audioRef = ref)} autoPlay>
          <source src="/mp3/sound.mp3" type="audio/mp3" />
 
        </audio>
      </div>
    );
  }
}

export default ReproductorAudio;
