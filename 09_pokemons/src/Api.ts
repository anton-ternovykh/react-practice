import axios from "axios";
import {ApiResponse, PokemonModel} from "./Models.ts";

const getPokemons = (offset: number, limit: number) => {

    return axios.get<ApiResponse<PokemonModel>>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(res => {
            return {
                ...res.data,
                results: res.data.results.map((pokemon: PokemonModel, index: number) => {
                    pokemon.id = index + offset + 1;
                    return pokemon;
                }),
            } as ApiResponse<PokemonModel>
        });
}

export default {
    getPokemons: getPokemons,
}