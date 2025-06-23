import { fetchUtils } from "react-admin";

const API_URL = "https://api.themoviedb.org/3";
const auth_key = import.meta.env.VITE_API_KEY;

interface Genre {
  id: number;
  name: string;
}

interface GenreApiResponse {
  genres: Genre[];
}

const headers = new Headers({
  accept: "application/json",
  Authorization: `Bearer ${auth_key}`,
});

const getGenres = async (resource: string) => {
  const lang = localStorage.getItem("language") ?? "en";
  let endpoint;
  if (resource === "advancedSearchMovies") endpoint = "genre/movie/list";
  else endpoint = "genre/tv/list";

  const response = await fetchUtils.fetchJson(
    `${API_URL}/${endpoint}?language=${lang}`,
    {
      method: "GET",
      headers,
    }
  );

  return {
    data: response.json as GenreApiResponse,
  };
};

export default getGenres;
