//merges every script that belgons on the actor page
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useGetOne } from "react-admin";
import Body from "./Body_Details_Movie";
import Image from "./Movie_Image";
import BackButton from "../Utils/backButton";

const ActorPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  const { data: movie, isLoading, error } = useGetOne("movie", { id });

  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!movie) return <Typography>Nenhum dado encontrado.</Typography>;


  return (
    <>
      <Grid
        container
        className="Body"
        direction="row"
        gap={7}
        sx={{
          width: "100%",
          flexWrap: "wrap",
          minHeight: "100vh",
          justifyContent:"center"
        }}
      >
        <BackButton />
        <Grid size={{ xs: 12, md: 3}} sx={{ justifyContent: "center" }}>
          {Image(movie)}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ justifyContent: "center" }}>
          <Body movie={movie} id={id}/>
        </Grid>
      </Grid>
    </>
  );
};
export default ActorPage;
