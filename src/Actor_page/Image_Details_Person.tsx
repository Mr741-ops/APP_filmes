import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        alignContent: "baseline",
      }}
    >
      <Typography variant="h3" sx={{ mt: 2 }}>
        {person.name}
      </Typography>
      {Poster.personImage(person.profile_path)}
    </Box>
  );
};

export default Image;