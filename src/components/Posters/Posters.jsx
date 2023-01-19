// import React from "react";
import "./posters.css"

export const Posters = ({ movie, selectMovie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

  return (
    <div onClick={() => selectMovie(movie)} className={"movie"}>
      {movie.poster_path && (
        <div className="image-container d-flex align-items-center justify-content-center">
          <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
        </div>
      )}
      <div className={"flex between movie-description"}>
        <h5 className={"movie-title"}>{movie.title}</h5>
        {movie.vote_average ? (
          <span className={"movie-voting"}>{"★ " + movie.vote_average}</span>
        ) : null}
      </div>
    </div>
  );
};
