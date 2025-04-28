import { Box, Rating, Typography } from "@mui/material";
import * as Poster from "../Actors_Gallery/actor_image";

export const Image = (series: any) => {

  return (
    <Box
      className="Image-Box"
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "background.dark",
        color: "secondary.main",
        alignContent: "baseline",
      }}
    >
      <Typography variant="h3" sx={{ mt: 2, mb: 2, textAlign:"center"}}>
        <strong>{series.name}</strong>
      </Typography>
      <Box sx={{ width: "80%", alignContent:"center", justifyItems:"center"}}>{Poster.personImage(series.poster_path)}</Box>
      <Typography component="legend">Rating</Typography>
      <Rating value={series?.vote_average} readOnly precision={0.5} max={10} /><Box sx={{ ml: 2 }}>{series.vote_average}</Box>
    </Box>
  );
};

export default Image;
