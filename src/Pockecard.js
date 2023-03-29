import React, {Component} from 'react'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pockecard extends Component{
    render(){
        let imgSrc = `${POKE_API}back/${this.props.id}.png`
        return(
            <div className='Pockecard'>
                <h1>{this.props.name}</h1>
                <img src='{imgSrc}'/>
            </div>
        )
    }
}

export default Pockecard