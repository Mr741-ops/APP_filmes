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
import { useTranslation } from "react-i18next";

interface DialogProps {
  selectedMovie: any | null;
  handleClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    overflow:"hidden"
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    backgroundColor: "#010d22",
    color: "#e6e8e6",
  },
}));

export function CustomDialog({ selectedMovie, handleClose }: DialogProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const movieDetailsPage = (id: number | undefined) => {
    navigate("/movie_page", { state: { id: id } });
    handleClose();
  };

  return (
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
          color:"secondary.main"
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {selectedMovie?.title}
      </DialogTitle>
      <DialogContent
        sx={{
          maxHeight: "555px",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            maxHeight: "555px",
            mb:0
          }}
        >
          <Grid
            size={5}
            sx={{
              maxWidth: "342px",
              height: "555px",
              overflow: "hidden",
            }}
          >
            {Poster.movieImage(selectedMovie?.poster_path ?? "")}
          </Grid>
          <Grid size={7}>
            <Box sx={{height:"288px"}}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  textAlign: "center",
                }}
              >
                <strong>{t('Overview')}</strong>
              </Typography>
              <Typography gutterBottom>
                {selectedMovie?.overview
                  ? `${selectedMovie.overview}`
                  : `The overview on this film is unavailable at the moment.`}
              </Typography>
              <Typography gutterBottom sx={{ mt: 5 }}>
                <strong>{t('ReleaseDate')}: </strong>
                {selectedMovie?.release_date}
              </Typography>
            </Box>
            <DialogActions sx={{ justifyContent: "flex-end" }}>
              <Button
                autoFocus
                onClick={(event) => movieDetailsPage(selectedMovie?.id)}
                sx={{
                  bgcolor: "primary.main",
                  color: "secondary.main",
                  mt: 25,
                }}
              >
                {t('DetailsPage')}
              </Button>
            </DialogActions>
          </Grid>
        </Grid>
      </DialogContent>
    </BootstrapDialog>
  );
}
