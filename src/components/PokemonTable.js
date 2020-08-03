import React from 'react';
import { connect } from 'react-redux'
import { selectPokemon, checkPokemon } from '../redux/actions'
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
        background-color: slategrey;
      }
    }
  }
`
const Checkbox = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;

  span {
    color: #34495E;
    padding: 0.5rem 0.25rem;
  }

  input {
    height: 25px;
    width: 25px;
    appearance: none;
    border: 1px solid #34495E;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: #41B883;
    cursor: pointer;

    &:checked + span::before {
      content: '\2713';
      display: block;
      text-align: center;
      color: #41B883;
      position: absolute;
      left: 0.7rem;
      top: 0.2rem;
    }

    &:active {
      border: 2px solid #34495E;
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
              onClick={() => props.dispatch(selectPokemon(P))}
              checked={P.checked}
              className={P.checked ? 'checked' : ''}
            >
              <td>
                <Checkbox>
                  <input 
                    type='checkbox' 
                    onChange={() => {props.dispatch(checkPokemon(P.id))}}
                  />
                </Checkbox>
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
