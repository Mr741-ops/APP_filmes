import { Box } from "@mui/material";
import { BODY_PARTS } from "./HangedmanBodyParts"

type HangedmanDrawingProps ={
  numberOfGuesses: number
}

export function HangedmanDrawing({ numberOfGuesses }: HangedmanDrawingProps ) {
  return (
    <Box sx={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <Box
        sx={{
          height: "50px",
          width: "10px",
          bgcolor: "secondary.main",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <Box
        sx={{
          height: "10px",
          width: "200px",
          bgcolor: "secondary.main",
          ml: "120px",
        }}
      />
      <Box
        sx={{
          height: "400px",
          width: "10px",
          bgcolor: "secondary.main",
          ml: "120px",
        }}
      />
      <Box sx={{ height: "10px", width: "250px", bgcolor: "secondary.main" }} />
    </Box>
  );
}

export default HangedmanDrawing;
