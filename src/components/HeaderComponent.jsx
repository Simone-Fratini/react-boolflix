import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

function HeaderComponent() {

    const { setSearch, setSelectedGenre } = useContext(MainContext);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const genre = formData.get("genres");
        const search = formData.get("search");
        console.log("Genere ", genre);
        console.log("campodi ricerca:", search);
        setSelectedGenre(genre);
        setSearch(search);
    };

    return (
        <header className='bg-black text-white border-b-2 border-red-600 sticky top-0 z-10'>
            <div className='ml-5 mr-5 p-4 flex flex-col items-center md:flex-row md:items-center md:justify-between'>
                {/* Logo */}
                <div className='flex gap-4'>
                    <img src="/netlixLogo.png" alt="Netflix Logo" className="w-24 h-auto" />
                    <nav className='pl-12'>
                        <ul className='flex items-center gap-4 text-gray-300'>
                            <li>
                                <a href="#" className='hover:text-red-600'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-red-600'>Movies</a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-red-600'>Series</a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-red-600'>New & Popular</a>
                            </li>
                            <li>
                                <a href="#" className='hover:text-red-600'>My List</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                
                {/* Form */}
                <form onSubmit={handleSubmit} className='flex items-center flex-col gap-4 mt-4 md:mt-0 md:flex-row'>
                    {/* Generi tendina */}
                    <select name="genres" id="genres" className='p-1 rounded bg-gray-800 text-white border border-gray-600' defaultValue="all" >
                        <option value="all">Tutti i generi</option>
                        <option value="animazione">Animazione</option>
                        <option value="azione">Azione</option>
                        <option value="horror">Horror</option>
                    </select>
                    <div className='flex items-center gap-2'>
                        {/* search */}
                        <input type='text' name="search" className='p-1 rounded bg-gray-800 text-white border border-gray-600' placeholder='Search' />

                        {/* submit */}
                        <button type="submit" className='p-1 pr-2 pl-2 rounded bg-red-600 text-white font-bold hover:bg-red-700' >
                            Cerca
                        </button>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default HeaderComponent;
