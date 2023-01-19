// import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToWatchlist,
  addMovieToFavorites,
  selectAllWatchlistMovies,
  selectAllFavoriteMovies,
} from "../../features/movies/moviesSlice";
import "./searchresult.css";

export const SearchResult = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlistMovies = useSelector(selectAllWatchlistMovies);
  const favoriteMovies = useSelector(selectAllFavoriteMovies);

  let storeMovies = watchlistMovies.find((item) => item.id === movie.id);
  let storeFavoriteMovies = favoriteMovies.find((item) => item.id === movie.id);

  // const disableWatchlist = storeMovies ? true : false;
  const disableWatchlist = storeMovies
    ? true
    : storeFavoriteMovies
    ? true
    : false;

  const disableFavorites = storeFavoriteMovies ? true : false;

  return (
    <>
      <Card sx={{ display: "flex", height: 300, m: 1 }}>
        <CardMedia
        className="card"
          component="img"
          sx={{ width: 200 }}
          image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography className="movie-title" component="div" variant="h5">
              {movie.title.substring(0, 28)}
            </Typography>
            <Typography className="movie-release-date" component="div">
              {movie.release_date}
            </Typography>
            <Stack spacing={2} direction="row" sx={{ mt: 12 }}>
              <Grid sx={{ flexGrow: 2, mt: -10 }}>
                <Button
                  type="button"
                  variant="contained"
                  sx={{ mb: 1, mr: 1 }}
                  disabled={disableWatchlist}
                  onClick={() => dispatch(addMovieToWatchlist(movie))}
                >
                  Add to Watchlist
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  sx={{ mb: 1, mr: 1 }}
                  disabled={disableFavorites}
                  onClick={() => dispatch(addMovieToFavorites(movie))}
                >
                  Add to Favorites
                </Button>
              </Grid>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
