//merges every script that belogs on the home page
import * as React from "react";
import Body from "./Body";
import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "../Home_page/buttons";

export const ActorsGallery = () => {
  /* 
  ------------------------------ Variables ------------------------
  */
  const resource = "person/popular";
  const [page, setPage] = useState(1);
  const title = "Popular People";

  /* 
  --------------------------------- Title Function ----------------------
  */

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
          {/* <Dropdown resource={resource} setResource={setResource} /> */}
          <Buttons page={page} setPage={setPage} />
        </Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "secondary.main",
          }}
        >
          {title}
        </Typography>
        <Body resource={resource} page={page} />
      </Container>
    </React.Fragment>
  );
};

export default ActorsGallery;
