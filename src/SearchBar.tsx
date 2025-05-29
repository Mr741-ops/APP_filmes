import { Autocomplete, TextField, CircularProgress, Box } from "@mui/material";
import { useState } from "react";
import { useGetList } from "react-admin";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data = [], isLoading } = useGetList(
    "search/multi",
    {
      pagination: { page: 1, perPage: 20 },
      filter: { query: inputValue },
    },
    {
      enabled: inputValue.length >= 1,
    }
  );

  const handleSelect = (option: any) => {
    if (!option || !option.id) return;

    if (option.media_type === "person") {
      navigate(`/actor_page`, { state: { id: option.id } });
    } else if (option.media_type === "movie") {
      navigate(`/movie_page`, { state: { id: option.id } });
    } else if (option.media_type === "tv") {
      navigate(`/tv_series_page`, { state: { id: option.id } });
    }
  };

  return (
    <Box sx={{ width: 300, bgcolor: "secondary.main", borderRadius: 1 }}>
      <Autocomplete
        open={open && data.length > 0}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={data.slice(0, 5)}
        getOptionLabel={(option) => option.name ?? option.title ?? "No title"}
        loading={isLoading}
        onInputChange={(_, newValue) => setInputValue(newValue)}
        onChange={(_, selectedOption) => handleSelect(selectedOption)}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: 40,
            padding: 0,
          },
          "& .MuiAutocomplete-input": {
            padding: "8px 14px !important",
          },
        }}
        renderOption={(props, option) => {
          let prefix = "";
          if (option.media_type === "movie") prefix = "Movies: " ;
          else if (option.media_type === "tv") prefix = "Series: ";
          else if (option.media_type === "person") prefix = "Person: ";

          const label = option.name ?? option.title ?? "No title";

          return (
            <li {...props} key={option.id}>
              {prefix}
              {label}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={t("AppBarSearchBar")}
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
