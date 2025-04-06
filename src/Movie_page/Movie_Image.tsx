import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as Poster from "../Actors_Gallery/actor_image";

export const Image = (movie: any) => {
  return (
    <Grid
      className="Image-Box"
      sx={{
        height: "100%",
        width: "375px",
        bgcolor: "background.dark",
        color: "secondary.main",
        padding: "4px",
      }}
    >
      <Typography variant="h3" sx={{ mt: 2 }}>
        {movie.title}
      </Typography>
      {Poster.personImage(movie.poster_path)}
    </Grid>
  );
};

export default Image;