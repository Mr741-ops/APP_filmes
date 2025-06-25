import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        width: 125,
        height: 40,
        bgcolor: "primary.main",
        color: "secondary.main",
        position: "fixed",
        left: 10,
        top: 60,
      }}
    >
      {t("navigation.GoBackButton")}
    </Button>
  );
};

export default BackButton;
