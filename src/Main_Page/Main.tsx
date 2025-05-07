import { Box, Typography } from "@mui/material";
import Carroussel from "../Utils/Carroussel";
import { Loading, useGetList } from "react-admin";

export const useLists = () => {
  const movies = useGetList(`trending/movie/week`, {
    pagination: {
      page: 1,
      perPage: 0,
    },
  });
  const persons = useGetList(`trending/person/week`, {
    pagination: {
      page: 1,
      perPage: 0,
    },
  });
  const series = useGetList(`trending/tv/week`, {
    pagination: {
      page: 1,
      perPage: 0,
    },
  });

  const isLoading = movies.isLoading || persons.isLoading || series.isLoading;
  const isError = movies.error || persons.error || series.error;

  return {
    isLoading,
    isError,
    data: {
      movies: movies.data || [],
      persons: persons.data || [],
      series: series.data || [],
    },
  };
};

export const MainPage = () => {
  const { data, isLoading, isError } = useLists();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error loading movie lists.</p>;
  }


  return (
    <Box sx={{mb:3}}>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "secondary.main",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
          textWrap: "wrap",
        }}
      >
        <strong>Welcome to the app</strong>
      </Typography>

      <Carroussel
        title={"Trending movies"}
        items={data.movies.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          imagePath: movie.poster_path,
          navigateTo: "movie_page",
        }))}
        size={1200}
      />
      <Carroussel
        title={"Trending series"}
        items={data.series.map((series: any) => ({
          id: series.id,
          title: series.name,
          imagePath: series.poster_path,
          navigateTo: "tv_series_page",
        }))}
        size={1200}
      />
    </Box>
  );
};

export default MainPage;
