import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  const [movies, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await axios
      .get("http://www.omdbapi.com/?s=" + searchTerm + "&apikey=2e00ab64")
      .catch((err) => setServerErr(err));
    const search = response.data.Search;
    setMovie(search);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <section className="search__results">
        <div className="section__title">
          <span>Search Results</span>
        </div>
        <div className="section__content">
          <p className="text-gray-300 opacity-40 mb-4">
            Search term : "<b>{searchTerm}</b>"
          </p>
          {/* <div className="hr__custom"></div> */}
          {/* Search Results Movies */}
          <div className="search__results__movies">
            <div className="movies__cards__row">
              {movies.length === 0 ? (
                <div className="post__empty">
                  <p>Loading.... </p>
                </div>
              ) : (
                movies.map((movie) => {
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
    </>
  );
}
export default SearchResults;
