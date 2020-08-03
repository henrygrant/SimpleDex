import React from 'react';
import { selectPokemon } from '../../redux/actions'
import styles from './PokemonTable.module.css';
import { connect } from 'react-redux'


const PokemonTable = (props) => {
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
      <tbody className={styles.tbody}>
        {props.pokemon.map(P => 
          <tr 
            key={P.id} 
            className={styles.row}
            onClick={() => props.dispatch(selectPokemon(P))}
          >
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

export default connect(state => ({pokemon: state.pokemon}))(PokemonTable)
