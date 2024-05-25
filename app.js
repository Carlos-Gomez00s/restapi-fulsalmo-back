const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Para parsear el body de las solicitudes

let peliculas = [
    {
        "id": 1,
        "titulo": "Batman: El Caballero de la Noche",
        "protagonista": "Bruce Wayne / Batman",
        "caracteristicas": "Un multimillonario que lucha contra el crimen...",
        "urlPelicula": "https://www.filmaffinity.com/es/film867354.html",
        "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg"
      },
      {
        "id": 2,
        "titulo": "Inception",
        "protagonista": "Dom Cobb",
        "caracteristicas": "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos...",
        "urlPelicula": "https://www.filmaffinity.com/es/film123456.html",
        "urlImagen": "https://pics.filmaffinity.com/inception-652954101-large.jpg"
      },
      {
        "id": 3,
        "titulo": "The Matrix",
        "protagonista": "Neo",
        "caracteristicas": "Un hacker que descubre que su realidad es una simulación creada por inteligencias artificiales...",
        "urlPelicula": "https://www.filmaffinity.com/es/film234567.html",
        "urlImagen": "https://pics.filmaffinity.com/the_matrix-155050517-large.jpg"
      },
      {
        "id": 4,
        "titulo": "The Shawshank Redemption",
        "protagonista": "Andy Dufresne",
        "caracteristicas": "Un banquero acusado de asesinato encuentra esperanza y redención dentro de la prisión...",
        "urlPelicula": "https://www.filmaffinity.com/es/film345678.html",
        "urlImagen": "https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg"
      },
      {
        "id": 5,
        "titulo": "Pulp Fiction",
        "protagonista": "Vincent Vega",
        "caracteristicas": "Varias historias de crimen se entrelazan en Los Ángeles...",
        "urlPelicula": "https://www.filmaffinity.com/es/film456789.html",
        "urlImagen": "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg"
      },
      {
        "id": 6,
        "titulo": "The Godfather",
        "protagonista": "Michael Corleone",
        "caracteristicas": "El patriarca de una familia mafiosa pasa el control de su imperio a su hijo...",
        "urlPelicula": "https://www.youtube.com/watch?v=UaVTIH8mujA",
        "urlImagen": "https://pics.filmaffinity.com/the_godfather-488102675-large.jpg"
      },
      {
        "id": 7,
        "titulo": "Fight Club",
        "protagonista": "The Narrator",
        "caracteristicas": "Un hombre aburrido de su vida forma un club de lucha secreto...",
        "urlPelicula": "https://www.youtube.com/watch?v=BdJKm16Co6M",
        "urlImagen": "https://pics.filmaffinity.com/fight_club-320750671-large.jpg"
      },
      {
        "id": 8,
        "titulo": "Forrest Gump",
        "protagonista": "Forrest Gump",
        "caracteristicas": "Un hombre con un bajo coeficiente intelectual ha tenido experiencias extraordinarias a lo largo de su vida...",
        "urlPelicula": "https://www.youtube.com/watch?v=bLvqoHBptjg",
        "urlImagen": "https://pics.filmaffinity.com/forrest_gump-212765827-large.jpg"
      },
      {
        "id": 9,
        "titulo": "Interstellar",
        "protagonista": "Cooper",
        "caracteristicas": "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad...",
        "urlPelicula": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        "urlImagen": "https://pics.filmaffinity.com/interstellar-366875261-large.jpg"
      },
      {
        "id": 10,
        "titulo": "The Lord of the Rings: The Return of the King",
        "protagonista": "Frodo Baggins",
        "caracteristicas": "Un hobbit y sus amigos continúan su misión para destruir un anillo poderoso...",
        "urlPelicula": "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
        "urlImagen": "https://pics.filmaffinity.com/the_lord_of_the_rings_the_return_of_the_king-178294596-large.jpg"
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
