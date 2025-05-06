//merges every script that belogs on the home page
import * as React from "react";
import Body from "./Body";
import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "./buttons";
import Search_Bar from "../Utils/searchBar";

export const TVPage = () => {
  /* 
  ------------------------------ Variables ------------------------
  */
  const resource = localStorage.getItem("resource") || "popular";
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

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

  const handleSearchResults = (results:any[] | null) => {
    setSearchResults(results);
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
          <Search_Bar onResults={handleSearchResults} resource="search/tv" />
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
        <Body resource={resource} page={page}  data={searchResults}/>
        <Box sx={{
          display:"flex",
          justifyContent:"center"
        }}>
          <Buttons page={page} setPage={setPage}/>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TVPage;
