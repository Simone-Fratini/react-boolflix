import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [UpcomingMovies, setUpcomingMovies] = useState([]);
    const [TopRatedMovies, setTopRatedMovies] = useState([]);
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
        trendingFilms,
        setTrendingFilms,
        UpcomingMovies,
        setUpcomingMovies,
        TopRatedMovies,
        setTopRatedMovies,
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
        const optionsTrendingMovies = {
            url: API_URL,
            params: {
                params: {language: 'en-US'},
                api_key: API_KEY,
        
            }
        };
        const optionsUpcomingMovies = {
            url: API_URL,
            params: {
                params: {language: 'en-US', page: '1'},
                api_key: API_KEY,
        
            }
        };

        const optionsTopRatedMovies = {
            url: API_URL,
            params: {
                params: {language: 'en-US', page: '1'},
                api_key: API_KEY,
        
            }
        };
        
    

        Promise.all([
            axios.get(optionsMoviesTV.url + '/search/movie', optionsMoviesTV),
            axios.get(optionsMoviesTV.url + '/search/tv', optionsMoviesTV),
            axios.get(optionsMoviesTV.url + '/trending/movie/week', optionsTrendingMovies),
            axios.get(optionsMoviesTV.url + '/movie/upcoming', optionsUpcomingMovies),
            axios.get(optionsMoviesTV.url + '/movie/top_rated', optionsTopRatedMovies),
        ])
            .then(([resMovie, resSeries, resTrendingMovies, resUpcomingMovies, resTopRatedMovies]) => {
                setMovies(resMovie.data.results);
                setSeries(resSeries.data.results);
                setTrendingFilms(resTrendingMovies.data.results);
                setUpcomingMovies(resTopRatedMovies.data.results);
                console.log(TopRatedMovies);
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
