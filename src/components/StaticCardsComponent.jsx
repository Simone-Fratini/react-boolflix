import React from "react";
import { MainContext } from "../context/MainContext";

function StaticCardsComponent() {
  const { movies, series } = React.useContext(MainContext);

  // Combina film e serie in un unico array
  const allItems = [...(movies || []), ...(series || [])];

  const IMG_PATH = import.meta.env.VITE_IMG_PATH;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {allItems.map((item) => (
          <div key={item.id}>
            <img
              src={IMG_PATH + item.poster_path}
              alt={item.title || "Item image"}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaticCardsComponent;
