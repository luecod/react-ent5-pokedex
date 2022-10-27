import React from 'react'
import './styles/pokeHeader.css'

const PokeHeader = () => {
  return (
    <div className='pkHeader'>
      <div className='pkHeader__red'>
        <div className='pkHeader__black'></div>
        <img className='pkHeader__img' src="/images/home/pokedex.png" alt="" />
        <div className='pkHeader__circle'>
          <div className='pkHeader__circle-int'></div>
        </div>
      </div>
    </div>
  )
}

export default PokeHeader