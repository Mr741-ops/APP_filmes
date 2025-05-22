import { Box, Typography } from "@mui/material";
import * as Poster from "../Actors_Gallery/actor_image";

export const Image = (person: any) => {
  let gender;
  switch (person.gender) {
    case 0: {
      gender = "Not Specified";
      break;
    }
    case 1: {
      gender = "Female";
      break;
    }
    case 2: {
      gender = "Male";
      break;
    }
    case 3: {
      gender = "Non Binary";
      break;
    }
  }

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
      <Box
        className="Info"
        sx={{
          color: "secondary.main",
        }}
      >
        <Typography sx={{ mt: 6 }}>
          <strong>Also known as</strong>:{" "}
          {person.also_known_as.join(", \n") ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Birthday</strong>: {person.birthday ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Gender</strong>: {gender ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Known for department</strong>:{" "}
          {person.known_for_department ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Place of birth</strong>: {person.place_of_birth ?? "N/A"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Image;
