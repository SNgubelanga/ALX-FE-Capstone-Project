import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";


function Movies() {
  const [movies_list, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios
      .get("http://www.omdbapi.com/?s=avengers&apikey=2e00ab64")
      .catch((err) => setServerErr(err));
    const movie_list = response.data.Search;
    setMovies(movie_list);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="search__results">
      {/* {console.log(movies_list)} */}
      <div className="section__title">
        <span>Movies</span>
        <p>See the list of movies you can watch.</p>
      </div>
      <div className="section__content ">
        <div className="filters my-5 flex gap-10 items-center">
          <div className="flex gap-3 items-center">
            <FaFilter className="text-white" />
            <span className="text-white">Filters</span>
          </div>
          <div className="section__content flex gap-5 items-center">
            <Link className="filter" to={"/"}>
              Action
            </Link>
            <Link className="filter" to={"/"}>
              Comedy
            </Link>
            <Link className="filter" to={"/"}>
              Animation
            </Link>
            <Link className="filter" to={"/"}>
              Horror
            </Link>
            <Link className="filter" to={"/"}>
              Sci-Fi
            </Link>
            <Link className="filter" to={"/"}>
              Fantasy
            </Link>
            <Link className="filter" to={"/"}>
              Music
            </Link>
          </div>
        </div>
        {/* Search Results Movies */}
        <div className="search__results__movies">
          <div className="movies__cards__row">
            {movies_list.length === 0 ? (
              <div className="post__empty">
                <p>Loading.... </p>
              </div>
            ) : (
              movies_list.map((movie) => {
                return (
                  <MovieCard
                    image={movie.Poster}
                    key={movie.imdbID}
                    id={movie.imdbID}
                    title={movie.Title}
                    category={movie.Genre}
                    director={movie.Director}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Movies;
