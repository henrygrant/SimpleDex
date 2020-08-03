import getAllPokemon from '../pokemonAPI'
import {
    REQUEST_ALL_POKEMON,
    RECEIVE_ALL_POKEMON,
    SELECT_POKEMON,
    CHECK_POKEMON
} from './actionTypes'

function requestAllPokemon() {
    return {
        type: REQUEST_ALL_POKEMON
    }
}

function receiveAllPokemon(data) {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon: data
    }
}

export function selectPokemon(pokemon) {
    return {
        type: SELECT_POKEMON,
        selectedPokemon: pokemon
    }
}

export function checkPokemon(id) {
    return {
        type: CHECK_POKEMON,
        checkedPokemonId: id
    }
}

export function fetchAllPokemon() {
    return function(dispatch) {
        dispatch(requestAllPokemon())
        return getAllPokemon()
        .then(data => dispatch(receiveAllPokemon(data)))
    }
}