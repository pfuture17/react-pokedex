import React from 'react'
import './Cards.css'
import Description from './Description'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const Cards = (props) => {
    return (
        <div className='cards'>
            <Link to={'/Types/' + props.pokemon.types[0] + '/' + props.pokemon.name}>
                <h1>{props.pokemon.name}</h1>
                <img src={props.pokemon.img} />
            </Link>
                    {
                        props.pokemon.types.map(type => {
                            return <h5>{type}</h5>
                        })
                    }
            <Route exact path={'/Types/' + props.pokemon.types[0] + '/' + props.pokemon.name}>
			    <Description pokemon = {props}/>
			</Route>
        </div>
    )
}

export default Cards