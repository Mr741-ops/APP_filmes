import { Box, Typography } from "@mui/material";
import { Loading, useGetList, useGetOne } from "react-admin";
import Carroussel from "../Utils/Carroussel";

type Props = {
  movie: any;
  id: any;
};

const useLists = (id: any) => {
  const persons = useGetOne(
    "movie",
    {
      id,
      meta: { type: "credits" },
    },
    {
      enabled: !!id, // só faz a query se o id estiver definido
    },
  );

  const similarMovies = useGetList(`movie/${id}/similar`, {
    pagination: {
      page: 1,
      perPage: 0,
    },
  });

  const isLoading = similarMovies.isLoading || persons.isLoading;
  const isError = similarMovies.error || persons.error;

  return {
    isLoading,
    isError,
    data: {
      similarMovies: similarMovies.data || [],
      persons: persons.data || [],
    },
  };
};

export const Body = ({ movie, id }: Props) => {
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
        display: "flex",
        flexDirection: "column",
        color: "secondary.main",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        mx: "50px",
        textWrap: "wrap",
      }}
    >
      <Typography variant="h3" sx={{ mt: 7, textWrap: "wrap" }}>
        <strong>Overview</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 7, textAlign: "justify" }}>
        {movie.overview}
      </Typography>
      <Carroussel
        title="Cast"
        items={data.persons.cast.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
        }))}
        size={900}
      />
      <Carroussel
        title="Similar Movies"
        items={data.similarMovies.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          imagePath: movie.poster_path,
          navigateTo: "movie_page",
        }))}
        size={975}
      />
    </Box>
  );
};

export default Body;
