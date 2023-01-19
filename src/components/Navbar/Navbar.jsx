// import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className={"brand"}>
          <Link to="/">TMDB ★ Posters</Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/ranking">Ranking</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/add">Add+</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
