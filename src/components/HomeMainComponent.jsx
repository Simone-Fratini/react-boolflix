import React from 'react'
import CardsComponent from './CardsComponent'


function HomeMainComponent() {
  return (
    <>
        <section>
            <h2 className='font-bold text-white text-3xl mb-5'>Movies</h2>
            <CardsComponent dataType={'movies'}/>
        </section>

        <section>
            <h2 className='font-bold text-white text-3xl mb-5 mt-24'>TV Series</h2>
            <CardsComponent dataType={'series'}/>
        </section>

        <section>
            <h2 className='font-bold text-white text-3xl mb-5 mt-24'>Top rated Movies</h2>
            <CardsComponent dataType={'topRatedMovies'}/>
        </section>

        <section>
            <h2 className='font-bold text-white text-3xl mb-5 mt-24'>Upcoming Movies</h2>
            <CardsComponent dataType={'upcomingMovies'}/>
        </section>
    </>
  )
}

export default HomeMainComponent