import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Nav from './components/Nav'
import './App.css'
import Pokemon from './components/Pokemon'


const App = ({ types, pokemons }) => {
	return (
		<div className="App">
			<h1>Pokedex</h1>
      			<div className="App-header">
					<div className="nav">
						<Route path='/'>
							<Nav types={types}/>
						</Route>
					  </div>
					<div className="pokemons">
						{
							types.map( type => {
								let filteredPokemons = pokemons.filter(pokemon => {
									return pokemon.types.includes(type.name)
								})
								return(
								<Route path={'/Types/' + type.name}>
									<Pokemon pokemon={filteredPokemons}/>
								</Route>)
							})
						}
					</div>
      			</div>
    		</div>
	)
}

const mapSTateToProps = state => {
	return {
		types: state.types,
		pokemons: state.pokemons
	}
}

export default connect(mapSTateToProps)(App);