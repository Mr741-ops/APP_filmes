import { Box } from "@mui/material";

const HEAD = (
  <Box
    sx={{
      width: "60px",
      height: "60px",
      borderRadius: "100%",
      bgcolor: "secondary.main",
      position: "absolute",
      top: "50px",
      right: "-25px",
    }}
  />
);
const BODY = (
  <Box
    sx={{
      width: "10px",
      height: "100px",
      bgcolor:"secondary.main",
      position: "absolute",
      top: "108px",
      right: 0,
    }}
  />
);
const RIGHT_ARM = (
  <Box
    sx={{
      width: "100px",
      height: "10px",
      bgcolor:"secondary.main",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate:"-30deg",
      transformOrigin:"left bottom"
    }}
  />
);
const LEFT_ARM = (
  <Box
    sx={{
      width: "100px",
      height: "10px",
      bgcolor:"secondary.main",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate:"30deg",
      transformOrigin:"right bottom"
    }}
  />
);
const RIGHT_LEG = (
  <Box
    sx={{
      width: "100px",
      height: "10px",
      bgcolor:"secondary.main",
      position: "absolute",
      top: "200px",
      right: "-90px",
      rotate:"60deg",
      transformOrigin:"left bottom"
    }}
  />
);
const LEFT_LEG = (
  <Box
    sx={{
      width: "100px",
      height: "10px",
      bgcolor:"secondary.main",
      position: "absolute",
      top: "200px",
      right: 0,
      rotate:"-60deg",
      transformOrigin:"right bottom"
    }}
  />
);

export const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]