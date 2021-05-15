import React from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
    return (
        <div className='types'>
            {
                props.types.map( type => {
                    return <Link to={'/Types/' + type.name}><button className='typeBtn'>{type.name}</button></Link>
                })
            }
        </div>
    )
}

export default Nav
