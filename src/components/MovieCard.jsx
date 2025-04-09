import { Link } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";

function MovieCard(props) {
  return (
    <div className="movie__card">
      <div className="movie__card__header">
        <img src={props.image} alt="" />
      </div>
      <div className="movie__card__body">
        <p className="movie__title">{props.title}</p>
        <p className="movie__category">{props.category}</p>
        <p className="director">
          Directed By <span>{props.director}</span>
        </p>
      </div>
      <div className="movie__card__footer">
        <button className="custom__btn">Watch Now</button>
        <Link className="more__info" to={`/movie/` + props.id}>
          <FaEllipsisH />
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
