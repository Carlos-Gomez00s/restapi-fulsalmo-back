const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Para parsear el body de las solicitudes

let peliculas = [
  {
    id: 1,
    titulo: "Batman: El Caballero de la Noche",
    protagonista: "Bruce Wayne / Batman",
    caracteristicas: "Un multimillonario que lucha contra el crimen...",
    urlPelicula: "https://www.filmaffinity.com/es/film867354.html"
  },
  {
    id: 2,
    titulo: "Inception",
    protagonista: "Dom Cobb",
    caracteristicas: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos...",
    urlPelicula: "https://www.filmaffinity.com/es/film123456.html"
  },
  {
    id: 3,
    titulo: "The Matrix",
    protagonista: "Neo",
    caracteristicas: "Un hacker que descubre que su realidad es una simulación creada por inteligencias artificiales...",
    urlPelicula: "https://www.filmaffinity.com/es/film234567.html"
  },
  {
    id: 4,
    titulo: "The Shawshank Redemption",
    protagonista: "Andy Dufresne",
    caracteristicas: "Un banquero acusado de asesinato encuentra esperanza y redención dentro de la prisión...",
    urlPelicula: "https://www.filmaffinity.com/es/film345678.html"
  },
  {
    id: 5,
    titulo: "Pulp Fiction",
    protagonista: "Vincent Vega",
    caracteristicas: "Varias historias de crimen se entrelazan en Los Ángeles...",
    urlPelicula: "https://www.filmaffinity.com/es/film456789.html"
  },
  {
    id: 6,
    titulo: "The Godfather",
    protagonista: "Michael Corleone",
    caracteristicas: "El patriarca de una familia mafiosa pasa el control de su imperio a su hijo...",
    urlPelicula: "https://www.filmaffinity.com/es/film567890.html"
  },
  {
    id: 7,
    titulo: "Fight Club",
    protagonista: "The Narrator",
    caracteristicas: "Un hombre aburrido de su vida forma un club de lucha secreto...",
    urlPelicula: "https://www.filmaffinity.com/es/film678901.html"
  },
  {
    id: 8,
    titulo: "Forrest Gump",
    protagonista: "Forrest Gump",
    caracteristicas: "Un hombre con un bajo coeficiente intelectual ha tenido experiencias extraordinarias a lo largo de su vida...",
    urlPelicula: "https://www.filmaffinity.com/es/film789012.html"
  },
  {
    id: 9,
    titulo: "Interstellar",
    protagonista: "Cooper",
    caracteristicas: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad...",
    urlPelicula: "https://www.filmaffinity.com/es/film890123.html"
  },
  {
    id: 10,
    titulo: "The Lord of the Rings: The Return of the King",
    protagonista: "Frodo Baggins",
    caracteristicas: "Un hobbit y sus amigos continúan su misión para destruir un anillo poderoso...",
    urlPelicula: "https://www.filmaffinity.com/es/film901234.html"
  }
];

// Obtener todas las películas
app.get('/api/peliculas', (req, res) => {
  res.json(peliculas);
});

// Eliminar una película
app.delete('/api/peliculas/:id', (req, res) => {
  const { id } = req.params;
  peliculas = peliculas.filter(pelicula => pelicula.id !== parseInt(id));
  res.status(204).end();
});

// Editar una película
app.put('/api/peliculas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, protagonista, caracteristicas, urlPelicula } = req.body;
  const peliculaIndex = peliculas.findIndex(pelicula => pelicula.id === parseInt(id));
  
  if (peliculaIndex !== -1) {
    peliculas[peliculaIndex] = { id: parseInt(id), titulo, protagonista, caracteristicas, urlPelicula };
    res.json(peliculas[peliculaIndex]);
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
