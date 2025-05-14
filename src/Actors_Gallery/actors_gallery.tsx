//merges every script that belogs on the home page
import * as React from "react";
import Body from "./Body";
import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "../Home_page/buttons";
import Search_Bar from "../Utils/searchBar";

export const ActorsGallery = () => {
  /* 
  ------------------------------ Variables ------------------------
  */
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

  /* 
  --------------------------------- Title Function ----------------------
  */
  /* const title = () => {
    switch(resource) {
      case "popular":
        return "Popular People";
    }
    
  }; */

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  return (
    <Container maxWidth="xl" sx={{ minWidth: "1500px", minHeight: "1050px" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          marginRight: "15px",
        }}
      >
        <Buttons page={page} setPage={setPage} />
        <Search_Bar onResults={handleSearchResults} resource="search/person" />
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "secondary.main",
        }}
      >
        Popular People
      </Typography>
      <Body resource="popular" page={page} data={searchResults} />
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <Buttons page={page} setPage={setPage} />
      </Box>
    </Container>
  );
};

export default ActorsGallery;
