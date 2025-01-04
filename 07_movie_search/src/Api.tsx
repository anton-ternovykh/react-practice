import axios from "axios";
import settings from "./settings.ts";
import {ApiResponse, MovieModel} from "./models/models.ts";

const getMovies = (searchTerm: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${settings.readAccessToken}`
        }
    };

    return axios.get<ApiResponse<MovieModel>>(url, options)
        .then((response) => response.data)
}


export default {
    getMovies: getMovies,
}