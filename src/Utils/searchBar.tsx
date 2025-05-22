import { useGetList } from "react-admin";
import { useEffect, useState } from "react";
import { Box, CircularProgress, InputAdornment, TextField } from "@mui/material";

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  profile_path?: string;
  media_type?: "movie" | "tv" | "person";
}

interface SearchBarProps {
  onResults: (results: SearchResult[] | null) => void;
  resource: string;
}

export const Search_Bar = ({ onResults, resource }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const { data = [], isLoading } = useGetList(
    resource,
    {
      pagination: { page: 1, perPage: 10 },
      filter: { query: inputValue },
    },
    {
      enabled: inputValue.length > 1,
    },
  );

  let placeHolder;

  switch (resource) {
    case "search/movie":
      placeHolder = "Search movies";
      break;
    case "search/tv":
      placeHolder = "Search series";
      break;
    case "search/person":
      placeHolder = "Search people";
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
    <Box sx={{ width: 200, bgcolor: "primary.light", borderRadius: 1 }}>
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
