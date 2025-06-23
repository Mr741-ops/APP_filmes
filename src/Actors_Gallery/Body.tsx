import { Box } from '@mui/material';
import React from 'react';
import { Button, Loading, useGetList } from 'react-admin';
import { CustomDialog } from './dialog_Box';
import * as Poster from './actor_image';

interface Props {
  resource: string;
  page: number;
  data?: Person[] | null;
}

interface Person {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
}

const Body: React.FC<Props> = ({ resource, page, data: searchData }) => {
  const shouldFetch = !searchData;

  const {
    data: fetchedData,
    error,
    isPending
  } = useGetList(
    `person/${resource}`,
    {
      pagination: {
        page: page,
        perPage: 0
      }
    },
    {
      enabled: shouldFetch
    }
  );

  const displayData = searchData || fetchedData || [];
  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(null);

  const handleClickOpen = (person: Person) => () => {
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setSelectedPerson(null);
  };

  if (shouldFetch && isPending) {
    return <Loading />;
  }
  if (shouldFetch && error) {
    return <p>Error</p>;
  }

  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
        width: "88vw",
        maxWidth: "100%",
        padding: "20px 0",

        '&.MuiContainer-root': {
          maxheight: 'fit-content'
        }
      }}
    >
      {displayData.map(person => (
        <Box key={person.id}>
          <Button
            variant="outlined"
            onClick={handleClickOpen(person)}
            sx={{
              width: "360px",
              bgcolor: "primary.dark",
            }}
          >
            <Box className="movie-item">{Poster.poster(person.profile_path, person.name, person.id)}</Box>
          </Button>
        </Box>
      ))}
      <CustomDialog selectedPerson={selectedPerson} handleClose={handleClose} />
    </Box>
  );
};

export default Body;
