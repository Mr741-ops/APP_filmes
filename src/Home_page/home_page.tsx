//merges every script that belogs on the home page
import * as React from "react";
import "./GlobalCSS.css";
import Body from "./Body";
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
  --------------------------------- Functions ----------------------
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
            justifyItems:"center",
            marginRight: "15px"
          }}
        >
          <Buttons page={page} setPage={setPage} />
          <Dropdown resource={resource} setResource={setResource} />
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
        <Body resource={resource} page={page} />
        <Box sx={{
          display:"flex",
          justifyContent:"center"
        }}>
          <Buttons page={page} setPage={setPage} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
