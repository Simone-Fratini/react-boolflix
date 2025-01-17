import React, { useContext, useRef } from "react";
import { MainContext } from "../context/MainContext";
import starRating from "../utilities/starRating";
import languageFlags from "../data/languagesFlags";

function CardsComponent({ dataType }) {
  const { movies, series, trendingFilms, UpcomingMovies, TopRatedMovies, loading, error } = useContext(MainContext);
  const IMG_PATH = import.meta.env.VITE_IMG_PATH;

  const scrollContainer = useRef(null);

  const getFlagUrl = (langCode) => {
    const countryCode = languageFlags[langCode] || "US";
    return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;
  };

  if (loading) return <p className="text-white">Loading...</p>; // to do! work on loading spinner
  if (error) return <p className="text-red-500">{error}</p>;

  function getData(){
    switch (dataType) {
      case "movies":
        return movies;
      case "series":
        return series;
      case "trending":
        return trendingFilms;
      case "upcomingMovies":
        return UpcomingMovies;
      case "topRatedMovies":
        return TopRatedMovies;
      default:
        return [];
    }
  };

  const data = getData();


  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left scroll button */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-5 rounded-r-lg hover:bg-black/80 z-10"
        onClick={scrollLeft}
      >
        &larr;
      </button>

      {/* Horizontal scrolling container */}
      <div className="overflow-x-auto scrollbar-hide" ref={scrollContainer}>
        <div className="flex space-x-6 py-4">
          {data.map((item) => (
            <div key={item.id} className="shrink-0 w-64 group relative transform transition-transform duration-300 hover:scale-105">
              <img src={IMG_PATH + item.poster_path} alt={`${item.title || item.name} image`} className="rounded-lg"/>

              {/* Overlay details */}
              <div className="absolute inset-0 bg-black/70 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-white text-lg font-semibold text-center">
                  {item.original_title || item.original_name}
                </h3>
                <div className="text-white text-md pt-3 flex justify-center">
                    <img className="w-10 h-10" src={getFlagUrl(item.original_language)} alt={item.original_language} />
                </div>
                <div className="pt-3 flex justify-center">
                    {starRating(item.vote_average)}
                </div>
                <div className="text-white font-bold text-sm pt-3">Description:</div>
                <p className="text-gray-300 text-sm overflow-hidden">{item.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* overlay faded right */}
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black to-transparent"></div>

      {/* Right scroll button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-5 rounded-l-lg hover:bg-black/80 z-10"
        onClick={scrollRight}
      >
        &rarr;
      </button>
    </div>
  );
}

export default CardsComponent;
