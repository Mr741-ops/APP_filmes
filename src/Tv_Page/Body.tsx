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

  const [selectedSeries, setSelectedSeries] = React.useState<Movie | null>(null);

  const handleClickOpen = (movie: Movie) => () => {
    setSelectedSeries(movie);
  };

  const handleClose = () => {
    setSelectedSeries(null);
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
        {data.map((series) => (
          <Box key={series.id}>
            <Button
              variant="outlined"
              onClick={handleClickOpen(series)}
              sx={{
                width: "360px",
              }}
            >
              <Box
                className="movie-item">
                {Poster.poster(series.poster_path, series.name, series.id)}
              </Box>
            </Button>
          </Box>
        ))}
      </Box>
      <CustomDialog selectedSeries={selectedSeries} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default Body;
