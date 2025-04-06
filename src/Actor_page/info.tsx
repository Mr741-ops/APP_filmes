import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Info = (person: any) => {
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
        <strong>Also known as</strong>: {person.also_known_as}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Birthday</strong>: {person.birthday}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Gender</strong>: {gender}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Known for department</strong>: {person.known_for_department}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Place of birth</strong>: {person.place_of_birth}
      </Typography>
    </Grid>
  );
};

export default Info;
