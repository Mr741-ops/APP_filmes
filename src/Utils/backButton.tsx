import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        width: 150,
        height: 40,
        bgcolor: "primary.main",
        color: "secondary.main",
        position: "fixed",
        left: 10,
        top: 60,
      }}
    >
      Go Back
    </Button>
  );
};

export default BackButton;
