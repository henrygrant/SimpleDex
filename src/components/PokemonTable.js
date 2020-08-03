import React from 'react';
import { connect } from 'react-redux'
import { selectPokemon, checkPokemon } from '../redux/actions'
import Checkbox from './Checkbox'
import styled from 'styled-components'

const TableContainer = styled.div`
  overflow: auto;
  height: 100%;
  border: solid 1px white;

  table {
    border-collapse: collapse;
    width: 100%;

    td {
      text-align: center;
    }

    tr {
      cursor: pointer;
      
      &:hover {
        background-color: white;
        color: darkslategrey;
      }

      &.checked:not(:hover) {
        background-color: #5d8675;
      }
    }
  }
`


const PokemonTable = props => {
  
  return (
    <TableContainer>
      <table>
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
        <tbody>
          {props.pokemon.map(P => 
            <tr 
              key={P.id}
              onClick={(e) => {
                if(![
                  e.target.parentElement.parentElement.tagName, 
                  e.target.parentElement.parentElement.parentElement.tagName
                ].includes('LABEL')) props.dispatch(selectPokemon(P))
              }}
              className={P.checked ? 'checked' : ''}
            >
              <td>
              <label>
                <Checkbox
                  checked={!!P.checked}
                  onChange={() => { props.dispatch(checkPokemon(P.id))}}
                />
              </label>

                
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
    </TableContainer>
  )
}

export default connect(state => ({pokemon: state.pokemon}))(PokemonTable)
