import { useState } from "react";
import { Movie } from "./Interfaces";

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  return { searchResults, handleSearchResults };
};
export const useMovieSelection = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleClickOpen = (movie: Movie) => () => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  return { selectedMovie, handleClickOpen, handleClose };
};
