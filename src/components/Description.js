import './Description.css'

export const Description = ({pokemon}) => {
    return (
        <div className='description'>
            <p>{pokemon.pokemon.Description}</p>          
        </div>
        
    )
}

export default Description