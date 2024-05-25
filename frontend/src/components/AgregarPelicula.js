// src/components/AddMovieForm.js
import React, { useState } from 'react';

const AgregarPelicula = ({ onAdd }) => {
  const [titulo, setTitulo] = useState('');
  const [protagonista, setProtagonista] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [urlPelicula, setUrlPelicula] = useState('');
  const [urlImagen, setUrlImagen] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ titulo, protagonista, caracteristicas, urlPelicula, urlImagen, categoria });
    setTitulo('');
    setProtagonista('');
    setCaracteristicas('');
    setUrlPelicula('');
    setUrlImagen('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Película</h2>
      <div>
        <label>Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      </div>
      <div>
        <label>Protagonista</label>
        <input type="text" value={protagonista} onChange={(e) => setProtagonista(e.target.value)} required />
      </div>
      <div>
        <label>Características</label>
        <input type="text" value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} required />
      </div>
      <div>
        <label>URL de la Película</label>
        <input type="url" value={urlPelicula} onChange={(e) => setUrlPelicula(e.target.value)} required />
      </div>
      <div>
        <label>URL de la Imagen</label>
        <input type="url" value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} required />
      </div>
      <div>
        <label>Categoría</label>
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AgregarPelicula;
