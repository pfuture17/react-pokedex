import React from 'react'
import Cards from './Cards'
import './Pokemons.css'

const Pokemon = (props) => {
    return (
        <div className='pokemon'>
            {
                props.pokemon.map(pokemon => {
                    return <Cards pokemon={pokemon}/>
                })
            }
            
        </div>
    )
}

export default Pokemon