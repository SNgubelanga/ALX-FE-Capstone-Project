import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetails() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const fetchUrl = "http://www.omdbapi.com/?i="+ params.id +"&apikey=2e00ab64"

  const getMovies = async () => {
    // Get Movie Details
    const response = await axios
      .get(fetchUrl)
      .catch((err) => setServerErr(err));
    setMovieDetails(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="movie__details">
        {/* {console.log(movieDetails.Title)} */}
      <div className="section__title">
        <span>Movie Details</span>
      </div>
      <div className="section__details">
        <div className="movie__image">
          <img src={movieDetails.Poster} alt="" />
        </div>
        <div className="movie__info">
          <p className="movie__title">{movieDetails.Title}</p>
          <p className="movie__description">
            {movieDetails.Plot}
          </p>
          <p className="movie__description mt-6">
            Release Date : <span>{movieDetails.Released	}</span>
          </p>
          <p className="movie__description">
            Directed By : <span>{movieDetails.Director}</span>
          </p>
          <p className="movie__description">
            Length : <span>{movieDetails.Runtime}</span>
          </p>
          <Link to={"/movies"} className="custom__btn mt-5">
            Back To Movies
          </Link>
        </div>
      </div>
    </section>
  );
}
export default MovieDetails;
