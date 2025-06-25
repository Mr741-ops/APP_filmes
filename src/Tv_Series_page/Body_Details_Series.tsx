import { Box, Typography } from "@mui/material";
import { Loading, useGetList, useGetOne } from "react-admin";
import { Carroussel } from "../Utils/Carroussel";
import { useTranslation } from "react-i18next";

type Props = {
  series: any;
  id: any;
};

const useLists = (id: any) => {
  const series = useGetOne(
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

  const isLoading = similarSeries.isLoading ?? series.isLoading;
  const isError = similarSeries.error ?? series.error;

  return {
    isLoading,
    isError,
    data: {
      similarSeries: similarSeries.data ?? [],
      people: series.data ?? [],
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

  let overview;

  if(!series.overview){ 
    overview = t("errorMessages.OverviewNull");
  }else{
    overview = series.overview;
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
        <strong>{t("seriesDetails.Overview")}</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 5, textAlign: "justify" }}>
        {overview}
      </Typography>
      <Carroussel
        title={t("seriesDetails.Cast")}
        items={(data.people.cast ?? []).map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
          character: person.character,
        }))}
        size={900}
      />
      <Carroussel
        title={t("seriesDetails.Crew")}
        items={(data.people.crew ?? []).map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
          character: person.job,
        }))}
        size={900}
      />
      <Carroussel
        title={t("seriesDetails.SimilarSeries")}
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
