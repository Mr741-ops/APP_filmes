import { Box, Typography } from "@mui/material";
import { Button, useGetOne } from "react-admin";
import * as Poster from "../Home_page/poster";
import { useHandleClick } from "../Utils/Utils"

type Props = {
  series: any;
  id: any;
};

export const Body = ({ series, id }: Props) => {
  const handleClick = useHandleClick();

  const { data, isLoading, error } = useGetOne(
    "movie",
    {
      id,
      meta: { type: "credits" },
    },
    {
      enabled: !!id, 
    },
  );

  if (!id) return <Typography>Erro: ID não definido</Typography>;
  if (isLoading) return <Typography>A carregar...</Typography>;
  if (error) return <Typography>Erro ao carregar os dados.</Typography>;
  if (!data) return <Typography>Nenhum dado encontrado.</Typography>;


  return (
    <Box
      className="Biography"
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "secondary.main",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        mx: "50px",
        textWrap: "wrap",
      }}
    >
      <Typography variant="h3" sx={{ mt: 7, textWrap: "wrap" }}>
        <strong>Overview</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 7, textAlign: "justify" }}>
        {series.overview}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <strong>Cast</strong>:{"\n"}
        {data.cast.map((actor: any, index: number) => (
          <Box>
            <Button onClick={() => handleClick("actor_page", actor?.id)}>
              <Typography
                key={index}
                sx={{
                  ml: 2,
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                {Poster.miniMovieImage(actor.profile_path)}
                {actor.name}
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Body;
