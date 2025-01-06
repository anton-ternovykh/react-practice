export const PokemonImage = ({id}: { id: number }) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <>
            <img src={imageUrl} alt="PokeAPI image"/>
        </>
    )
}