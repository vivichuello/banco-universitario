import React, { useState, useEffect } from 'react';
import Slide from '../Slide/Slide';
import slidedatos from './slidedatos';
import './Slider.css';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice del slide actual
  const totalSlides = slidedatos.length;

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Desplazamiento automático
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="slider-contenedor">
      <div className="slider">
        {slidedatos.map((s, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'flex' : 'none' }}
          >
            <Slide imagen={s.imagen} alt={s.alt} titulo={s.titulo} texto={s.texto} />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button className="slider-btn atras" onClick={prevSlide}>
        &#8249; {/* Flecha izquierda */}
      </button>
      <button className="slider-btn siguiente" onClick={nextSlide}>
        &#8250; {/* Flecha derecha */}
      </button>

      <div class="slider-nav">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  );
}

export default Slider; 