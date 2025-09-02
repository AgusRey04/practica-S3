import Cartelera from "./components/cartelera/Cartelera";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./components/notFound/NotFound";
function App() {
  const [peliculas, setPeliculas] = useState([
    {
      id: 1,
      titulo: "Oppenheimer",
      director: "Christopher Nolan",
      duracion: "3h",
      clasificacion: "+16",
      cine: "Cines Rosario",
      poster: "https://m.media-amazon.com/images/I/71YV4x6QErL._AC_SY679_.jpg",
      sinopsis:
        "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
      fecha: "05/09/2025",
      hora: "20:00",
    },
    {
      id: 2,
      titulo: "Barbie",
      director: "Greta Gerwig",
      duracion: "1h 54m",
      clasificacion: "ATP",
      cine: "Village Rosario",
      poster: "https://m.media-amazon.com/images/I/71VVN3qfK-L._AC_SY679_.jpg",
      sinopsis:
        "Barbie y Ken viven aventuras fuera de Barbieland y descubren el mundo real.",
      fecha: "06/09/2025",
      hora: "18:30",
    },
  ]);

  const handleDeleteMovie = (id) => {
    setPeliculas(peliculas.filter((movie) => movie.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Cartelera
              peliculas={peliculas}
              onDeleteMovie={handleDeleteMovie}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
