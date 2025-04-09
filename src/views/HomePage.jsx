import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home__page">
      <section className="hero__section">
        <div className="p-14">
          <p className="movie__title uppercase mb-4">The Soul Conductor.</p>
          <p className="movie__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            perspiciatis cumque esse corporis doloribus maiores ipsam beatae
            eius reiciendis quod, nihil suscipit consequuntur provident,
            doloremque fugiat sunt. Fugit, modi soluta.
          </p>

          <button className="custom__btn mt-20">Watch</button>
        </div>
        <div className="movie__image">
          <img src="/img/hero.jpg" alt="" />
        </div>
      </section>
      {/* Filters */}
      <section className="filters">
        <div className="section__title">
          <span>Filters</span>
        </div>
        <div className="section__content flex gap-10 items-center">
            <Link className="filter" to={"/"}>Action</Link>
            <Link className="filter" to={"/"}>Comedy</Link>
            <Link className="filter" to={"/"}>Animation</Link>
            <Link className="filter" to={"/"}>Horror</Link>
            <Link className="filter" to={"/"}>Sci-Fi</Link>
            <Link className="filter" to={"/"}>Fantasy</Link>
            <Link className="filter" to={"/"}>Music</Link>
        </div>
      </section>
      {/* Recently Watched */}
      <section className="recently__watched">
        <div className="section__title">
          <span>Recently Watched</span>
        </div>
        <div className="section__content">
          <div className="section__cards">
            <div className="recently__card hover:shadow-md cursor-pointer">
              <div className="recently__card__header">
                <div className="card__image">
                  <img src="/img/movie1.jpg" alt="" />
                </div>
                <div className="card__plays">
                  <FaPlay />
                  <span>128.7K Plays</span>
                </div>
              </div>
              <div className="recently__card__body">
                <p className="movie__name">Scarlet Witch 2</p>
                <p className="movie__category">Sci-Fi, Action</p>
              </div>
            </div>
            <div className="recently__card hover:shadow-md cursor-pointer">
              <div className="recently__card__header">
                <div className="card__image">
                  <img src="/img/movie2.jpg" alt="" />
                </div>
                <div className="card__plays">
                  <FaPlay />
                  <span>56.1K Plays</span>
                </div>
              </div>
              <div className="recently__card__body">
                <p className="movie__name">Wrong Turn - Dead End</p>
                <p className="movie__category">Horror, Action</p>
              </div>
            </div>
            <div className="recently__card hover:shadow-md cursor-pointer">
              <div className="recently__card__header">
                <div className="card__image">
                  <img src="/img/movie3.jpg" alt="" />
                </div>
                <div className="card__plays">
                  <FaPlay />
                  <span>31.7K Plays</span>
                </div>
              </div>
              <div className="recently__card__body">
                <p className="movie__name">Avatar - The Way Of Water</p>
                <p className="movie__category">
                  Science Fiction, Fanatasy, Action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recently Watched Ends */}
    </div>
  );
}

export default HomePage;