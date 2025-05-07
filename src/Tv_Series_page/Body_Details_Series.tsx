import { Box, Typography } from "@mui/material";
import { useGetOne } from "react-admin";
import { Carroussel } from "../Utils/Carroussel";

type Props = {
  series: any;
  id: any;
};

export const Body = ({ series, id }: Props) => {
  const { data, isLoading, error } = useGetOne(
    "tv",
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

  console.log("Data: ", data);

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
      <Typography variant="h3" sx={{ mt: 4, textWrap: "wrap" }}>
        <strong>Overview</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 5, textAlign: "justify" }}>
        {series.overview}
      </Typography>
      <Carroussel
        title="Cast"
        items={data.cast.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
          character: person.character,
        }))}
        size={900}
      />
      <Carroussel
        title="Crew"
        items={data.crew.map((person: any) => ({
          id: person.id,
          title: person.name,
          imagePath: person.profile_path,
          navigateTo: "actor_page",
          character: person.job,
        }))}
        size={900}
      />
    </Box>
  );
};

export default Body;
