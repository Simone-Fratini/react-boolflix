import React, { useState, useRef } from "react";
import HomeMainComponent from "./HomeMainComponent";
import StaticCardsComponent from "./StaticCardsComponent";
import HeroComponent from "./HeroComponent";
import { MainContext } from "../context/MainContext";

function MainComponent() {
  const { search } = React.useContext(MainContext);

  return (
    <main >
      
      {search.length > 0 ? (
        <>
          <h2 className="text-white text-2xl mb-4 mt-8 pl-4 ml-4">Risultati per: {search}</h2>
          <StaticCardsComponent />
        </>
      ) : (
        <div >
          <HeroComponent videoSrc={"./interstellar.mp4"} heroSrc={"./interstellarHero.png"} logoSrc="./interstellar.png"/>
          <div className="pl-4 pr-4 ml-4 mr-4">
            <HomeMainComponent />
          </div>
        </div>
      )}
      
    </main>
  );
}

export default MainComponent;
