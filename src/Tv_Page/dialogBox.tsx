import * as React from "react";
import * as Poster from "./poster";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

interface DialogProps {
  selectedSeries: any | null;
  handleClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    backgroundColor: "#010d22", // Change background color
    color: "#e6e8e6", // Change text color
  },
}));

export function CustomDialog({ selectedSeries, handleClose }: DialogProps) {
  const navigate = useNavigate();

  const tvSeriesDetailsPage = (id: number | undefined) => {
    navigate("/tv_series_page", { state: { id: id } });
    handleClose();
  };

  const overview = selectedSeries?.overview
    ? `${selectedSeries.overview}`
    : `The overview on this series is unavailable at the moment try again later.`;

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={Boolean(selectedSeries)}
        maxWidth="md"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(8px)",
            },
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {selectedSeries?.name}
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid
              size={5}
              sx={{
                maxWidth: "342px",
                height: "525px",
                overflow: "hidden",
              }}
            >
              {Poster.movieImage(selectedSeries?.poster_path ?? "")}
            </Grid>
            <Grid size={7}>
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <strong>Overview</strong>
                </Typography>
                <Typography gutterBottom sx={{ textAlign:"justify"}}>{overview}</Typography>
                <Typography gutterBottom>
                  <strong>Release date: </strong>
                  {selectedSeries?.first_air_date}
                </Typography>
              </Box>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={(event) => tvSeriesDetailsPage(selectedSeries?.id)}
                  sx={{  bgcolor:"primary.main", color: "secondary.main", position: 'fixed', bottom: '180px',}}
                >
                  Details page
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
