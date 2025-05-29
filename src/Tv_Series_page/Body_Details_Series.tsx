import { Box, Typography } from "@mui/material";
import { Loading, useGetList, useGetOne } from "react-admin";
import { Carroussel } from "../Utils/Carroussel";
import { useTranslation } from "react-i18next";

type Props = {
  series: any;
  id: any;
};

const useLists = (id: any) => {
  const movies = useGetOne(
    "tv",
    {
      id,
      meta: { type: "credits" },
    },
    {
      enabled: !!id,
    }
  );

  const similarSeries = useGetList(`tv/${id}/similar`, {
    pagination: {
      page: 1,
      perPage: 0,
    },
  });

  const isLoading = similarSeries.isLoading ?? movies.isLoading;
  const isError = similarSeries.error ?? movies.error;

  return {
    isLoading,
    isError,
    data: {
      similarSeries: similarSeries.data ?? [],
      movies: movies.data ?? [],
    },
  };
};

export const Body = ({ series, id }: Props) => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useLists(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Typography>Error loading movie lists.</Typography>;
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
      <Typography variant="h3" sx={{ mt: 4, textWrap: "wrap" }}>
        <strong>{t("Overview")}</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 5, textAlign: "justify" }}>
        {series.overview}
      </Typography>
      <Carroussel
        title={t("Cast")}
        items={data.movies.cast.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
          character: person.character,
        }))}
        size={900}
      />
      <Carroussel
        title={t("Crew")}
        items={data.movies.crew.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
          character: person.job,
        }))}
        size={900}
      />
      <Carroussel
        title={t("SimilarSeries")}
        items={data.similarSeries.map((series: any) => ({
          id: series.id,
          title: series.name,
          imagePath: series.poster_path,
          navigateTo: "tv_series_page",
        }))}
        size={900}
      />
    </Box>
  );
};

export default Body;
