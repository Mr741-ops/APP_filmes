//merges every script that belgons on the actor page
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useGetOne } from "react-admin";
import Info from "./info";
import Body from "./Body_Details_Person"
import Image from "./Movie_Image"

const ActorPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  const { data: movie, isLoading, error } = useGetOne("movie", { id });

  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!movie) return <Typography>Nenhum dado encontrado.</Typography>;

  console.log(movie)

  return (
    <>
      <Grid
        container
        className="Body"
        spacing={26}
        sx={{
          height: "100vh",
          width: "100vw",
          marginLeft:"25px",

          "&.css-lqa328-MuiContainer-root": {
            maxwidth: "100vw",
          },
        }}
      >
        {/*  Image Box  */}
        {Image(movie)}
        {/* Body of the page*/}
        {Body(movie)}
        {/* Info Box */}
        <Info movie={movie} id={id}/> 
      </Grid>
    </>
  );
};
export default ActorPage;
