// import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
  addMovieToFavorites,
  moveToWatchlist,
  removeMoviefromFavorites,
  removeMovieFromWatchlist,
} from "../../features/movies/moviesSlice";

export const StateControl = ({ type, movie, display }) => {
  const dispatch = useDispatch();

  const ControlButton = styled(Button)(({ _ }) => ({
    color: "#fefefe",
    backgroundColor: "transparent",
    transition: "all o.3s ease",
    fontSize: "1.25rem",
    padding: "5px",
    margin: "0",
    minWidth: 0,
  }));

  return (
    <div className={`notdisplayed ${display}`}>
      {type === "watchlist" && (
        <Stack direction="row">
          <ControlButton
            className="image-container"
            onClick={() => dispatch(addMovieToFavorites(movie))}
          >
            <i className="fa fa-heart" aria-hidden="true"></i>
            {/* <i class="fa fa-star"></i> */}
          </ControlButton>
          <ControlButton
            className="image-container"
            onClick={() => dispatch(removeMovieFromWatchlist(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </ControlButton>
        </Stack>
      )}

      {type === "favorites" && (
        <Stack direction="row">
          <ControlButton
            className="image-container"
            onClick={() => dispatch(moveToWatchlist(movie))}
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </ControlButton>
          <ControlButton
            className="image-container"
            onClick={() => dispatch(removeMoviefromFavorites(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </ControlButton>
        </Stack>
      )}
    </div>
  );
};
