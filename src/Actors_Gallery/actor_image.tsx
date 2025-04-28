import { Box, Typography } from "@mui/material";

export const poster = (profile_Path: string, name: string, id: any) => {
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const imageUrl = profile_Path
    ? `${baseUrl}${profile_Path}`
    : `${fallbackImage}`;

  return (
    <Box
      className="item"
      key={id}
      sx={{
        flexshrink: 0,
        height: "585px",
        width: "320px",
        textalign: "center",
        color: "secondary.main",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        className="image"
        sx={{ pl:"10px", mt:"20px", height: "475px", width: "100%" }}
      />
      <Typography variant="h5">{name}</Typography>
    </Box>
  );
};

export const personImage = (profile_Path: string) => {
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const imageUrl = profile_Path
    ? `${baseUrl}${profile_Path}`
    : `${fallbackImage}`;

  return( 
    <img src={imageUrl} className="movie-poster" style={{
          width: "100%",
          height: "525px",
          objectFit: "cover",
          display: "block",
        }}/>
);
};

export default poster;
