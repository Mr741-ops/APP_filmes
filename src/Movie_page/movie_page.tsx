//merges every script that belgons onto the movie page

import { Box, CssBaseline, Paper, Typography } from "@mui/material";

import React from "react";

export const MoviePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper elevation={3}>
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Typography gutterBottom variant="h5">
            Movie Image
          </Typography>
          <Typography gutterBottom variant="h2">
            Information
          </Typography>
          <Typography variant="body1" sx={{ mt: 2}}>
            <strong>Also Known As:</strong> Avatar
          </Typography>
          <Typography variant="body1">
            <strong>Release Date:</strong> 1956-07-01
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Typography>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default MoviePage;
