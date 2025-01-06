export interface ApiResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}

export interface PokemonModel {
    id: number;
    name: string
    url: string
}