import "./GlobalCSS.css";
import Body from "./Body";
import { useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "./buttons";
import Search_Bar from "../Utils/searchBar";
import { AdvancedSearch } from "../Utils/AdvencedSearch";
import { useTranslation } from "react-i18next";
import { TitleMovies } from "../Utils/title";

export const HomePage = () => {
  const { t } = useTranslation();
  /* 
  ------------------------------ Variables ------------------------
  */
  const resource = localStorage.getItem("resource") || "";
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const title = TitleMovies(resource, t);
  /* 
  --------------------------------- Functions ----------------------
  */

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  return (
    <Container maxWidth="xl" sx={{ minWidth: "1500px", minHeight: "3220px" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          mr: "10px",
          ml: "10px",
        }}
      >
        <Buttons page={page} setPage={setPage} />
        <AdvancedSearch/>
        <Search_Bar onResults={handleSearchResults} resource="search/movie" />
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
      <Body resource={resource} page={page} data={searchResults} />
      <Box
        sx={{
          display: "flex",
          ml: "10px",
        }}
      >
        <Buttons page={page} setPage={setPage} />
      </Box>
    </Container>
  );
};

export default HomePage;
