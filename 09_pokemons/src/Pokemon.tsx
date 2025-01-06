import {PokemonModel} from "./Models.ts";
import {PokemonImage} from "./PokemonImage.tsx";

export const Pokemon = ({pokemon}: { pokemon: PokemonModel }) => {
    return (
        <div className="col-2 mb-2">
            <div className="card">
                <div className="card-header">
                    {pokemon.name}
                </div>
                <div className="card-body">
                    <PokemonImage id={pokemon.id}/>
                </div>
            </div>
        </div>
    )
}