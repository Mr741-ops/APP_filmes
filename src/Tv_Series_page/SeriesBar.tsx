import { Box, Rating, Typography } from "@mui/material";
import * as Poster from "../Actors_Gallery/actor_image";
import StarIcon from "@mui/icons-material/Star";
import { useGetOne } from "react-admin";
import { useTranslation } from "react-i18next";

type InfoProps = {
  series: any;
  id: any;
};

export const Image = ({ series, id }: InfoProps) => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetOne("tv", {
    id,
    meta: { type: "credits" },
  });

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!data) return <Typography>Nenhum dado encontrado.</Typography>;

  return (
    <Box
      className="Image-Box"
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "background.dark",
        color: "secondary.main",
        p: 2,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        <strong>{series.name}</strong>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {Poster.personImage(series.poster_path)}
      </Box>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Typography component="legend">{t('Rating')}: </Typography>
        <Rating
          value={series?.vote_average}
          readOnly
          precision={0.5}
          max={10}
          icon={<StarIcon style={{ color: "#f5b50a" }} />}
          emptyIcon={<StarIcon style={{ color: "background.dark" }} />}
          sx={{
            ml: 2,
          }}
        />
        <Box sx={{ ml: 2 }}>{series.vote_average}</Box>
      </Box>
      <Box
        className="Info"
        sx={{
          color: "secondary.main",
        }}
      >
        <Typography sx={{ mt: 2 }}>
          <strong>{t('Title')}</strong>: {series.name ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('EpisodeRuntime')}</strong>: {series.episode_run_time ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('FirstAirDate')}</strong>: {series.first_air_date ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('Episodes')}</strong>: {series.number_of_episodes ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('Seasons')}</strong>: {series.number_of_seasons ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('Status')}</strong>: {series.status ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t('Type')}</strong>: {series.type ?? "N/A"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Image;
