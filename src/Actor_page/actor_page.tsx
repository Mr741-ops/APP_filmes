//merges every script that belgons on the actor page
import { Box, Typography } from "@mui/material";
import "./actor_page.css";
import useApiCall from "./apiCall";
import { useLocation } from "react-router-dom";

const ActorPage = () => {
  const location = useLocation();
  const resource = "person/";
  const id = location.state?.id;
  const { data } = useApiCall(resource, id);

  return (
    <>
      {data?.map((person) => (
        <Box
          className="Body"
          sx={{
            marginleft: "75px",
            marginright: "75px",
            display: "flex",
            flexDirection: "row",
            alignitems: "center",
            height: "100vh",

            "&.css-lqa328-MuiContainer-root": {
              maxwidth: "100vw",
            },
          }}
        >
          <Box className="Image-Box">
            <Typography variant="h3"> {person.name} </Typography>
            <img src="src/Actor_page/Tom_Hanks.jpg" className="image"></img>
          </Box>
          <Box
            className="Biography"
            sx={{
              height: "500px",
              width: "700px",
              padding: "10px",
              bgcolor: "red",
            }}
          >
            {person.overview}
          </Box>
          <Box className="Info">
            <Typography variant="h3" sx={{ mt: 2 }}>
              Information
            </Typography>
            <Typography sx={{ mt: 2 }}>
              also_known_as: Thomas Jeffrey Hanks
            </Typography>
            <Typography sx={{ mt: 2 }}>birthday: 1956-07-09</Typography>
            <Typography sx={{ mt: 2 }}>gender: male</Typography>
            <Typography sx={{ mt: 2 }}>known_for_department: Acting</Typography>
            <Typography sx={{ mt: 2 }}>
              place_of_birth: Concord,California, USA
            </Typography>
            <Typography></Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default ActorPage;
