import "./GlobalCSS.css";
import Body from "./Body";
import { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "../Utils/buttons";
import Search_Bar from "../Utils/searchBar";
import { AdvancedSearch } from "../Utils/AdvancedSearch/AdvencedSearch";
import { useTranslation } from "react-i18next";
import { TitleMovies } from "../Utils/title";

export const HomePage = () => {
  const { t } = useTranslation();
  /* 
  ------------------------------ Variables ------------------------
  */
  const resource = localStorage.getItem("resource") ?? "";
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const title = TitleMovies(resource, t);
  const [isVisible, setIsVisible] = useState(false);
  const [advancedSearchResults, setAdvancedSearchResults] = useState<any[] | null> ();
  const [isDisabled, setIsDisabled] = useState(true);

  /* 
  --------------------------------- Functions ----------------------
  */

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };
  const handleAdvancedSearchResults = (results: any[] | null) => {
    setAdvancedSearchResults(results);
  };

  const getIsVisible = (): void => {
    setIsVisible(true);
    setIsDisabled(false);
  };
  useEffect(() => {
    if (resource === "advancedSearch") {
      getIsVisible();
    }
  }, [resource]);

  const data = searchResults || advancedSearchResults;

  return (
    <Container maxWidth="xl" sx={{ minWidth: "100vh", }}>
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
        {isVisible && (
          <AdvancedSearch
            disabled={isDisabled}
            onResults={handleAdvancedSearchResults}
          />
        )}
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
      <Body resource={resource} page={page} data={data} />
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
