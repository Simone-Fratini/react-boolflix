import React from "react";
import MoviesComponent from "./MoviesComponent";
import SeriesComponent from "./SeriesComponent";
import StaticCardsComponent from "./StaticCardsComponent";

import { MainContext } from "../context/MainContext";

function MainComponent() {
  const { search } = React.useContext(MainContext);

  return (
    <main className="container mx-auto p-4 mt-11">
      {search.length > 0 ? (
        <>
          <h2 className="text-white text-2xl mb-4">Risultati per: {search}</h2>
          <StaticCardsComponent />
        </>
      ) : (
        <div>
          <MoviesComponent />
          <SeriesComponent />
        </div>
      )}
      
    </main>
  );
}

export default MainComponent;
