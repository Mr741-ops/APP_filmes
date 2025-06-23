/* import useApiCall from "../Data/apiCall"; */
import { CustomDialog } from "./dialogBox";
import { Button, Loading, useGetList } from "react-admin";
import * as Poster from "../Home_page/poster";
import { Box } from "@mui/material";
import React from "react";

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
  const shouldFetch = resource != "advancedSearchTv" && !searchData;

  const {
    data: fetchedData,
    error,
    isPending,
  } = useGetList(
    `tv/${resource}`,
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

  const [selectedSeries, setSelectedSeries] = React.useState<Series | null>(
    null
  );

  const handleClickOpen = (series: Series) => () => {
    setSelectedSeries(series);
  };
  const handleClose = () => {
    setSelectedSeries(null);
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
      {displayData.map((series) => (
        <Box key={series.id}>
          <Button
            variant="outlined"
            onClick={handleClickOpen(series)}
            sx={{
              width: "360px",
              bgcolor: "primary.dark",
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
