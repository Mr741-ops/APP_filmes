//merges every script that belgons on the actor page
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useGetOne } from "react-admin";
import Info from "./info";
import Body from "./Body_Details_Person";
import Image from "./Image_Details_Person";

const ActorPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  const { data: person, isLoading, error } = useGetOne("person", { id });

  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!person) return <Typography>Nenhum dado encontrado.</Typography>;

  return (
    <>
      <Grid
        container
        className="Body"
        direction="row"
        spacing={2}
        sx={{
          width: "99.1vw",
          flexWrap: "wrap",
          minHeight: "100vh",
        }}
      >
        <Grid size={{ xs: 12, md: 3 }} sx={{ justifyContent: "center" }}>
          {Image(person)}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ justifyContent: "center" }}>
          <Body person={person} id={id} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} sx={{ justifyContent: "center" }}>
          <Info person={person} id={id} />
        </Grid>
      </Grid>
    </>
  );
};
export default ActorPage;
