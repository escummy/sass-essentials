import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Posters } from "../components/Posters/Posters";
import { Footer } from "../components/Footer/Footer";
import Youtube from "react-youtube";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

export const Home = () => {

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY = "10b20c63b20e1f2c1b40bc1c9ff8a934";
  const BASE_URL = "https://api.themoviedb.org/3/";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH = BASE_URL + "search/movie";
  const DISCOVER = BASE_URL + "discover/movie";

  // Environment variables
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Async function to show movies available
  const fetchMovies = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(`${searchKey ? SEARCH : DISCOVER}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(data.results);
    setMovie(data.results[0]);
    // console.log(data.results[0]);

    if (data.results.length) {
      await fetchMovie(data.results[0].id);
    }
  };

  // Async function to fetch a unique movie by id
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${BASE_URL}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    setMovie(data);
  };

  // Async function to render the trailer
  const selectMovie = async (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
    // setPlaying(false);
  };

  // To render the movies table
  const renderMovies = () =>
    movies.map((movie) => (
      <Posters selectMovie={selectMovie} key={movie.id} movie={movie} />
    ));

  return (
    <>
      {/* Navbar and search bar */}
      <header className="header">
        <Navbar />
        <div className="search-container">
          <form className="form col col-sm-4" onSubmit={fetchMovies}>
            <input
              className="search"
              type="text"
              id="search"
              placeholder=" . . . "
              onInput={(event) => setSearchKey(event.target.value)}
            />
            <button className="submit-search" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </header>

      {/* Render conditional */}
      {movies.length ? (
        <main>
          {movie ? (
            <div
              className="wallpaper"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`,
              }}
            >
              {playing ? (
                <>
                  <Youtube
                    videoId={trailer.key}
                    className={"youtube"}
                    // containerClassName={"youtube-container"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 5,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />

                  {/* Button to play & close trailer */}
                  <button
                    onClick={() => setPlaying(false)}
                    className={"button close-video"}
                  >
                    Exit
                  </button>
                </>
              ) : (

                <div className="wallpaper-content">
                  {trailer ? (
                    <button
                      className={"button play-video"}
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Watch Trailer
                    </button>
                  ) : (
                    <button className={"button play-video"} type="button">
                      Sorry, no trailer available
                    </button>
                  )}
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                </div>
              )}
            </div>
          ) : null}

          {/* Rendering movies */}
          <div className={"container"}>{renderMovies()}</div>

          <Footer />
        </main>
      ) : null}
    </>
  );
};
