import React from 'react';
import { connect } from 'react-redux'
import styles from './PokemonDetail.module.css';


const PokemonDetail = props => {
  return (
    <>
    {props.selectedPokemon.id ? 
      <div className={styles.details}>
        <div className={styles.detailContainer}>
          <div className={styles.name}>
            {"#" + props.selectedPokemon.id + ' ' + props.selectedPokemon.name}
          </div>
          <div className={styles.type}>
            {props.selectedPokemon.types.map(T => T.type.name).join('/')}
          </div> 
          <div className={styles.sprite}>
            <img 
              src={props.selectedPokemon.sprites.front_default} alt="pokemon"   
            />
          </div>
          <div className={styles.vitals}>
            <div><b>Height:</b> {props.selectedPokemon.height}</div>
            <div><b>Weight:</b> {props.selectedPokemon.weight}</div>
          </div>
          <div className={styles.abilities}>
            <b>Abilities:&nbsp;</b> {props.selectedPokemon.abilities.map(T => T.ability.name).join(', ')}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
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
            
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>Moves</div>
            {props.selectedPokemon.moves.map(T => <div key={T.move.name}>{T.move.name}</div>)}
          </div>
        </div>
      </div>
    : <div /> }
    </>
    );
}

export default connect(state => ({selectedPokemon: state.selectedPokemon}))(PokemonDetail)
