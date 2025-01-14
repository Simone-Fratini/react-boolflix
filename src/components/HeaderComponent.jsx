import React from 'react'

function HeaderComponent() {
  return (
    <header className='bg-black'>
        <div className='container mx-auto p-4 flex items-center justify-between'>
            <h1 className='text-4xl font-bold text-red-600'>BOOLFLIX</h1>
            <div>
                
                <input type='text' className='' placeholder='Search' />
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent