// import React from 'react'
import { Container } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { MovieTable } from "../MovieTable/MovieTable";
import { Message } from "../Message/Message";
import { useSelector } from "react-redux";
import { selectAllWatchlistMovies } from "../../features/movies/moviesSlice";

export const Watchlist = () => {
  const watchlistMovies = useSelector(selectAllWatchlistMovies);
  // console.log("watchlistMovies", watchlistMovies);

  return (
    <>
      <Navbar />
      <Container fixed>
        {/* <h6>My Watchlist</h6> */}
        {watchlistMovies.length > 0 ? (
          <>
            <MovieTable movies={watchlistMovies} type="watchlist" />
          </>
        ) : (
          <>
            <Message title={"No movies yet, please add movies to watchlist"} />
          </>
        )}
      </Container>
    </>
  );
};
