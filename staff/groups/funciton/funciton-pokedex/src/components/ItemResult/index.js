import React from 'react'
import './index.sass'
import {getPokemonId} from '../../utils'


class ItemResult extends React.Component {


    retrieveDataFromItem = (query) => {
        this.props.onGoToDetails(this.props.pokemonName)
    }

    render(){

        const {props: {stringPokemonId, pokemonName}} = this
        let pokemonId = getPokemonId(stringPokemonId)
        const source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

        return <div onClick={this.retrieveDataFromItem} className="card pokemonCard">
            <img src={source} className="card-img-top"/>

            {/* <img className="pokemonCard__pokeball" src="https://cdn4.iconfinder.com/data/icons/pokemon-go/512/Pokemon_Go-01-128.png"/> */}
            
                <p className="card-text">{pokemonName.toUpperCase()}</p>
                <button onClick={this.retrieveDataFromItem} className="btn btn-danger pokemonCard__details">More</button>
        </div>
    }
}


export default ItemResult