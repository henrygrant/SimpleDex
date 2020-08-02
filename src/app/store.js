import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokemonReducer from '../features/pokemon/pokemonSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer
  },
});
