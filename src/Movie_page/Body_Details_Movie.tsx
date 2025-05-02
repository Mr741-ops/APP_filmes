import { Box, Typography } from "@mui/material";
import { useGetOne } from "react-admin";
import Carroussel from "../Utils/Carroussel";

type Props = {
  movie: any;
  id: any;
};

export const Body = ({ movie, id }: Props) => {
  const { data, isLoading, error } = useGetOne(
    "movie",
    {
      id,
      meta: { type: "credits" },
    },
    {
      enabled: !!id, // só faz a query se o id estiver definido
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
        {movie.overview}
      </Typography>
      <Carroussel
        title="Cast"
        items={data.cast.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
        }))}
        size={900}
      />
    </Box>
  );
};

export default Body;
