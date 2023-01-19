import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    favoriteMovies: [],
    watchlistMovies: [],
  },

  // Add to watchlist
  reducers: {
    addMovieToWatchlist(state, action) {
      state.watchlistMovies.push(action.payload);
    },

    // If added to favorites: remove from watchlist
    addMovieToFavorites(state, action) {
      state.watchlistMovies = state.watchlistMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.favoriteMovies.push(action.payload);
    },

    // To remove from watchlist
    removeMovieFromWatchlist(state, action) {
      state.watchlistMovies = state.watchlistMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },

    // If removed from favorites: move to watchlist
    moveToWatchlist(state, action) {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchlistMovies.push(action.payload);
    },

    // To remove from favorites
    removeMoviefromFavorites(state, action) {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
    }
  },
});

export const {
  addMovieToWatchlist,
  addMovieToFavorites,
  removeMovieFromWatchlist,
  removeMoviefromFavorites,
  moveToWatchlist,
} = moviesSlice.actions;

export default moviesSlice.reducer;
export const selectAllWatchlistMovies = (state) => state.movies.watchlistMovies;
export const selectAllFavoriteMovies = (state) =>
  state.movies.favoriteMovies;
