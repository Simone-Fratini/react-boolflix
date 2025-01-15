import React from "react";
import MoviesComponent from "./MoviesComponent";
import SeriesComponent from "./SeriesComponent";

import { MainContext } from "../context/MainContext";

function MainComponent() {
  const { search } = React.useContext(MainContext);

  return (
    <main className="container mx-auto p-4 mt-11">
      {search.length > 0 ? (
        <h2 className="text-white text-2xl mb-4">Risultati per: {search}</h2>
      ) : (
        <h2 className="text-white text-2xl mb-4">Popular Movies and TV Series</h2>
      )}
      <MoviesComponent />
      <SeriesComponent />
    </main>
  );
}

export default MainComponent;
