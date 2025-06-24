import { Box, Button, Typography } from "@mui/material";
import { useHandleClick } from "./Utils";
import * as Poster from "../Home_page/poster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1530,
      settings: { slidesToShow: 4, slidesToScroll: 4 },
    },
    {
      breakpoint: 1435,
      settings: { slidesToShow: 3, slidesToScroll: 3 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 2, slidesToScroll: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
  nextArrow: (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        right: "-10px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(-150%)",
      }}
    />
  ),
  prevArrow: (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "-10px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderRadius: "50%",
        cursor: "pointer",
        color: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(-150%)",
      }}
    />
  ),
};

type CarrousselItem = {
  id: any;
  title: string;
  imagePath: string;
  navigateTo: string;
  character?: string;
};

type Props = {
  title: string;
  items: CarrousselItem[];
  size: number;
};

export const Carroussel = ({ title, items, size }: Props) => {
  const handleClick = useHandleClick();

  const dynamicSettings = {
    ...settings,
    slidesToShow: Math.min(items.length, settings.slidesToShow),
    slidesToScroll: Math.min(items.length, settings.slidesToScroll),
  };

  if (!items || items.length === 0) return null;
  else {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, color: "secondary.main" }}>
          <strong>{title}</strong>
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "100vh",
            overflow: "hidden",
            mx: "auto",
            px: { xs: 1, sm: 2, md: 5 },
            ".slick-slide": {
              padding: "0 4px",
              display: "flex",
              justifyContent: "center",
            },
            ".slick-track": {
              display: "flex",
            },
          }}
        >
          <Slider {...dynamicSettings}>
            {items.map((item, index) => (
              <Box key={index}>
                <Button
                  onClick={() => handleClick(item.navigateTo, item.id)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "140px",
                      height: "auto",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.navigateTo === "actor_page"
                      ? Poster.miniPersonImage(item.imagePath)
                      : Poster.miniMovieImage(item.imagePath)}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ mt: 1, color: "secondary.main" }}
                  >
                    <strong> {item.title} </strong> <br />
                    {item.character ? `(${item.character}) ` : ""}
                  </Typography>
                </Button>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    );
  }
};
export default Carroussel;
