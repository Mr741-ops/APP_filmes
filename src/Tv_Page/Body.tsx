import * as React from "react";
/* import useApiCall from "../Data/apiCall"; */
import { CustomDialog } from "./dialogBox";
import { Button, Loading, useGetList } from "react-admin";
import * as Poster from "./poster";
import { Box } from "@mui/material";

interface BodyProps {
  resource: string;
  page: number;
  data?: Series[] | null;
}

interface Series {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const Body: React.FC<BodyProps> = ({
  resource,
  page,
  data: searchData,
}: BodyProps) => {
  const {
    data: fetchedData,
    error,
    isPending,
  } = useGetList(`tv/${resource}`, {
    pagination: {
      page: page,
      perPage: 0,
    },
  });

  const displayData = searchData || fetchedData || [];
  const [selectedSeries, setSelectedSeries] = React.useState<Series | null>(
    null,
  );

  const handleClickOpen = (movie: Series) => () => {
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
      {displayData.map((series) => (
        <Box key={series.id}>
          <Button
            variant="outlined"
            onClick={handleClickOpen(series)}
            sx={{
              width: "360px",
            }}
          >
            <Box className="movie-item">
              {Poster.poster(series.poster_path, series.name, series.id)}
            </Box>
          </Button>
        </Box>
      ))}
      <CustomDialog selectedSeries={selectedSeries} handleClose={handleClose} />
    </Box>
  );
};

export default Body;
