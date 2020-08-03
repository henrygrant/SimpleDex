import React from 'react';
import { connect } from 'react-redux'
import { selectPokemon } from '../redux/actions'
import styles from './PokemonTable.module.css'

const PokemonTable = props => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>H</th>
            <th>W</th>
            <th>Base XP</th>
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
    </div>
  )
}

export default connect(state => ({pokemon: state.pokemon}))(PokemonTable)
