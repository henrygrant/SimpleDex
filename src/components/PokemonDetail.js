import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Details = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  display: grid;
  grid-template-rows: auto minmax(0,1fr);
  grid-template-areas: "detailContainer"
                       "infoContainer"
`

const DetailContainer = styled.div`
  grid-area: detailContainer;
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  margin-top: 1rem;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
`

const Type = styled.div`
  display: flex;
  justify-content: center;
`

const SpriteContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

const Sprite = styled.img`
  width: 50%;
  @media only screen and (max-width: 985px) {
    width: 25%;
  }
`

const Vitals = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`

const Abilities = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`

const InfoContainer = styled.div`
  grid-area: infoContainer;
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(0,1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  padding: 1rem;
  height: 100%;
`

const Info = styled.div`
  border: 1px solid white;
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    width: 100%;
    text-align:center;
  }
`

const InfoTitle = styled.div`
  font-weight: bold;
  margin-bottom: .5rem;
`

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: white;
  }
`


const PokemonDetail = props => {
  return (
    <>
    {props.selectedPokemon.id ? 
      <Details>
        <DetailContainer>
          <Name>
            {"#" + props.selectedPokemon.id + ' ' + props.selectedPokemon.name}
          </Name>
          <Type>
            {props.selectedPokemon.types.map(T => T.type.name).join('/')}
          </Type> 
          <SpriteContainer>
            <Sprite 
              src={props.selectedPokemon.sprites.front_default} alt="pokemon"   
            />
          </SpriteContainer>
          <Vitals>
            <div><b>Height:</b> {props.selectedPokemon.height}</div>
            <div><b>Weight:</b> {props.selectedPokemon.weight}</div>
          </Vitals>
          <Abilities>
            <b>Abilities:&nbsp;</b> {props.selectedPokemon.abilities.map(T => T.ability.name).join(', ')}
          </Abilities>
        </DetailContainer>
        <InfoContainer>
          <Info>
            <table>
              <thead>
                <tr>
                  <th>Stat</th>
                  <th>Base Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>exp</td>
                  <td>{props.selectedPokemon.base_experience}</td>
                </tr>
                {props.selectedPokemon.stats.map(S => 
                  <tr key={S.stat.name}>
                    <td>{S.stat.name}</td>
                    <td>{S.base_stat}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Info>
          <Info>
            <InfoTitle>Moves</InfoTitle>
            {props.selectedPokemon.moves.map(T => <div key={T.move.name}>{T.move.name}</div>)}
          </Info>
        </InfoContainer>
      </Details> :
      <Placeholder>
        <h1>SimpleDex</h1>
        <p>This is a simple project showing off data from <a href="http://pokeapi.co">PokéAPI</a> using React and Redux.</p>
        <p>Click a pokemon to get started!</p>
      </Placeholder> 
    }
    </>
    )
}

export default connect(state => ({selectedPokemon: state.selectedPokemon}))(PokemonDetail)
