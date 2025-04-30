//merges every script that belgons on the actor page
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useGetOne } from "react-admin";
import Info from "./info";
import Body from "./Body_Details_Movie";
import Image from "./Movie_Image";

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
        spacing={2}
        sx={{
          height: "100vh",
          width: "100vw",
          marginLeft: "15px",
          "&.css-lqa328-MuiContainer-root": {
            maxwidth: "100vw",
          },
        }}
      >
        <Grid size={{ xs: 12, md: 3}} sx={{ justifyContent: "center" }}>
          {Image(movie)}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ justifyContent: "center" }}>
          <Body movie={movie} id={id}/>
        </Grid>
        <Grid size={{ xs: 12, md: 3}} sx={{ justifyContent: "center" }}>
          <Info movie={movie}/>
        </Grid>
      </Grid>
    </>
  );
};
export default ActorPage;
