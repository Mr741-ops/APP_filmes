import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";


export const Body = (movie: any) => {

    return(
        <Grid
          className="Biography"
          sx={{
            height: "500px",
            width: "700px",
            color: "secondary.main",
            textAlign:"center"
          }}
        >
          <Typography variant="h3" sx={{ mt:7}}>
            <strong>Overview</strong>
          </Typography>
          <Typography variant="body1" sx={{ mt:7}} >{movie.overview}</Typography>
        </Grid>
    );
}

export default Body;