import { Box, Typography } from "@mui/material";
import { useGetOne } from "react-admin";



type InfoProps = {
  series: any;
  id: any;
};

export const Info = ({ series, id }: InfoProps) => {
  const { data, isLoading, error } = useGetOne("tv", {
    id,
    meta: {type: "credits"},
  });

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!data) return <Typography>Nenhum dado encontrado.</Typography>;

  return (
    <Box
      className="Info"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        height: "100%",
        width: "100%",
        bgcolor: "background.dark",
        color: "secondary.main",
      }}
    >
      <Typography variant="h3" sx={{ mt: 2, textAlign: "center" }}>
        <strong>Information</strong>
      </Typography>
      <Typography sx={{ mt: 2}}>
        <strong>Title</strong>: {series.name}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Episode runtime</strong>: {series.episode_run_time}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>First air date</strong>: {series.first_air_date}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Episodes</strong>: {series.number_of_episodes}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Seasons</strong>: {series.number_of_seasons}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Status</strong>: {series.status}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Type</strong>: {series.type}
      </Typography>
    </Box>
  );
};

export default Info;