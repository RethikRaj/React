const MovieCard = (props) =>{
    const {movieObj} = props;
    const { img, name, genre,rating} = movieObj;
    return (
        <div className="movie-card">
            <img src={img} alt=""/>
            <h2 className="movie-name">{name}</h2>
            <h4 className="movie-genre">{genre}</h4>
            <h4>{rating}⭐</h4>
        </div>
    )
}

export default MovieCard;