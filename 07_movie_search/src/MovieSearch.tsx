import {MovieModel} from "./models/models.ts";
import {useEffect, useState} from "react";
import {useMovieSearch} from "./UseMovieSearch.tsx";

export const MovieSearch = ({onSearchComplete, onSearchError}:
                            {
                                onSearchComplete: (result: MovieModel[]) => void,
                                onSearchError: (error: string) => void,
                            }) => {

    const [searchInput, setSearchInput] = useState('')
    const {movies, setSearchTerm, error} = useMovieSearch();

    useEffect(() => {
        if (onSearchComplete)
            onSearchComplete(movies);
    }, [onSearchComplete, movies]);

    useEffect(() => {
        if (onSearchError)
            onSearchError(error);
    }, [onSearchError, error]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchTerm(searchInput)
        setSearchInput('');
    }

    return (
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="Search by title"
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}