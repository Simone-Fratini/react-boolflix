import { createContext, useState } from "react";
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

    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };
