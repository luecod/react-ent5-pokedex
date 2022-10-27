import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import PokeHeader from '../components/shared/PokeHeader'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])



  const userName = useSelector(state => state.userName)

  // paginacion
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(16)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage


  return (
    <div className='poke'>
      <PokeHeader />
      <div className='poke_content'>
        <header className='poke__header'>
          <p className='poke__header-p'><span className='poke__header-user'>Welcome {userName}.</span> Here you can find your favorite pokemon.</p>
        </header>
        <aside className='poke__aside'>
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
        </aside>
        <main className='poke__main'>
          <div className='card-container'>
            {
              pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                <CardPoke
                  key={pokemon.url}
                  url={pokemon.url}
                />
              ))
            }
          </div>
        </main>
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default Pokedex