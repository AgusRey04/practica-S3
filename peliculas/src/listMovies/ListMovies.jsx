import React from "react";

import { movies } from "../../data/movies";
function ListMovies() {
  return (
    <>
      <div>
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li>{movie.title}</li>
            <li>{movie.director}</li>
            <li>{movie.duration}</li>
            <li>{movie.ageRating}</li>
            <li>{movie.cinema}</li>
            <li>{movie.date}</li>
            <li>{movie.time}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default ListMovies;
