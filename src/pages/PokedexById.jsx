import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import PokeHeader from '../components/shared/PokeHeader'
import './styles/pokedexById.css'

const PokedexById = ({ }) => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }

  return (
    <article className='PkId'>
      <PokeHeader />
      <div className='PkId-container'>
        <header className={`PkId__header bg-${pokemon?.types[0].type.name}`}>
          <img
            className='PkId__header-img'
            src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='PkId__data'>
          <h2 className={`PkId__data__id letter-${pokemon?.types[0].type.name} border-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h2>
          <br />
          <h2 className={`PkId__data__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          <ul className='PkId__data__texture'>
            <li className='PkId__data__texture__weight'>
              <span className='PkId__data__texture__label'>Weight</span>
              <span className='PkId__data__texture__number'>{pokemon?.weight}</span>
            </li>
            <li className='PkId__data__texture__height'>
              <span className='PkId__data__texture__label'>Height</span>
              <span className='PkId__data__texture__number'>{pokemon?.height}</span>
            </li>
          </ul>
          <div className='PkId__data-attributes'>
            <div className='PkId__data__types'>
              <span className='PkId__data__types-title'>Type</span>
              <ul className='PkId__data__types-container'>
                {
                  pokemon?.types.map(type => (
                    <li key={type.slot}
                      className={`PkId__data__types-element background-${type.type.name}`}>
                      {type.type.name}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='PkId__data__abilities'>
              <span className='PkId__data__abilities-title'>Abilities</span>
              <ul className='PkId__data__abilities-container'>
                {
                  pokemon?.abilities.map(ability => (
                    <li key={ability.ability.name} className='PkId__data__abilities-element'>
                      {ability.ability.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className='PkId__data__stats'>
            <h2 className='PkId__data__stats-title'>Stats</h2>
          </div>

          <ul className='PkId__data__stats-container'>
            {
              pokemon?.stats.map(stat => (
                <li key={stat.stat.name} className='PkId__data__stat'>
                  <div className='PkId__data__stat-label'>
                    <span className='PkId__data__stat-name'>
                      {
                        stat.stat.name === 'special-attack' ?
                          'Sp. atk'
                          :
                          stat.stat.name === 'special-defense' ?
                            'Sp. def'
                            :
                            stat.stat.name
                      }
                    </span>
                    <span className={`PkId__data__stat-number`}>{stat.base_stat}/150</span>
                  </div>
                  <div className={`progres__bar progres__bar-${
                    (Math.ceil((stat.base_stat * 100 / 150)*0.1))*10
                  }`}></div>
                </li>
              ))
            }
          </ul>
        </section>
        <section className='PkId__moves'>
          <div className='PkId__moves-title'>
            <h2 className='PkId__moves-title-label'>Movements</h2>
          </div>
          <ul className='PkId__moves-container'>
            {
              pokemon?.moves.map(move => (
                <li className='PkId__moves__item' key={move.move.url}>
                  <span className='PkId__moves__item-name'>{move.move.name}</span>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </article>

  )
}

export default PokedexById