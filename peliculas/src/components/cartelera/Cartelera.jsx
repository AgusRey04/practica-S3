import { useState } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../movieCard/MovieCard";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";

function Cartelera({ peliculas, onDeleteMovie }) {
  const [showModal, setShowModal] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  const handleDeleteClick = (movie) => {
    setMovieToDelete(movie);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDeleteMovie(movieToDelete.id);
    setShowModal(false);
    setMovieToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setMovieToDelete(null);
  };

  return (
    <>
      <h2>Cartelera de Rosario</h2>
      <Row>
        {peliculas.map((movie) => (
          <MovieCard
            key={movie.id}
            titulo={movie.titulo}
            director={movie.director}
            poster={movie.poster}
            duracion={movie.duracion}
            clasificacion={movie.clasificacion}
            cine={movie.cine}
            onDelete={() => handleDeleteClick(movie)}
          />
        ))}
      </Row>
      <ConfirmDeleteModal
        show={showModal}
        handleClose={handleCancelDelete}
        handleConfirm={handleConfirmDelete}
        movie={movieToDelete}
      />
    </>
  );
}

export default Cartelera;
