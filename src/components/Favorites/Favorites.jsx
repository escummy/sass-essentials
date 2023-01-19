// import React from 'react'
import { Container } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { MovieTable } from "../MovieTable/MovieTable";
import { Message } from "../Message/Message";
import { useSelector } from "react-redux";
import { selectAllFavoriteMovies } from "../../features/movies/moviesSlice";

export const Favorites = () => {
  const favoriteMovies = useSelector(selectAllFavoriteMovies);
  // console.log("favoriteMovies", favoriteMovies);

  return (
    <>
      <Navbar />
      <Container fixed>
        {/* <h6>My Favorites</h6> */}
        {favoriteMovies.length > 0 ? (
          <div>
            <MovieTable movies={favoriteMovies} type="favorites" />
          </div>
        ) : (
          <>
            <Message title={"No movies yet, please add movies to favorites"} />
          </>
        )}
      </Container>
    </>
  );
};
