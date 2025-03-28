//merges every script that belgons onto the movie page

import { CssBaseline, Typography } from "@mui/material";

import Grid from "@mui/material/Grid2";
import React from "react";

export const MoviePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid size={6}>
          <Typography gutterBottom>Movie Image</Typography>
        </Grid>
        <Grid size={6}>
          <Typography gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography>
            <h2>Information</h2>
            also_known_as: Avatar
            <br />
            Release date: 1956-07-01
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
    /* 
    <div className="Body">
      <div className="Image-Box">
        <h3>Tom Hanks</h3>
        <img src="src/Actor_page/Tom_Hanks.jpg" className="image"></img>
      </div>
      <div className="Info">
        
      </div>
    </div>
     */
  );
};

export default MoviePage;
