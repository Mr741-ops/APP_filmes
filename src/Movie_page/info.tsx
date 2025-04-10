import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useGetOne } from "react-admin";



type InfoProps = {
  movie: any;
  id: any;
};

export const Info = ({ movie, id }: InfoProps) => {
  const { data, isLoading, error } = useGetOne("movie", {
    id,
    meta: {type: "credits"},
  });

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!data) return <Typography>Nenhum dado encontrado.</Typography>;

  console.log("Data: ", data);

  return (
    <Grid
      className="Info"
      sx={{
        aligncontent: "center",
        height: "100%",
        width: "375px",
        padding: "30px",
        bgcolor: "background.dark",
        color: "secondary.main",
      }}
    >
      <Typography variant="h3" sx={{ mt: 2 }}>
        <strong>Information</strong>
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Title</strong>: {movie.title}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Budget</strong>: {movie.budget}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Release date</strong>: {movie.release_date}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Runtime</strong>: {movie.runtime}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Revenue</strong>: {movie.revenue}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Elenco</strong>:{"\n"}
        {data.cast.map((actor: any) => actor.name).slice(0,3).join(", ")}
      </Typography>
    </Grid>
  );
};

export default Info;