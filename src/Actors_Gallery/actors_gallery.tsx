import Body from './Body';
import { useState } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Buttons from '../Utils/buttons';
import Search_Bar from '../Utils/searchBar';
import { useTranslation } from 'react-i18next';

export const ActorsGallery = () => {
  const { t } = useTranslation();
  /* 
  ------------------------------ Variables ------------------------
  */
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);

  const handleSearchResults = (results: any[] | null) => {
    setSearchResults(results);
  };

  return (
    <Container maxWidth="xl" sx={{ minWidth: '1500px', minHeight: '1050px' }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          justifyItems: 'center',
          mr: '15px'
        }}
      >
        <Buttons page={page} setPage={setPage} />
        <Search_Bar onResults={handleSearchResults} resource="search/person" />
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          color: 'secondary.main'
        }}
      >
        {t('PopularPeople')}
      </Typography>
      <Body resource="popular" page={page} data={searchResults} />
      <Box
        sx={{
          marginBottom: '20px'
        }}
      >
        <Buttons page={page} setPage={setPage} />
      </Box>
    </Container>
  );
};

export default ActorsGallery;
