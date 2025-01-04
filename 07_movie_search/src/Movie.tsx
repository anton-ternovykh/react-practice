import {MovieModel} from "./models/models.ts";
import {MoviePoster} from "./MoviePoster.tsx";

export const Movie = ({movie}: { movie: MovieModel }) => {

    return (
        <div className="col-4">
            <div className="card mb-3">
                <div className="card-header">
                    {movie.title} ({movie.release_date})
                </div>
                <div className="card-body">
                    <MoviePoster poster_path={movie.poster_path}/>
                    {movie.overview}
                </div>
                <div className="card-footer text-end">
                    {movie.adult && (<span className="badge rounded-pill bg-warning">Adult Movie</span>)}
                    <span className="badge rounded-pill bg-primary">{movie.vote_average}</span>
                </div>
            </div>
        </div>
    )
}