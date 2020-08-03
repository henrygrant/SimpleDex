import {
    REQUEST_ALL_POKEMON,
    RECEIVE_ALL_POKEMON,
    SELECT_POKEMON,
    CHECK_POKEMON,
    SET_API_ERROR
} from './actionTypes'

const initialState = {
    pokemon: [],
    selectedPokemon: {},
    isFetching: false,
    apiError: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALL_POKEMON: {
            return {
                ...state,
                isFetching: true
            }
        }
        case RECEIVE_ALL_POKEMON: {
            return {
                ...state,
                isFetching: false,
                pokemon: action.pokemon
            }
        }
        case SELECT_POKEMON: {
            return {
                ...state,
                selectedPokemon: action.selectedPokemon
            }
        }
        case CHECK_POKEMON: {
            const pokemon = [...state.pokemon]
            const poke = pokemon.find(P => P.id === action.checkedPokemonId)
            if(poke) poke.checked = !poke.checked
            return {
                ...state,
                pokemon: pokemon
            }
        }
        case SET_API_ERROR: {
            return {
                ...state,
                apiError: true,
                isFetching: false
            }
        }
        default:
            return state
    }
}