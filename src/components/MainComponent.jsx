import React from 'react'
import MoviesComponent from './MoviesComponent'
import SeriesComponent from './SeriesComponent'

function MainComponent() {
  return (
    <main className='container mx-auto p-4 mt-11'>
        <MoviesComponent />
        <SeriesComponent />
    </main>
  )
}

export default MainComponent