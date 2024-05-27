import React, { useState } from 'react';

const EditarPeliculaForm = ({ pelicula, onSave, onCancel }) => {
  const [titulo, setTitulo] = useState(pelicula.titulo);
  const [protagonista, setProtagonista] = useState(pelicula.protagonista);
  const [caracteristicas, setCaracteristicas] = useState(pelicula.caracteristicas);
  const [urlPelicula, setUrlPelicula] = useState(pelicula.urlPelicula);
  const [urlImagen, setUrlImagen] = useState(pelicula.urlImagen);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...pelicula, titulo, protagonista, caracteristicas, urlPelicula });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Película</h2>
      <div>
        <label>Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Protagonista</label>
        <input type="text" value={protagonista} onChange={(e) => setProtagonista(e.target.value)} />
      </div>
      <div>
        <label>Características</label>
        <input type="text" value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
      </div>
      <div>
        <label>URL de la Película</label>
        <input type="text" value={urlPelicula} onChange={(e) => setUrlPelicula(e.target.value)} />
      </div>
      <div>
        <label>URL de la Imagen</label>
        <input type="text" value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} />
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditarPeliculaForm;
