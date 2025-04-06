//merges every script that belogs on the home page
import * as React from "react";
import "./homePage.css";
import Carrousel from "./Carrousel";
import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { Dropdown } from "./dropdown";
import Buttons from "./buttons";

export const HomePage = () => {
  /* 
  ------------------------------ Variables ------------------------
  */
  const [resource, setResource] = React.useState("movie/popular");
  const [page, setPage] = useState(1);

  /* 
  --------------------------------- Title Function ----------------------
  */
  const title = () => {
    if (resource == "movie/popular") {
      return "Popular Movies";
    } else {
      return "Top Rated Movies";
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Dropdown resource={resource} setResource={setResource} />
          <Buttons page={page} setPage={setPage} />
        </Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "secondary.main",
          }}
        >
          {title()}
        </Typography>
        <Carrousel resource={resource} page={page} />
        <Buttons page={page} setPage={setPage} />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
