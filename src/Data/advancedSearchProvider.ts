import { fetchUtils } from "react-admin";

const API_URL = "https://api.themoviedb.org/3";
const auth_key = import.meta.env.VITE_API_KEY;

const headers = new Headers({
  accept: "application/json",
  Authorization: `Bearer ${auth_key}`,
});

const getGenres = (resource: string) => {
    const lang = localStorage.getItem("language") ?? "en";
    const response = fetchUtils
      .fetchJson(`${API_URL}/${resource}?language=${lang}`, {
        method: "GET",
        headers,
      })
      .then(({ json }) => ({
        data: json,
      }));
    return {
      data: response,
    };
};

export default getGenres;