import {
    REQUEST_ALL_POKEMON,
    RECEIVE_ALL_POKEMON,
    SELECT_POKEMON,
    CHECK_POKEMON
} from './actionTypes'

const initialState = {
    pokemon: [],
    checkedPokemonIds: [],
    selectedPokemon: {},
    isFetching: false
}

const setChecked = (arr, val) => {
    let pokemon = arr.find(P => P.id === val)
    pokemon.checked = pokemon.checked ? false : true
    return arr
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALL_POKEMON: {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case RECEIVE_ALL_POKEMON: {
            return Object.assign({}, state, {
                isFetching: false,
                pokemon: action.pokemon
            })
        }
        case SELECT_POKEMON: {
            return Object.assign({}, state, {
                selectedPokemon: action.selectedPokemon
            })
        }
        case CHECK_POKEMON: {
            return Object.assign({}, state, {
                pokemon: setChecked(state.pokemon, action.checkedPokemonId)
            })
        }
        default:
            return state
    }
}