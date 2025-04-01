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

  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(
    null,
  );

  const handleClickOpen = (person: Person) => () => {
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setSelectedPerson(null);
  };

  return (
    <React.Fragment>
      <Box className="container">
        {data.map((person) => (
          <Box key={person.id}>
            <Button variant="outlined" onClick={handleClickOpen(person)}>
              <Box
                className="movie-item"
                /* sx={{
                  flexshrink: 0,
                  height: "585px",
                  width: "300px",
                  textalign: "center",
                  color: "#e6e8e6",
                }} */
              >
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
