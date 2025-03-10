// Script that fetchs information from the API

/* import { useEffect, useState } from "react"; */

const API_Key =  process.env.React_APP_API_KEY;
const base_URL =  process.env.React_APP_API_URL;
const endpoint = "movie/popular";
const lang = "pt-PT";
const page = 1;

const URL = `${base_URL}${endpoint}?api_key=${API_Key}&language=${lang}&page=${page}`;



export const fetchMovies = async () => {
    try{
        const result = await fetch(URL);
        const json = await result.json();
        return json.results;
    } catch (error) {
        console.error("Error fetching data:", error);

        return [];
    }
};

export default fetchMovies;