import React from 'react'
import CardsComponent from './CardsComponent'

function Moviesomponent() {
  return (
    <section>
      <h2 className='font-bold text-white text-3xl mb-5'>Movies</h2>
      <CardsComponent dataType={'film'}/>
    </section>

  )
}

export default Moviesomponent