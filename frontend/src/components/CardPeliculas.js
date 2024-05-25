import React from 'react';

const CardPeliculas = ({ pelicula, onDelete, onEdit }) => {
    return (
      <div className="card">
        <img src={pelicula.urlImagen} alt={pelicula.titulo} className="card-img" />
        <h2>{pelicula.titulo}</h2>
        <h3>{pelicula.protagonista}</h3>
        <p>{pelicula.caracteristicas}</p>
        <a href={pelicula.urlPelicula} target="_blank" rel="noopener noreferrer">Ver más</a>
        <button onClick={() => onEdit(pelicula)}>Editar</button>
        <button onClick={() => onDelete(pelicula.id)}>Eliminar</button>
      </div>
    );
  }

export default CardPeliculas;
