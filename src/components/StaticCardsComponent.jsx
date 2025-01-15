import React from "react";
import { MainContext } from "../context/MainContext";
import starRating from "../utilities/starRating";
import languageFlags from "../data/languagesFlags";

function StaticCardsComponent() {
  const { movies, series } = React.useContext(MainContext);

  const getFlagUrl = (langCode) => {
    const countryCode = languageFlags[langCode] || "US";
    return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;
  };

  
  const allItems = [...(movies || []), ...(series || [])];

  const IMG_PATH = import.meta.env.VITE_IMG_PATH;

  return (
    <div className="p-4 ml-4 mr-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Poster Image */}
            <img
              src={IMG_PATH + item.poster_path}
              alt={item.title || "Item image"}
              className="rounded-lg w-full h-auto"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <h3 className="text-white text-lg font-semibold text-center">
                {item.original_title || item.original_name}
              </h3>

              {/* Language */}
              <div className="text-white text-md pt-3 flex justify-center">
                <img
                  className="w-8 h-6"
                  src={getFlagUrl(item.original_language)}
                  alt={item.original_language}
                />
              </div>

              {/* Stars */}
              <div className="pt-3 flex justify-center">
                {starRating(item.vote_average)}
              </div>

              {/* Description */}
              <div className="text-white font-bold text-sm pt-8">Description:</div>
              <p className="text-gray-300 text-sm overflow-hidden pt-1">
                {item.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaticCardsComponent;
