import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

function CardsComponent() {
    const { movies, loading, error } = useContext(MainContext);
    const IMG_PATH = import.meta.env.VITE_IMG_PATH;

    if (loading) return <p className="text-white">Loading...</p>; // to do! work on loading spinner
    if (error) return <p className="text-red-500">{error}</p>; 

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 "> {/* uso grid di tailwind per imparare ad utilizzarlo */}
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={IMG_PATH + movie.poster_path} alt="movie image" className="rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsComponent;
