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

interface Genre {
  id: number;
  name: string;
}

export const AdvancedSearch = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<string>();
  const [minRating, setMinRating] = useState<string>();
  const [sortBy, setSortBy] = useState<string>("popularity.desc");

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

  const  queryBuild = () =>{
    const query = new URLSearchParams();

    if(selectedGenres)[
      query.append("with_genres", selectedGenres.join(","))
    ]
    if(year && year.length == 4)[
      query.append("primary_release_year", year)
    ]
    if(minRating && minRating.length < 3)[
      query.append("vote_average.gte", minRating)
    ]
    if(sortBy)[
      query.append("sortBy", sortBy)
    ]
    return query.toString();
  }

  const handleChangeGenres = (event: SelectChangeEvent<number[]>) => {
    setSelectedGenres(event.target.value as number[]);
  };

  const handleSearch = () => {
    const query = queryBuild();
    console.log("Query: ", query)
  }


  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: 2, width: "100%", maxWidth: "100%", flexWrap: "wrap" }}
    >
      <Grid>
        <FormControl fullWidth sx={{ minWidth: 200, bgcolor:"secondary.main", borderRadius: 1 }}>
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
        <FormControl fullWidth sx={{ minWidth: 200,  bgcolor:"secondary.main", borderRadius: 1 }}>
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
          sx={{ minWidth: 120, bgcolor:"secondary.main", borderRadius:1}}
        />
      </Grid>

      <Grid>
        <TextField
          label="Min. Rating"
          placeholder="Minimum Rating"
          variant="outlined"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          sx={{ minWidth: 150, bgcolor:"secondary.main", borderRadius:1}}
        />
      </Grid>

      <Grid>
        <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          height: "100%",
          minHeight:40
        }}

        >
          
        </Button>
      </Grid>
    </Grid>
  );
};
