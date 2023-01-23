// import React from 'react'
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Message } from "../Message/Message";
import { useGetMoviesMutation } from "../../api/fetchApi";
import { SearchResult } from "../SearchResult/SearchResult";

export const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [getMovies, { data: movies }] = useGetMoviesMutation();
  // console.log("data", data);

  useEffect(() => {
    if (query) {
      fetchMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <form className="form col col-sm-4">
          <input
            className="search"
            type="text"
            id="search"
            placeholder=" . . . "
            value={query}
            onChange={handleSearch}
          />
          <button className="submit-search" type="submit">
            <i className="fa-sharp fa-solid fa-keyboard"></i>
          </button>
        </form>
      </div>

      <div
        className="search-result"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "700px",
          alignContent: "center",
          marginTop: "50px",
        }}
      >
        {movies?.results?.length > 0 ? (
          movies?.results?.map((movie) => (
            <SearchResult key={movie.id} movie={movie} />
          ))
        ) : (
          <>
            <Message title={"Type above to search movies"} />
          </>
        )}
      </div>
    </>
  );
};
