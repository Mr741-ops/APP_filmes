import { Box, Rating, Typography } from "@mui/material";
import * as Poster from "../Actors_Gallery/actor_image";

import StarIcon from "@mui/icons-material/Star";

export const Image = (movie: any) => {
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
      <Typography variant="h3" sx={{ mt: 2, mb: 2, textAlign: "center" }}>
        <strong>{movie.title}</strong>
      </Typography>
      <Box
        sx={{ width: "100%", alignContent: "center", justifyItems: "center" }}
      >
        {Poster.personImage(movie.poster_path)}
      </Box>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Typography component="legend">Rating: </Typography>
        <Rating
          value={movie?.vote_average}
          readOnly
          precision={0.5}
          max={10}
          icon={<StarIcon style={{ color: "#f5b50a" }} />}
          emptyIcon={<StarIcon style={{ color: "background.dark" }} />}
          sx={{
            ml: 2,
          }}
        />
        <Box sx={{ ml: 2 }}>{movie.vote_average}</Box>
      </Box>
      <Box
        className="Info"
        sx={{
          color: "secondary.main",
        }}
      >
        <Typography sx={{ mt: 6 }}>
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
      </Box>
    </Box>
  );
};

export default Image;
