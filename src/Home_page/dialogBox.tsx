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

interface DialogProps {
  selectedMovie: any | null;
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

export function CustomDialog({ selectedMovie, handleClose }: DialogProps) {
  const navigate = useNavigate();

  const movieDetailsPage = (id: number | undefined) => {
    navigate("/movie_page", { state: { id: id } });
    handleClose();
  };

  const overview = selectedMovie?.overview
    ? `${selectedMovie.overview}`
    : `The overview on this film is unavailable at the moment try again later.`;

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={Boolean(selectedMovie)}
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
          {selectedMovie?.title}
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid size={5}>
              {Poster.movieImage(selectedMovie?.poster_path ?? "")}
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{overview}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={(event) => movieDetailsPage(selectedMovie?.id)}
            sx={{ color: "#0081a7" }}
          >
            Details page
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
