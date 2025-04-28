import { Autocomplete, TextField, CircularProgress, Box } from "@mui/material";
import { useState } from "react";
import { useGetList } from "react-admin";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { data = [], isLoading } = useGetList(
    "search/multi",
    {
      pagination: { page: 1, perPage: 10 },
      filter: { query: inputValue },
    },
    {
      enabled: inputValue.length > 1,
    }
  );

  const handleSelect = (option: any) => {
    if (!option || !option.id) return;

    if (option.media_type === "person") {
      navigate(`/actor_page`, { state: { id: option.id } });
    } else if (option.media_type === "movie") {
      navigate(`/movie_page`, { state: { id: option.id } });
    } else if(option.media_type==="tv") {
      navigate(`/tv_series_page`, { state: { id: option.id } });
    }
  };

  console.log(data)
  return (
    
    <Box sx={{ width: 300 }}>
      <Autocomplete
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={data.slice(0, 5)}
        getOptionLabel={(option) => option.name || option.title || "No title"}
        loading={isLoading}
        onInputChange={(_, newValue) => setInputValue(newValue)}
        onChange={(_, selectedOption) => handleSelect(selectedOption)}
        sx={{
          height:"48px",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search movies, actors..."
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}
