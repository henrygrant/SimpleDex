import { createSlice } from '@reduxjs/toolkit';
import fetchPokemon from '../../pokemonAPI'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    entities: [],
  },
  reducers: {
    setPokemon: (state, action) => {
      state.entities = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

export const fetchAllPokemon = () => dispatch => {
  fetchPokemon().then(ret => dispatch(setPokemon(ret)))
};

export const selectEntities = state => state.pokemon.entities;

export default pokemonSlice.reducer;
