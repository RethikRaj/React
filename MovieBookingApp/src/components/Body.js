import { use, useState } from "react";
import MovieCard from "./MovieCard";
import mockdata from "../utils/mockdata.js";

const Body = () =>{
    const [listOfMovies, setListOfMovies] = useState(mockdata);

    return (
        <div className="body">
            <button className="top-rated-movies-btn" onClick={()=>{
                const filteredListOfMovies = listOfMovies.filter((movie)=>{
                    return movie.rating > 9;
                })
                setListOfMovies(filteredListOfMovies);
            }}>Show Top Rated Movie</button>

            <div className="movie-container">
                {listOfMovies.map((movie)=>{
                    return <MovieCard key={movie.id} movieObj={movie} />
                })}
            </div>
        </div>
    )
}

export default Body;