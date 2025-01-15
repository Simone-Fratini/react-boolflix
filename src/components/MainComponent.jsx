import React from "react";
import MoviesComponent from "./MoviesComponent";
import SeriesComponent from "./SeriesComponent";
import StaticCardsComponent from "./StaticCardsComponent";

import { MainContext } from "../context/MainContext";

function MainComponent() {
  const { search } = React.useContext(MainContext);

  return (
    <main className="">
      <div className="relative w-full h-[60vh] md:h-[750px]">
        <video className="w-full h-full object-cover absolute" src="./interstellar.mp4" autoPlay muted></video>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      {search.length > 0 ? (
        <>
          <h2 className="text-white text-2xl mb-4">Risultati per: {search}</h2>
          <StaticCardsComponent />
        </>
      ) : (
        <div className="pl-4 pr-4 ml-4 mr-4">
          <MoviesComponent />
          <SeriesComponent />
        </div>
      )}
      
    </main>
  );
}

export default MainComponent;
