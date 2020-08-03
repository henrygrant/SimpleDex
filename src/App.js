import React from 'react'
import { connect } from 'react-redux'
import PokemonTable from './components/PokemonTable'
import PokemonDetail from './components/PokemonDetail'
import styled, { keyframes } from 'styled-components'

// borrowed from Luke Haas at https://projects.lukehaas.me/css-loaders/
const rotate = keyframes` 
  0%,
  100%  {box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;}
  12.5% {box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;}
  25%   {box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;}
  37.5% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;}
  50%   {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;}
  62.5% {box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;}
  75%   {box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;}
  87.5% {box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;}
`

const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  div {
    color: #ffffff;
    font-size: 20px;
    margin: 100px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: ${rotate} 1.3s infinite linear;
    transform: translateZ(0);
  }
`

const Error = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr .5fr;
  grid-template-areas:  "table detail"
                        "table detail";
  @media only screen and (max-width: 985px) {
    grid-template-areas:  "detail detail"
                          "table table";
  }
`

const Section = styled.div`
  overflow-y: auto;
  margin: 1rem;
  height: calc(100% - 2rem);
  
  &:first-child {
    grid-area: table;
  }
  &:last-child {
    grid-area: detail
  }
`

const App = props => {
  return (
    <>
    {props.isFetching ? 
      <Loader>
        <div />
      </Loader> : 
      props.apiError ? 
      <Error>
        <div>There was an error fetching data from the API. Please try again later.</div>
      </Error> :
      <Container>
        <Section>
          <PokemonTable />
        </Section>
        <Section>
          <PokemonDetail />
        </Section>
      </Container>
    }
    </>
    
  )
}

export default connect(state => ({isFetching: state.isFetching, apiError: state.apiError}))(App)
