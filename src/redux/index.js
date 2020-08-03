import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import { fetchAllPokemon } from './actions'

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    ),
)
store.dispatch(fetchAllPokemon())
export default store
