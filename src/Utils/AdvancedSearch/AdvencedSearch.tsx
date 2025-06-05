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
}

export const AdvancedSearch = ({
  disabled = false,
  onResults,
}: AdvancedSearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data = [], isLoading } = useGetList(
    "discover/movie",
    {
      pagination: { page: 1, perPage: 10 },
      filter: searchQuery,
    },
    { enabled: !!searchQuery }
  );

  console.log("Data: ", data);

  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<string>("");
  const [minRating, setMinRating] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popularity.desc");

  useEffect(() => {
  if (data && data.length > 0) {
    onResults(data);
  }
}, [data, onResults]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const result = await getGenres("genre/movie/list");
        setGenres(result.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const queryBuild = () => {
    const query = new URLSearchParams();

    if (selectedGenres) [query.append("with_genres", selectedGenres.join(","))];
    if (year && year.length == 4) [query.append("primary_release_year", year)];
    if (minRating && minRating.length < 3)
      [query.append("vote_average.gte", minRating)];
    if (sortBy) [query.append("sortBy", sortBy)];
    return query.toString();
  };

  const handleChangeGenres = (event: SelectChangeEvent<number[]>) => {
    setSelectedGenres(event.target.value as number[]);
  };

  const handleSearch = () => {
    const builtQuery = queryBuild();
    onResults(null);
    setSearchQuery(builtQuery);
    console.log("Query:", builtQuery);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        maxWidth: "100%",
        flexWrap: "wrap",
        maxHeight: 40,
        minWidth: 200,
      }}
    >
      <Grid>
        <FormControl
          fullWidth
          sx={{
            minWidth: 200,
            bgcolor: "secondary.main",
            borderRadius: 1,
            height: "75%",
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
            minWidth: 200,
            bgcolor: "secondary.main",
            borderRadius: 1,
            height: "75%",
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
        <TextField
          label="Year"
          placeholder="Year"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          sx={{
            minWidth: 120,
            bgcolor: "secondary.main",
            borderRadius: 1,
            height: "75%",
          }}
          disabled={disabled}
        />
      </Grid>

      <Grid>
        <TextField
          label="Min. Rating"
          placeholder="Minimum Rating"
          variant="outlined"
          disabled={disabled}
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          sx={{
            minWidth: 150,
            bgcolor: "secondary.main",
            borderRadius: 1,
            height: "75%",
          }}
        />
      </Grid>

      <Grid>
        <Button
          disabled={disabled}
          variant="contained"
          onClick={handleSearch}
          sx={{
            height: "75%",
          }}
        >
          {" "}
          Search{" "}
        </Button>
      </Grid>
    </Grid>
  );
};
