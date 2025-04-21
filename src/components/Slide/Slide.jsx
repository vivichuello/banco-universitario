import React from 'react'
import './Slide.css'

function Slide({ imagen, alt, titulo, texto }) {
    return (
        <article className="slide-contenedor" id="tarjeta-1">
            <img src={imagen} alt={alt} />
            <div className="slide-texto">
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        </article>
    )
}

export default Slide