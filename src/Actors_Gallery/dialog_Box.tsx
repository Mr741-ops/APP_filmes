import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import * as Poster from "./actor_image";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

interface DialogProps {
  selectedPerson: any | null;
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
    backgroundColor: "#010d22",
    color: "#e6e8e6",
    minWidth: "900px",
  },
}));

export function CustomDialog({ selectedPerson, handleClose }: DialogProps) {
  const navigate = useNavigate();

  const personDetailsPage = (id: number | undefined) => {
    navigate("/actor_page", { state: { id: id } });
    handleClose();
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={Boolean(selectedPerson)}
      maxWidth="md"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
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
          color: "secondary.main",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ m: 0, p: 2 }} id="Person-name">
        {selectedPerson?.name}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid size={5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {Poster.personImage(selectedPerson?.profile_path ?? "")}
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
              }}
            >
              <strong>Details</strong>
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 3 }}>
              <strong>Original name:</strong> {selectedPerson?.original_name}
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              <strong>Known for department:</strong>{" "}
              {selectedPerson?.known_for_department}
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              <strong>Known for:</strong>
            </Typography>
            {selectedPerson?.known_for.map((movie: any, index: number) => (
              <Typography key={index} sx={{ ml: 2, flexWrap: "wrap" }}>
                - {movie.title};
              </Typography>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={(event) => personDetailsPage(selectedPerson?.id)}
          sx={{ color: "#0081a7" }}
        >
          Details page
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
