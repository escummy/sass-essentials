// import React from 'react';
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { StateControl } from "../StateControl/StateControl";
import "./moviecard.css";

export const MovieCard = ({ movie, type }) => {
  const [display, setDisplay] = useState("notdisplayed");

  const showIcon = (event) => {
    event.preventDefault();
    setDisplay("displayed");
  };

  const hideIcon = (event) => {
    event.preventDefault();
    setDisplay("notdisplayed");
  };

  return (
    <>
      <div className="movie-card image-container">
        <Card sx={{ display: "flex", m: 1 }}>
          <div
            onMouseEnter={(event) => showIcon(event)}
            onMouseLeave={(event) => hideIcon(event)}
          >
            <CardMedia
              component="img"
              sx={{ width: 230, height: 350 }}
              image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <StateControl
              className="image-container"
              type={type}
              movie={movie}
              display={display}
            />
          </div>
        </Card>
      </div>
      <div className={"flex between movie-description"}>
        <h5 className={"movie-title"}>{movie.title}</h5>
      </div>
    </>
  );
};
