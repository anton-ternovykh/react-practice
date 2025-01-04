import {useState} from 'react'
import './App.css'
import {MovieModel} from "./models/models.ts";
import {Header} from "./Header.tsx";
import {MovieSearch} from "./MovieSearch.tsx";
import {ErrorContainer} from "./ErrorContainer.tsx";
import {Movies} from "./Movies.tsx";

const App = () => {

    const [movies, setMovies] = useState<MovieModel[]>([])
    const [error, setError] = useState('')

    return (
        <div>
            <Header/>
            <MovieSearch onSearchComplete={(movies => setMovies(movies))}
                         onSearchError={(error) => setError(error)}/>
            <ErrorContainer errorMessage={error}/>
            <Movies movies={movies}/>
        </div>
    )
}

export default App
