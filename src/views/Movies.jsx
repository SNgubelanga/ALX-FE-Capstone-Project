import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

function Movies() {
  return (
    <section className="search__results">
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
            <MovieCard
              image="/img/movie1.jpg"
              id={1}
              title="Dr Strange - The Multiverse"
              category="Sci-Fi"
              director="Chris Evans"
            />
            <MovieCard
              image="/img/movie2.jpg"
              id={2}
              title="Wrong Turn - Dead End"
              category="Horror, Thriller"
              director="Dobbie Skerty"
            />
            <MovieCard
              image="/img/movie3.jpg"
              id={3}
              title="Avatar - The Way Of Water"
              category="Science Friction"
              director="Stalonne"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Movies;
