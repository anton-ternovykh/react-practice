import {useEffect, useState} from "react";
import {MovieModel} from "./models/models.ts";
import api from "./Api.tsx";

export const useMovieSearch = () => {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await api.getMovies(searchTerm)
                setMovies(response.results);
                setError('');
            } catch (e: { message: string }) {
                setError(e.message);
                setMovies([]);
            }
        }

        fetch();
    }, [searchTerm])

    return {
        movies,
        setSearchTerm,
        error
    }
}