import { Box, Typography } from "@mui/material";




type InfoProps = {
  movie: any;
};

export const Info = ({ movie}: InfoProps) => {
  return (
    <Box
      className="Info"
      sx={{
        display:"flex",
        flexDirection:"column",
        height: "100%",
        width: "100%",
        bgcolor: "background.dark",
        color: "secondary.main",
      }}
    >
      <Typography variant="h3" sx={{ mt: 2, textAlign: "center" }}>
        <strong>Information</strong>
      </Typography>
      <Typography sx={{ mt: 2}}>
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
  );
};

export default Info;