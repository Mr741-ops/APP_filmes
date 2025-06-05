import { CustomDialog } from "./dialogBox";
import { Button, Loading, useGetList } from "react-admin";
import * as Poster from "./poster";
import { Box } from "@mui/material";
import React from "react";

interface BodyProps {
  resource?: string;
  page: number;
  data?: Movie[] | null;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const Body: React.FC<BodyProps> = ({ resource, page, data: searchData}) => {
  const shouldFetch = resource != "advancedSearch" && !searchData;

  const {
      data: fetchedData,
      error,
      isPending,
    } = useGetList(
      `movie/${resource}`,
      {
        pagination: {
          page: page,
          perPage: 0,
        },
      },
      {
        enabled: shouldFetch,
      }
    );
  

  const displayData = searchData ?? fetchedData ?? [];
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

  console.log("Display Data: ", searchData)

  ///////////////////// Functions /////////////////////////////

  const handleClickOpen = (movie: Movie) => () => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  if (shouldFetch && isPending) {
    return <Loading />;
  }
  if (shouldFetch && error) {
    return <p>Error</p>;
  }

  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
        width: "88vw",
        maxWidth: "100%",
        padding: "20px 0",
      }}
    >
      {displayData.map((movie) => (
        <Box key={movie.id}>
          <Button
            variant="outlined"
            onClick={handleClickOpen(movie)}
            sx={{
              width: "360px",
              bgcolor: "primary.dark",
            }}
          >
            <Box className="movie-item">
              {Poster.poster(movie.poster_path, movie.title, movie.id)}
            </Box>
          </Button>
        </Box>
      ))}
      <CustomDialog selectedMovie={selectedMovie} handleClose={handleClose} />
    </Box>
  );
};

export default Body;
