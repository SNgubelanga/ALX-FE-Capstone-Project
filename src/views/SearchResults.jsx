import MovieCard from "../components/MovieCard";

function SearchResults() {
  return (
    <>
      <section className="search__results">
        <div className="section__title">
          <span>Search Results</span>
        </div>
        <div className="section__content">
          <p className="text-gray-300 opacity-40 mb-4">
            Search term : "<b>Monsters University</b>"
          </p>
          {/* <div className="hr__custom"></div> */}
          {/* Search Results Movies */}
          <div className="search__results__movies">
            <div className="movies__cards__row">
                <MovieCard image="/movie1.jpg" id={1} title="Dr Strange - The Multiverse" category="Sci-Fi" director="Chris Evans"/>
                <MovieCard image="/movie2.jpg" id={2} title="Wrong Turn - Dead End" category="Horror, Thriller" director="Dobbie Skerty"/>
                <MovieCard image="/movie3.jpg" id={3} title="Avatar - The Way Of Water" category="Science Friction" director="Stalonne"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SearchResults;
