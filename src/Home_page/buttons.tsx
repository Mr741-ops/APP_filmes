import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonsProps {
  page: number;
  setPage: (value: (prev: number) => number) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ page, setPage }) => {
  const { t } = useTranslation();

  const incrementPage = (): void => {
    setPage(prev => prev + 1);
  };

  const decreasePage = (): void => {
    if (page != 1) {
      setPage(prev => prev - 1);
    }
  };

  return (
    <Box>
      <Grid
        sx={{
          display: 'flex',
          justifycontent: 'space-evenly',
          gap: 1
        }}
      >
        <Button variant="contained" onClick={decreasePage}>
          {t('PreviousPage')}
        </Button>
        <Box
          sx={{
            width: '50px',
            backgroundColor: 'background.dark',
            textAlign: 'center'
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: 'secondary.main'
            }}
          >
            {page}
          </Typography>
        </Box>
        <Button variant="contained" onClick={incrementPage}>
          {t('NextPage')}
        </Button>
      </Grid>
    </Box>
  );
};

export default Buttons;
