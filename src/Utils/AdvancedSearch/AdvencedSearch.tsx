import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import getGenres from "../../Data/advancedSearchProvider";
import { useGetList } from "react-admin";

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

  let endpoint;

  if (resource === "advancedSearchMovies") endpoint = "discover/movie";
  else endpoint = "discover/tv";

  const { data = [], isLoading } = useGetList(
    endpoint,
    {
      pagination: { page: page, perPage: 10 },
      filter: searchParams ?? "",
    },
  );

  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<string>("");
  const [minRating, setMinRating] = useState<string>("");
  const [avgRating, setAvgRating] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [originCountry, setOriginCountry] = useState<string>("");

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
      if (selectedGenres)
        [query.append("with_genres", selectedGenres.join(","))];
      if (year && year.length == 4) [query.append("first_air_date_year", year)];
      if (minRating && minRating.length < 3)
        [query.append("vote_average.gte", minRating)];
      if (avgRating && avgRating.length < 3)
        [query.append("vote_average.gte", minRating)];
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
            label="Genre"
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
          <InputLabel id="sort-by-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            label="Sort By"
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
          <InputLabel id="sort-by-label">Origin Country</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={originCountry}
            label="Origin Country"
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
          label="Year"
          placeholder="Year"
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
          label="Average Rating"
          placeholder="Average Rating"
          variant="outlined"
          disabled={disabled}
          value={avgRating}
          onChange={(e) => setAvgRating(e.target.value)}
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
        />
      </Grid>

      <Grid>
        <TextField
          label="Minimum Rating"
          placeholder="Minimum Rating"
          variant="outlined"
          disabled={disabled}
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
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
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
