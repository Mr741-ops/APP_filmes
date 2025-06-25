import { useGetList } from "react-admin";
import { useEffect, useState } from "react";
import { Box, CircularProgress, InputAdornment, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  profile_path?: string;
}

interface SearchBarProps {
  onResults: (results: SearchResult[] | null) => void;
  resource: string;
}

export const Search_Bar = ({ onResults, resource }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  const { data = [], isLoading } = useGetList(
    resource,
    {
      pagination: { page: 1, perPage: 10 },
      filter: { query: inputValue },
    },
    {
      enabled: inputValue.length >= 1,
    },
  );

  let placeHolder;

  switch (resource) {
    case "search/movie":
      placeHolder = t("searchBars.MovieSearchBar");
      break;
    case "search/tv":
      placeHolder = t("searchBars.SeriesSearchBar");
      break;
    case "search/person":
      placeHolder = t("searchBars.PeopleSearchBar");
      break;
  }

  useEffect(() => {
    if (inputValue.length > 1 && data) {
      onResults(data);
    } else if (inputValue.length <= 1) {
      onResults(null);
    }
  }, [data, inputValue, onResults]);

  return (
    <Box sx={{ width: 200, bgcolor: "secondary.main", borderRadius: 1 }}>
      <TextField
        placeholder={placeHolder}
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{
          width: 200,
          "& .MuiOutlinedInput-root": {
            height: 40,
            padding: 0,
          },
          "& .MuiAutocomplete-input": {
            padding: "8px 14px !important",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isLoading && <CircularProgress color="inherit" size={20} />}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search_Bar;
