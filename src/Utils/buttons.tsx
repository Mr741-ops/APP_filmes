import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

interface ButtonsProps {
  page: number;
  setPage: (value: (prev: number) => number) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ page, setPage }) => {
  const { t } = useTranslation();

  const incrementPage = (): void => {
    setPage((prev) => prev + 1);
  };

  const decreasePage = (): void => {
    if (page != 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          justifycontent: "space-evenly",
          gap: 1,
          height: "100%",
          maxHeight: "40px",
        }}
      >
        <Button
          variant="contained"
          onClick={decreasePage}
          disabled={page <= 1}
          sx={{
            "&.Mui-disabled": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {t("navigation.PreviousPage")}
        </Button>
        <Box
          sx={{
            width: "20%",
            bgColor: "background.dark",
            textAlign: "center",
          }}
        >
          <TextField
            label={t("navigation.Page")}
            value={page}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value) && value >= 1) {
                setPage(() => value);
              } else {
                setPage(() => 1);
              }
            }}
            sx={{
              color: "secondary.dark",
              width: "100%",
              height: "100%",
              bgcolor: "primary.dark",
              textAlign: "center",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                height: 40,
                padding: 0,
              },
              "& .MuiInputLabel-root": {
                color: "secondary.main",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "secondary.main",
              },
            }}
          ></TextField>
        </Box>
        <Button variant="contained" onClick={incrementPage}>
          {t("navigation.NextPage")}
        </Button>
      </Grid>
    </Box>
  );
};

export default Buttons;
