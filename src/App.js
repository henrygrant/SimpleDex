import React from 'react'
import PokemonTable from './components/PokemonTable'
import PokemonDetail from './components/PokemonDetail'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="tableContainer">
        <PokemonTable />
      </div>
      <div className="detailContainer">
        <PokemonDetail />
      </div>
    </div>
  );
}

export default App
