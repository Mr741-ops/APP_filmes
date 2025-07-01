import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import getGenres from "../../Data/advancedSearchProvider";
import { useGetList } from "react-admin";
import { useTranslation } from "react-i18next";

interface Genre {
  id: number;
  name: string;
}

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  profile_path?: string;
}

interface AdvancedSearchProps {
  disabled?: boolean;
  onResults: (results: SearchResult[] | null) => void;
  page: number;
  resource: string;
}

export const AdvancedSearch = ({
  disabled = false,
  onResults,
  page,
  resource,
}: AdvancedSearchProps) => {
  const [searchParams, setSearchParams] = useState<string | null>(null);
  const { t } = useTranslation();

  let endpoint;

  if (resource === "advancedSearchMovies") endpoint = "discover/movie";
  else endpoint = "discover/tv";

  const { data = [], isLoading } = useGetList(endpoint, {
    pagination: { page: page, perPage: 10 },
    filter: searchParams ?? "",
  });

  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<string>("");
  const [minRating, setMinRating] = useState<string>("");
  const [avgRating, setAvgRating] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [originCountry, setOriginCountry] = useState<string>("");
  const [adultContent, setAdultContent] = useState(false);
  const label = { inputProps: { "aria-label": "Adult Content" } };

  useEffect(() => {
    if (data && data.length > 0) {
      onResults(data);
    }
  }, [data, onResults]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const result = await getGenres(resource);
        setGenres(result.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const queryBuild = () => {
    const query = new URLSearchParams();

    if (resource === "advancedSearchMovies") {
      [query.append("include_adult", String(adultContent))];
      if (selectedGenres)
        [query.append("with_genres", selectedGenres.join(","))];
      if (year && year.length == 4)
        [query.append("primary_release_year", year)];
      if (minRating && minRating.length < 3)
        [query.append("vote_average.gte", minRating)];
      if (avgRating && avgRating.length < 3)
        [query.append("vote_average.gte", avgRating)];
      if (sortBy) [query.append("sort_by", sortBy)];
      if (originCountry) [query.append("with_origin_country", originCountry)];
    } else if (resource === "advancedSearchSeries") {
      [query.append("include_adult", String(adultContent))];
      if (selectedGenres)
        [query.append("with_genres", selectedGenres.join(","))];
      if (year && year.length == 4) [query.append("first_air_date_year", year)];
      if (minRating && minRating.length < 3)
        [query.append("vote_average.gte", minRating)];
      if (avgRating && avgRating.length < 3)
        [query.append("vote_average.gte", avgRating)];
      if (sortBy) [query.append("sort_by", sortBy)];
      if (originCountry) [query.append("with_origin_country", originCountry)];
    }
    return query.toString();
  };

  const handleChangeGenres = (event: SelectChangeEvent<number[]>) => {
    setSelectedGenres(event.target.value as number[]);
  };

  const handleSearch = () => {
    const builtQuery = queryBuild();
    if (!builtQuery || builtQuery == searchParams) return;
    onResults(null);
    setSearchParams(builtQuery);
  };

  const handleChangeAdult = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdultContent(event.target.checked);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        maxWidth: "100vw",
        justifyContent: "center",
      }}
    >
      <Grid
        sx={{
          height: "45px",
        }}
      >
        <Stack direction="row" color="secondary.main" alignItems="center">
          <Typography>{t("advancedSearch.AdultContent")}</Typography>
          <Switch
            {...label}
            checked={adultContent}
            onChange={handleChangeAdult}
          />
        </Stack>
      </Grid>
      <Grid>
        <FormControl
          fullWidth
          sx={{
            width: 200,
            bgcolor: "primary.dark",
            borderRadius: 1,
            height: "100%",
            "& .MuiOutlinedInput-root": {
              height: 45,
              padding: 0,
            },
            "& .MuiInputLabel-root": {
              color: "secondary.main",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
          disabled={disabled}
        >
          <InputLabel id="genres-select-label">Genre</InputLabel>
          <Select
            multiple
            labelId="genres-select-label"
            id="genres-select"
            value={selectedGenres}
            label={t("advancedSearch.Genre")}
            onChange={handleChangeGenres}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid>
        <FormControl
          fullWidth
          sx={{
            width: 200,
            bgcolor: "primary.dark",
            borderRadius: 1,
            height: "100%",
            "& .MuiOutlinedInput-root": {
              height: 45,
              padding: 0,
            },
            "& .MuiInputLabel-root": {
              color: "secondary.main",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
          disabled={disabled}
        >
          <InputLabel id="sort-by-label">
            {t("advancedSearch.SortBy")}
          </InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            label={t("advancedSearch.SortBy")}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="popularity.desc">Decrescent</MenuItem>
            <MenuItem value="popularity.asc">Ascendent</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid>
        <FormControl
          fullWidth
          sx={{
            width: 200,
            bgcolor: "primary.dark",
            borderRadius: 1,
            height: "100%",
            "& .MuiOutlinedInput-root": {
              height: 45,
              padding: 0,
            },
            "& .MuiInputLabel-root": {
              color: "secondary.main",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
          disabled={disabled}
        >
          <InputLabel id="sort-by-label">
            {t("advancedSearch.OriginCountry")}
          </InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={originCountry}
            label={t("advancedSearch.OriginCountry")}
            onChange={(e) => setOriginCountry(e.target.value)}
          >
            <MenuItem value="PT">Portugal</MenuItem>
            <MenuItem value="GB">United Kingdom</MenuItem>
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="BR">Brazil</MenuItem>
            <MenuItem value="FR">France</MenuItem>
            <MenuItem value="DE">Germany</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid>
        <TextField
          label={t("advancedSearch.ReleaseYear")}
          placeholder={t("advancedSearch.ReleaseYear")}
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          sx={{
            width: 200,
            bgcolor: "primary.dark",
            borderRadius: 1,
            color: "secondary.main",
            height: "100%",
            "& .MuiOutlinedInput-root": {
              height: 45,
              padding: 0,
            },
            "& .MuiInputLabel-root": {
              color: "secondary.main",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
          disabled={disabled}
        />
      </Grid>

      <Grid>
        <TextField
          label={t("advancedSearch.AverageRating")}
          placeholder={t("advancedSearch.AverageRating")}
          variant="outlined"
          disabled={disabled || !!minRating}
          value={avgRating}
          onChange={(e) => setAvgRating(e.target.value)}
          sx={{
            width: 150,
            bgcolor: "primary.dark",
            borderRadius: 1,
            height: "100%",
            "& .MuiOutlinedInput-root": {
              height: 45,
              padding: 0,
            },
            "& .MuiInputLabel-root": {
              color: "secondary.main",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
        />
      </Grid>

      <Grid>
        <TextField
          label={t("advancedSearch.MinimumRating")}
          placeholder={t("advancedSearch.MinimumRating")}
          variant="outlined"
          disabled={disabled || !!avgRating}
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          sx={{
            width: 150,
            bgcolor: "primary.dark",
            borderRadius: 1,
            height: "100%",
            "& .MuiOutlinedInput-root": {
              height: 45,
              padding: 0,
            },
            "& .MuiInputLabel-root": {
              color: "secondary.main",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "secondary.main",
            },
          }}
        />
      </Grid>

      <Grid>
        <Button
          disabled={disabled ?? isLoading}
          variant="contained"
          onClick={handleSearch}
          sx={{
            height: 45,
          }}
        >
          {t("misc.Search")}
        </Button>
      </Grid>
    </Grid>
  );
};
