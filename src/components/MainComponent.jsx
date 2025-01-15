import React, { useState, useRef } from "react";
import MoviesComponent from "./MoviesComponent";
import SeriesComponent from "./SeriesComponent";
import StaticCardsComponent from "./StaticCardsComponent";

{/* Icons */}
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";

import { MainContext } from "../context/MainContext";

function MainComponent() {
  const { search } = React.useContext(MainContext);
  const [isMuted, setIsMuted] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const VideoEnd = () => {
    if(showHero === true){
      setShowHero(false);
    }else{
      setShowHero(true);
    }
  };

  return (
    <main >
      <div className="relative w-full h-[60vh] md:h-[750px]">
        <video ref={videoRef} className="w-full h-full object-cover absolute" src="./interstellar.mp4" autoPlay muted={isMuted} onEnded={VideoEnd}></video>

        <div className="absolute left-4 bottom-20 sm:bottom-32 md:bottom-52 opacity-75 z-10">
          <img className="w-1/2 sm:w-1/3 md:w-1/2 lg:w-[500px]" src="./interstellar.png" alt="" />
        </div>

        {/* fading overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>

        {/* Volume Button */}
        {!showHero && (
          <div className="text-white absolute bottom-20 right-10 sm:bottom-32 sm:right-16 md:bottom-44 md:right-28 cursor-pointer" onClick={toggleMute} aria-label={isMuted ? "Unmute video" : "Mute video"}>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full sm:w-14 sm:h-14 md:w-16 md:h-16">
              {isMuted ? (
                <FaVolumeMute className="text-2xl sm:text-3xl md:text-4xl" />
              ) : (
                <FaVolumeHigh className="text-2xl sm:text-3xl md:text-4xl" />
              )}
            </div>
          </div>
        )}

        {/* Hero Image */}
        {showHero && (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <img src="./interstellarHero.png" alt="Hero" className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>
          </div>
  )}
      

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
