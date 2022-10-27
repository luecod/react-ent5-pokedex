import React from 'react'
import { Link } from 'react-router-dom'
import PokeHeader from '../shared/PokeHeader'
import './styles/pokemon404.css'

const Pokemon404 = () => {
  return (
    <article className='notFound'>
      <PokeHeader />
      <section className='notFound__content'>
        <img className='notFound__img' src="/images/pokedex/Cover.png" alt="" />
        <h1 className='notFound__tittle'>Pokemon not found 😥</h1>
        <Link className='notFound__return' to='/pokedex'>Return to Pokedex</Link>
      </section>
    </article>
  )
}

export default Pokemon404