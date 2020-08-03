import getAllPokemon from '../pokemonAPI'

export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON"
function requestAllPokemon() {
    return {
        type: REQUEST_ALL_POKEMON
    }
}

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
function receiveAllPokemon(json) {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon: json
    }
}

export const SELECT_POKEMON = "SELECT_POKEMON"
export function selectPokemon(pokemon) {
    return {
        type: SELECT_POKEMON,
        selectedPokemon: pokemon
    }
}

export function fetchAllPokemon() {
    return function(dispatch) {
        dispatch(requestAllPokemon())
        return getAllPokemon().then(response => dispatch(receiveAllPokemon(response)))
    }
}