import { Box, Typography } from "@mui/material";

export const poster = (posterPath: string, title: string, id: any) => {
  const fallbackImage = "src/Utils/film_not_found.png";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const isFallback = !posterPath;
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <Box
      className="item"
      key={id}
      sx={{
        flexShrink: 0,
        textAlign: "center",
        height: "585px",
        width: "320px",
        color: "secondary.main",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        className="image"
        sx={{
          pl: "10px",
          mt: "20px",
          height: "475px",
          width: isFallback ? "320px" : "100%",
        }}
      />
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export const movieImage = (posterPath: string) => {
  const fallbackImage = "src/Utils/film_not_found.png";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const isFallback = !posterPath;
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <img
      src={imageUrl}
      className="movie-poster"
      style={{
        width: "100%",
        maxWidth: isFallback ? "342px" : "none",
        height: "525px",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
};

export const miniMovieImage = (posterPath: string) => {
  const fallbackImage = "src/Utils/person.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342";
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <Box
      component="img"
      src={imageUrl}
      alt="Poster"
      style={{
        width: "100%",
        height: "230px",
        objectFit: "cover",
        borderRadius: "8px",
        display: "block",
      }}
    />
  );
};

export const miniPersonImage = (posterPath: string) => {
  const fallbackImage = "src/Utils/person.jpg";
  const baseUrl = "https://image.tmdb.org/t/p/w185/";
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : fallbackImage;

  return (
    <Box
      component="img"
      src={imageUrl}
      alt="Profile"
      sx={{
        width: "140px",
        height: "200px",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
};

export default poster;
