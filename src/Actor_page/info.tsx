import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useGetOne } from "react-admin";

type InfoProps = {
  person: any;
  id: any;
};


export const Info = ({ person, id }: InfoProps) => {

  const { data, isLoading, error } = useGetOne("person", {
      id,
      meta: {type: "movie_credits"},
    });
  
    if (!id) return <Typography>Error: ID not defined</Typography>;
    if (isLoading) return <Typography sx={{color:'red'}}>Loading...</Typography>;
    if (error) return <Typography>Error loading data.</Typography>;
    if (!data) return <Typography>Data not found.</Typography>;



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
        <strong>Also known as</strong>: <br/>
        {person.also_known_as.join(", \n")}
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
      <Typography sx={{ mt: 2, whiteSpace:"pre-line" }}>
        <strong>Movies:</strong>{"\n"}
        {data.cast.map((movie: any) => movie.title).slice(0,4).join("; ")}
      </Typography>
    </Grid>
  );
};

export default Info;
