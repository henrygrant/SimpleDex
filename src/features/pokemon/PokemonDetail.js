import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectEntities,
  fetchAllPokemon
} from './pokemonSlice';
import styles from './PokemonTable.module.css';


export function PokemonTable() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAllPokemon()), [dispatch])
  const pokemon = useSelector(selectEntities);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>Number</th>
          <th>Name</th>
          <th>Type</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Base Exp</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map(P => 
          <tr key={P.id} className={styles.row}>
            <td>
              <input type='checkbox'></input>
            </td>
            <td>{P.id}</td>
            <td>{P.name}</td>
            <td>{P.types.map(T => T.type.name).join('/')}</td>
            <td>{P.height}</td>
            <td>{P.weight}</td>
            <td>{P.base_experience}</td>
          </tr>
        )}
      </tbody>
      
      
    </table>
  );
}
