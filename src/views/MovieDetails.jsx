import { Link } from "react-router-dom";

function MovieDetails(){
    return(
        <section className="movie__details">
            <div className="section__title">
                <span>Movie Details</span>
            </div>
            <div className="section__details">
                <div className="movie__image">
                    <img src="/img/movie1.jpg" alt="" />
                </div>
                <div className="movie__info">
                    <p className="movie__title">Dr Strange - The Multiverse</p>
                    <p className="movie__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, consequuntur?</p>
                    <p className="movie__description mt-6">Release Year : <span>2024</span></p>
                    <p className="movie__description">Directed By : <span>Chris Evans</span></p>
                    <p className="movie__description">Length : <span>1h 36m</span></p>
                    <p className="movie__description mb-4">ISBN  : <span>GGov83Nic0</span></p>
                    <Link to={"/movies"} className="custom__btn">Back To Movies</Link>
                </div>
            </div>
        </section>
    )
}
export default MovieDetails;