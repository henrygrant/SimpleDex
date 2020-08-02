const initialState = {
    pokemon: [],
    selectedPokemon: [],
    detailedPokemon: {},
    isFetching: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_POKEMON': {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case 'RECEIVE_ALL_POKEMON': {
            return Object.assign({}, state, {
                isFetching: false,
                pokemon: action.pokemon
            })
        }
        default:
            return state;
    }
}