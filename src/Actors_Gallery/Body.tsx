import { Box } from "@mui/material";
import React from "react";
import { Button } from "react-admin";
import useApiCall from "../Data/apiCall";
import { CustomDialog } from "./dialog_Box";
import * as Poster from "./actor_image";

interface Props {
  resource: string;
  page: number;
}

interface Person {
  id: number;
  name: string;
  poster_path: string;
  biography: string;
}

const Body: React.FC<Props> = ({ resource, page }) => {
  const { data } = useApiCall(resource, page);

  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(null);

  const handleClickOpen = (person: Person) => () => {
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setSelectedPerson(null);
  };

  return (
    <React.Fragment>
      <Box className="container" 
      sx={{
        
          display: "flex",
          justifycontent: "center",
          aligncontent: "center",
          alignitems: "center",
          gap: "10px",
          flexWrap: "wrap",
          width: "88vw",
          maxwidth: "100%",
          padding: "20px 0",

          "&.MuiContainer-root": {
            maxheight: "fit-content",
          } ,
      }}>
        {data.map((person) => (
          <Box key={person.id}>
            <Button variant="outlined" onClick={handleClickOpen(person)} sx={{
              width:"360px",
            }}>
              <Box
                className="movie-item">
                {Poster.poster(person.profile_path, person.name, person.id)}
              </Box>
            </Button>
          </Box>
        ))}
      </Box>
      <CustomDialog selectedPerson={selectedPerson} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default Body;
