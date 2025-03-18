import { useState, useEffect } from "react";
import { dataProvider } from "./dataProvider";
//import { get } from "http";
import teste1 from "./Interface";

const MovieList = () => {
    const [movies, setMovies] = useState<teste1[]>([]);

    useEffect(() => {

        const getMovies = async () => {
            const data = await dataProvider.getList("popular", "10");
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