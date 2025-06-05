//merges every script that belogs on the home page
import Body from './Body';
import { useState } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Buttons from '../Utils/buttons';
import Search_Bar from '../Utils/searchBar';
import { TitleSeries } from '../Utils/title';
import { useTranslation } from 'react-i18next';

export const TVPage = () => {
  const { t } = useTranslation();

  /* 
  ------------------------------ Variables ------------------------
  */
  const resource = localStorage.getItem('resource') || 'popular';
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const title = TitleSeries(resource, t);

  /* 
  --------------------------------- Functions ----------------------
  */

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  return (
    <Container maxWidth="xl" sx={{ minWidth: "100vh", minHeight: "3220px" }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          justifyItems: 'center',
          marginRight: '15px'
        }}
      >
        <Buttons page={page} setPage={setPage} />
        <Search_Bar onResults={handleSearchResults} resource="search/tv" />
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: 'secondary.main'
        }}
      >
        {title}
      </Typography>
      <Body resource={resource} page={page} data={searchResults} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Buttons page={page} setPage={setPage} />
      </Box>
    </Container>
  );
};

export default TVPage;
