import React from 'react'
import CardsComponent from './CardsComponent'

function SeriesComponent() {
  return (
    <section>
      <h2 className='font-bold text-white text-3xl mb-5 mt-24'>TV Series</h2>
      <CardsComponent dataType={'tvseries'}/>
    </section>
  )
}

export default SeriesComponent