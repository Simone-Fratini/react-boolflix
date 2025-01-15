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

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;
    
    
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
        const optionsMoviesTV = {
            url: API_URL,
            params: {
                api_key: API_KEY,
                query: search || "a",
            }
        };
        
    

        Promise.all([
            axios.get(optionsMoviesTV.url + '/search/movie', optionsMoviesTV),
            axios.get(optionsMoviesTV.url + '/search/tv', optionsMoviesTV),
        ])
            .then(([resMovie, resSeries]) => {
                setMovies(resMovie.data.results);
                setSeries(resSeries.data.results);
                console.log(movies);
            })
            .catch((err) => {
                console.error("error:", err);
                setError("Failed to fetch media data.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [ search ]);


    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };
