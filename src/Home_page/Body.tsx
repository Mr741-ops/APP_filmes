import * as React from "react";
/* import useApiCall from "../Data/apiCall"; */
import { CustomDialog } from "./dialogBox";
import { Button, Loading, useGetList } from "react-admin";
import * as Poster from "./poster";
import { Box } from "@mui/material";

interface BodyProps {
  resource: string;
  page: number;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const Body: React.FC<BodyProps> = ({ resource, page }) => {
  const { data, error, isPending } = useGetList(resource, {
    pagination: {
      page: page,
      perPage: 0,
    },
  });

  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

  const handleClickOpen = (movie: Movie) => () => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  if (isPending) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }

  return (
    <React.Fragment>
      <Box
        className="container"
        sx={{
          display: "flex",
          justifycontent: "center",
          aligncontent: "center",
          alignitems: "center",
          gap: "10px",
          flexWrap: "wrap",
          width: "88vw",
          maxwidth: "100%",
          padding: "20px 0",
        }}
      >
        {data.map((movie) => (
          <Box key={movie.id}>
            <Button
              variant="outlined"
              onClick={handleClickOpen(movie)}
              sx={{
                width: "360px",
              }}
            >
              <Box
                className="movie-item">
                {Poster.poster(movie.poster_path, movie.title, movie.id)}
              </Box>
            </Button>
          </Box>
        ))}
      </Box>
      <CustomDialog selectedMovie={selectedMovie} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default Body;
