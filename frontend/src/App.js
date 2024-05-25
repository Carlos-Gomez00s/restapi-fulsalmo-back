import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPeliculas from './components/CardPeliculas';
import './App.css';
import EditarPeliculaForm from './components/EditarPelicula';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [editPelicula, setEditPelicula] = useState(null);

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const fetchPeliculas = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/peliculas');
      setPeliculas(response.data);
    } catch (error) {
      console.error('Hubo un error al obtener las películas:', error);
    }
  };

  const deletePelicula = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/peliculas/${id}`);
      fetchPeliculas();
    } catch (error) {
      console.error('Hubo un error al eliminar la película:', error);
    }
  };

  const handleEdit = (pelicula) => {
    setEditPelicula(pelicula);
  };

  const saveEdit = async (pelicula) => {
    try {
      await axios.put(`http://localhost:4000/api/peliculas/${pelicula.id}`, pelicula);
      fetchPeliculas();
      setEditPelicula(null);
    } catch (error) {
      console.error('Hubo un error al editar la película:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Películas</h1>
      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <CardPeliculas key={pelicula.id} pelicula={pelicula} onDelete={deletePelicula} onEdit={handleEdit} />
        ))}
      </div>
      {editPelicula && (
        <EditarPeliculaForm pelicula={editPelicula} onSave={saveEdit} onCancel={() => setEditPelicula(null)} />
      )}
    </div>
  );
}

export default App;
