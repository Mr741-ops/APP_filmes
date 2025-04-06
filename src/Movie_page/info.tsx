import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Info = (movie: any) => {

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
    </Grid>
  );
};

export default Info;
