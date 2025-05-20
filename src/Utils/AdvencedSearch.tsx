import {
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useGetList } from "react-admin";
import getGenres from "../Data/advancedSearchProvider";

export const AdvancedSearch = () => {

  const { data: generes } = getGenres("genre/movie/list");

  console.log("Genres: ", generes)

  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<number>();
  const [minRating, setMinRating] = useState<number>();
  const [language, setLanguage] = useState<string>("en");
  const [sortBy, setSortBy] = useState<string>("popularity.desc");

  return (
    <Box>
      
    </Box>
  );
};
