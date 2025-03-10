import { useState, useEffect } from "react";
import { fetchMovies } from "./DataFetching";
//import { get } from "http";
import teste1 from "./Interface";

const MovieList = () => {
    const [movies, setMovies] = useState<teste1[]>([]);

    useEffect(() => {

        const getMovies = async () => {
            const data = await fetchMovies();
            setMovies(data);
        }

        getMovies();
    }, []);

    return (
        <div>
            <h1> Popular Movies </h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <strong>{movie.title}</strong>
                    </li>
                ))};
                
            </ul>
        </div>


    )
};

export default MovieList;