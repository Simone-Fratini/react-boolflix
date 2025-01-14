import React from 'react';

function HeaderComponent() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const genre = formData.get("genres");
        const search = formData.get("search");
        console.log("Genere ", genre);
        console.log("campodi ricerca:", search);
        
    };

    return (
        <header className='bg-black text-white'>
            <div className='container mx-auto p-4 flex items-center justify-between'>
                {/* Titolo */}
                <h1 className='text-4xl font-bold text-red-600'>BOOLFLIX</h1>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                    {/* Generi tendina */}
                    <select name="genres" id="genres" className='p-1 rounded bg-gray-800 text-white border border-gray-600' defaultValue="all" >
                        <option value="all">Tutti i generi</option>
                        <option value="animazione">Animazione</option>
                        <option value="azione">Azione</option>
                        <option value="horror">Horror</option>
                    </select>
                    
                    {/* search */}
                    <input type='text' name="search" className='p-1 rounded bg-gray-800 text-white border border-gray-600' placeholder='Search' />

                    {/* submit */}
                    <button type="submit" className='p-1 pr-2 pl-2 rounded bg-red-600 text-white font-bold hover:bg-red-700' >
                        Cerca
                    </button>
                </form>
            </div>
        </header>
    );
}

export default HeaderComponent;
