import { Box } from "@mui/material";

export const poster = (posterPath: string, title: string, id: any) => {
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <Box className="movie-item" key={id} sx={{
      ".movie-poster": {
        marginTop: "20px",
        height: "475px",
        width: "100%",
      }
    }}>
      <img src={imageUrl} className="movie-poster" />
      <h3>{title}</h3>
    </Box>
  );
};

export const movieImage = (posterPath: string) =>{
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <img src={imageUrl} className="movie-poster" />
  );
};

export default poster;
