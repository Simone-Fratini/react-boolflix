import React from 'react'
import CardsComponent from './CardsComponent'


function HomeMainComponent() {
  return (
    <>
        <section>
            <h2 className='font-bold text-white text-3xl mb-5'>Movies</h2>
            <CardsComponent dataType={'film'}/>
        </section>

        <section>
            <h2 className='font-bold text-white text-3xl mb-5 mt-24'>TV Series</h2>
            <CardsComponent dataType={'tvseries'}/>
        </section>
    </>
  )
}

export default HomeMainComponent