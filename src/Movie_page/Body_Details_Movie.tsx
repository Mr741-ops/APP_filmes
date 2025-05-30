import { Box, Typography } from '@mui/material';
import { Loading, useGetList, useGetOne } from 'react-admin';
import Carroussel from '../Utils/Carroussel';
import { useTranslation } from 'react-i18next';

type Props = {
  movie: any;
  id: any;
};

const useLists = (id: any) => {
  const persons = useGetOne(
    'movie',
    {
      id,
      meta: { type: 'credits' }
    },
    {
      enabled: !!id // só faz a query se o id estiver definido
    }
  );

  const similarMovies = useGetList(`movie/${id}/similar`, {
    pagination: {
      page: 1,
      perPage: 0
    }
  });

  const isLoading = similarMovies.isLoading || persons.isLoading;
  const isError = similarMovies.error || persons.error;

  return {
    isLoading,
    isError,
    data: {
      similarMovies: similarMovies.data || [],
      persons: persons.data || []
    }
  };
};

export const Body = ({ movie, id }: Props) => {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useLists(id);

  if (isLoading) {
    return <Loading />; // or custom loading UI
  }

  if (isError) {
    return <p>Error loading movie lists.</p>;
  }
  return (
    <Box
      className="Biography"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'secondary.main',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        mx: '50px',
        textWrap: 'wrap'
      }}
    >
      <Typography variant="h3" sx={{ mt: 4, textWrap: 'wrap' }}>
        <strong> {t('Overview')}</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 5, textAlign: 'justify' }}>
        {movie.overview}
      </Typography>
      <Carroussel
        title={t('Cast')}
        items={data.persons.cast.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: 'actor_page',
          character: person.character
        }))}
        size={1000}
      />
      <Carroussel
        title={t('Crew')}
        items={data.persons.crew.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: 'actor_page',
          character: person.job
        }))}
        size={1000}
      />
      <Carroussel
        title={t('SimilarMovies')}
        items={data.similarMovies.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          imagePath: movie.poster_path,
          navigateTo: 'movie_page'
        }))}
        size={1000}
      />
    </Box>
  );
};

export default Body;
