import "../GlobalCSS.css";
import Body from "./Body";
import { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Buttons from "../Utils/buttons";
import Search_Bar from "../Utils/searchBar";
import { TitleSeries } from "../Utils/title";
import { useTranslation } from "react-i18next";
import { AdvancedSearch } from "../Utils/AdvancedSearch/AdvencedSearch";

export const TVPage = () => {
  const { t } = useTranslation();
  const resource = localStorage.getItem("resource") ?? "popular";

  useEffect(() => {
    if (resource === "advancedSearchSeries") {
      getIsVisible();
    }
  }, [resource]);

  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const title = TitleSeries(resource, t);
  const [isAdvancedSearchVisible, setAdvancedSearchVisible] = useState(false);
  const [advancedSearchResults, setAdvancedSearchResults] = useState<
    any[] | null
  >(null);

  const [isEnabled, setEnabled] = useState(true);

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  const handleAdvancedSearchResults = (results: any[] | null) => {
    setAdvancedSearchResults(results);
    setEnabled(true);
  };

  const getIsVisible = (): void => {
    setAdvancedSearchVisible(true);
    setEnabled(false);
  };

  const data =
    resource === "advancedSearchSeries"
      ? advancedSearchResults
      : (searchResults ?? null);

  return (
    <Container maxWidth="xl" sx={{ maxWidth: "100vw", minWidth: "100vh" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          mb: 3,
        }}
      >
        {isAdvancedSearchVisible && (
          <AdvancedSearch
            onResults={handleAdvancedSearchResults}
            page={page}
            resource={resource}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          mr: "10px",
          ml: "10px",
        }}
      >
        {isEnabled && <Buttons page={page} setPage={setPage} />}
        {!isAdvancedSearchVisible && (
          <Search_Bar onResults={handleSearchResults} resource="search/tv" />
        )}
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
        {isEnabled && <Buttons page={page} setPage={setPage} />}
      </Box>
    </Container>
  );
};

export default TVPage;
