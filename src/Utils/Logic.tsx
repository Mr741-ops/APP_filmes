import { useState } from "react";
import { Movie } from "./Interfaces";

export const title = (resource: string) => {
  switch (resource) {
    case "popular":
      return "Popular Movies";
    case "top_rated":
      return "Top Rated Movies";
    case "now_playing":
      return "Now playing Movies";
    case "upcoming":
      return "Upcoming Movies";
    case "search":
      return "Search Movies";
  }
};

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  
  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  return { searchResults, handleSearchResults};
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

}