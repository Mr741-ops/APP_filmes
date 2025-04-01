import { Box } from "@mui/material";

export const poster = (profile_Path: string, name: string, id: any) => {
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const imageUrl = profile_Path
    ? `${baseUrl}${profile_Path}`
    : `${fallbackImage}`;

  return (
    <Box className="movie-item" key={id}>
      <img src={imageUrl} className="person_Image" />
      <h3>{name}</h3>
    </Box>
  );
};

export const personImage = (profile_Path: string) => {
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const imageUrl = profile_Path
    ? `${baseUrl}${profile_Path}`
    : `${fallbackImage}`;

  return (
      <img src={imageUrl} className="movie-poster" />
  );
};

export default poster;
