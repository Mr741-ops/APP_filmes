//merges every script that belgons on the actor page
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useGetOne } from "react-admin";
import Body from "./Body_Details_Series";
import Image from "./Movie_Image";
import BackButton from "../Utils/backButton";

const TvSeriesPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  const { data: series, isLoading, error } = useGetOne("tv", { id });

  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!series) return <Typography>Nenhum dado encontrado.</Typography>;

  return (
    <Grid
      container
      className="Body"
      direction="row"
      spacing={0}
      sx={{
        width: "100%",
        flexWrap: "wrap",
        minHeight: "100vh",
        minWidth:"100vw",
        justifyContent: "center",
      }}
    >
      <BackButton />
      <Grid size={{ xs: 12, md: 3 }} sx={{ justifyContent: "center" }}>
        <Image series={series} id={id} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ justifyContent: "center" }}>
        <Body series={series} id={id} />
      </Grid>
    </Grid>
  );
};
export default TvSeriesPage;
