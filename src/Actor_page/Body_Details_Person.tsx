import { Box, Typography } from "@mui/material";
import { useGetOne } from "react-admin";
import Carroussel from "../Utils/Carroussel";
import { useTranslation } from "react-i18next";

type Props = {
  person: any;
  id: any;
};

export const Body = ({ person, id }: Props) => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useGetOne(
    "person",
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
      <Typography variant="h3" sx={{ mt: 4 }}>
        <strong>{t('Biography')}</strong>
      </Typography>
      <Typography variant="body1" sx={{ mt: 5, textAlign: "justify" }}>
        {person.biography}
      </Typography>
      <Carroussel
        title={t('Titles')}
        items={data.cast.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          imagePath: movie.poster_path,
          navigateTo: "movie_page",
        }))}
        size={900}
      />
    </Box>
  );
};

export default Body;
