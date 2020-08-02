import fetchPokemon from '../pokemonAPI'

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

export function fetchAllPokemon() {
    return function(dispatch) {
        dispatch(requestAllPokemon())
        return fetchPokemon().then(response => dispatch(receiveAllPokemon(response)))
    }
}
