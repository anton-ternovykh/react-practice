import {MovieModel} from "./models/models.ts";
import {Movie} from "./Movie.tsx";

export const Movies = ({movies}: { movies: MovieModel[] }) => {
    return (
        <div className="row mt-3">
            <div className="col-12">
                <i>Found {movies.length} movies</i>
            </div>
            <div className="col-12">
                <div className="row">
                    {movies.map((movie: MovieModel) => <Movie key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}