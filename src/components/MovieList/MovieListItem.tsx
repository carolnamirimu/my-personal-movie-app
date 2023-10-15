import React from "react";

const MovieListItem = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <div>{movie.overview}</div>
    </div>
  );
};

export default MovieListItem;
