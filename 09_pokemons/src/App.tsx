import './App.css'
import {PokemonModel} from "./Models.ts";
import {useEffect, useState} from "react";
import api from "./Api.ts";
import {Pokemon} from "./Pokemon.tsx";

const Statistics = ({pokemons, total}: { pokemons: PokemonModel[], total: number }) => {
    return (
        <div className="row">
            <div className="col text-center">
                <p>Loaded {pokemons.length} pokemons from {total}</p>
            </div>
        </div>
    )
}

const Pokemons = ({pokemons, onLoadMoreClick}: { pokemons: PokemonModel[], onLoadMoreClick: () => void }) => {
    return (
        <div className="row">
            {pokemons.map((pokemon: PokemonModel) => <Pokemon key={pokemon.name} pokemon={pokemon}/>)}
            <div className="col-2">
                <p onClick={onLoadMoreClick}>Load More</p>
            </div>
        </div>
    )
}

const App = () => {

    const [pokemons, setPokemons] = useState<PokemonModel[]>([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            const data = await api.getPokemons(offset, limit);

            setPokemons([...pokemons, ...data.results]);
            setTotal(data.count);
        }

        fetch();
    }, [offset, limit]);

    return (
        <>
            <Statistics pokemons={pokemons} total={total}/>
            <Pokemons pokemons={pokemons} onLoadMoreClick={() => setOffset(offset + limit)}/>
        </>
    )
}

export default App
