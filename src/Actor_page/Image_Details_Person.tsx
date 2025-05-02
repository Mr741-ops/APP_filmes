import { Box, Typography } from "@mui/material";
import * as Poster from "../Actors_Gallery/actor_image";

export const Image = (person: any) => {
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
      <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        {person.name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {Poster.personImage(person.profile_path)}
      </Box>
    </Box>
  );
};

export default Image;
