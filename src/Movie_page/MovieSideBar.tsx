import { Box, Rating, Typography } from '@mui/material';
import * as Poster from '../Actors_Gallery/actor_image';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';

type Movie = {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number | null;
  budget: number | null;
  revenue: number | null;
};

export const SideBar = ({ movie }: { movie: Movie }) => {
  const { t } = useTranslation();

  return (
    <Box
      className="Image-Box"
      sx={{
        height: '100%',
        width: '100%',
        bgcolor: 'background.dark',
        color: 'secondary.main',
        p: 2
      }}
    >
      <Typography variant="h3" sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
        <strong>{movie.title}</strong>
      </Typography>
      <Box sx={{ width: '100%', alignContent: 'center', justifyItems: 'center' }}>
        {Poster.personImage(movie.poster_path)}
      </Box>
      <Box sx={{ display: 'flex', mt: 3 }}>
        <Typography component="legend">{t('movieDetails.Rating')}: </Typography>
        <Rating
          value={movie?.vote_average}
          readOnly
          precision={0.5}
          max={10}
          icon={<StarIcon style={{ color: '#f5b50a' }} />}
          emptyIcon={<StarIcon style={{ color: 'background.dark' }} />}
          sx={{
            ml: 2
          }}
        />
        <Box sx={{ ml: 2 }}>{movie.vote_average}</Box>
      </Box>
      <Box
        className="Info"
        sx={{
          color: 'secondary.main'
        }}
      >
        <Typography sx={{ mt: 6 }}>
          <strong>{t('movieDetails.Title')}</strong>: {movie.title ?? 'N/A'}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('movieDetails.ReleaseDate')}</strong>: {movie.release_date ?? 'N/A'}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('movieDetails.Runtime')}</strong>: {movie.runtime ?? 'N/A'}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('movieDetails.Budget')}</strong>: {movie.budget ? `$ ${movie.budget.toLocaleString()}` : 'N/A'}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('movieDetails.Revenue')}</strong>: {movie.revenue ? `$ ${movie.revenue.toLocaleString()}` : 'N/A'}
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBar;
