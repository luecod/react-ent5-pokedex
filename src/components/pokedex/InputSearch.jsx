import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form className='poke__aside__form' onSubmit={submit}>
      <input className='poke__aside__form-input' id='search' type="text" placeholder='Search a pokemon' />
      <button className='poke__aside__form-btn'>Search</button>
    </form>
  )
}

export default InputSearch