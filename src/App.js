import React from 'react'
import { connect } from 'react-redux'
import PokemonTable from './components/PokemonTable'
import PokemonDetail from './components/PokemonDetail'
import './App.css'

const App = props => {
  return (
    <>
    {props.isFetching ? 
      <div className="loaderContainer">
        <div className="loader" />
      </div> :
      <div className="app">
        <div className="tableContainer">
          <PokemonTable />
        </div>
        <div className="detailContainer">
          <PokemonDetail />
        </div>
      </div>
    }
    </>
    
  )
}

export default connect(state => ({isFetching: state.isFetching}))(App)
