import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("all");
    
    
    const contextValue = {
        movies,
        setMovies,
        series,
        setSeries,
        loading,
        setLoading,
        error,
        setError,
        search,
        setSearch,
        selectedGenre,
        setSelectedGenre,
    };
    
    
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: 'a', include_adult: 'false', language: 'it-IT', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjM5ODIzNGUzODYzYTQ0MWRkZDQyZjZmMjU1MmZlOCIsIm5iZiI6MTczNjg0NDM3OC45MDgsInN1YiI6IjY3ODYyNDVhYmQ3OTNjMDM1NDRlZjRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6xTjc29zsvFHyDvYg025GsXFvcdKitBKqiEOwrpMlkU'
        }
    };

        axios
            .request(options)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);


    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };
