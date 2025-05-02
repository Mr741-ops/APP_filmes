import { Box, Typography } from "@mui/material";
import { useGetOne } from "react-admin";

type InfoProps = {
  person: any;
  id: any;
};

export const Info = ({ person, id }: InfoProps) => {
  const { data, isLoading, error } = useGetOne("person", {
    id,
    meta: { type: "movie_credits" },
  });

  if (!id) return <Typography>Error: ID not defined</Typography>;
  if (isLoading)
    return <Typography sx={{ color: "red" }}>Loading...</Typography>;
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
    <Box
      className="Info"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        height: "100%",
        width: "100%",
        bgcolor: "background.dark",
        color: "secondary.main",
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        <strong>Information</strong>
      </Typography>
      <Typography sx={{ mb: 2, textAlign: "justify"}}>
        <strong>Also known as</strong>: <br />
        {person.also_known_as.join(", \n") || "N/A"}
      </Typography>
      <Typography sx={{ mb: 2, textAlign: "justify" }}>
        <strong>Birthday</strong>: {person.birthday || "N/A"}
      </Typography>
      <Typography sx={{ mb: 2, textAlign: "justify" }}>
        <strong>Gender</strong>: {gender || "N/A"}
      </Typography>
      <Typography sx={{ mb: 2, textAlign: "justify" }}>
        <strong>Known for department</strong>:{" "}
        {person.known_for_department || "N/A"}
      </Typography>
      <Typography sx={{ mb: 2, textAlign: "justify" }}>
        <strong>Place of birth</strong>: {person.place_of_birth || "N/A"}
      </Typography>
      <Typography sx={{ mb: 2, textAlign: "justify" }}>
        <strong>Movies:</strong>
        {"\n"}
        {data.cast
          .map((movie: any) => movie.title)
          .slice(0, 4)
          .join("; ") || "N/A"}
      </Typography>
    </Box>
  );
};

export default Info;
