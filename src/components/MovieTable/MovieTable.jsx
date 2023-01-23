// import React from 'react'
import Grid from "@mui/material/Grid";
import { MovieCard } from "../MovieCard/MovieCard";

export const MovieTable = ({ movies, type }) => {
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={10} mb={10}>
        <Grid item xs={12} m={1}>
          <Grid container justifyContent="center" spacing={2}>
            {movies.map((movie) => (
              <div key={movie.id}>
                <Grid item xs={15} mb={4} mr={1} ml={1}>
                  <MovieCard movie={movie} type={type} />
                </Grid>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
