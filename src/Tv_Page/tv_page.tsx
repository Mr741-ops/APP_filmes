//merges every script that belogs on the home page
import * as React from "react";
import Body from "./Body";
import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "./buttons";

export const TVPage = () => {
  /* 
  ------------------------------ Variables ------------------------
  */
  const resource = localStorage.getItem("resource") || "popular";
  const [page, setPage] = useState(1);

  /* 
  --------------------------------- Functions ----------------------
  */
    const title = () => {
      switch(resource) {
        case "popular":
          return "Popular Series";
        case "top_rated":
          return "Top Rated Series";
        case "on_the_air":
          return "Currently airing Series ";
        case "airing_today":
          return "Airing Today Series";
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

export default TVPage;
