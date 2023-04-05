import React from "react";
import "../styles/prizes.scss";
import { GiPodiumWinner } from "react-icons/gi";
import { BsStars } from "react-icons/bs";

function Prizes() {
  return (
    <div
      className="flex items-center justify-evenly min-h-screen flex-wrap "
      id="Prizes"
    >
      <div className="prizes-text bg-transparent text-white  z-10 text-center flex flex-col gap-5 lg:text-left">
        <h1 className="bg-transparent text-5xl">Prizes</h1>
        <p className="text-white bg-transparent text-xl">
          There’s something in store for everyone to win at Frontend Showdown!
          In addition to the main leaderboard, there’s lots of bling to win at
          Frontend Showdown!
        </p>
      </div>
      <div className="canvas bg-transparent">
        <div className="flip-card bg-transparent">
          <div className="flip-card-content bg-transparent">
            <div className="flip-card-front ">
              <GiPodiumWinner className="bg-transparent text-white text-9xl" />
              <p className="text-4xl text-white bg-transparent">Winners</p>
            </div>
            <div className="flip-card-back card">
              <h1 className="bg-transparent text-white text-3xl p-4 flex justify-center gap-1  capitalize"><BsStars className="bg-transparent text-3xl "/> Winners get opportunity of internship at startups.</h1>
              <h1 className="bg-transparent text-white text-3xl p-4 flex justify-center gap-1  capitalize"><BsStars className="bg-transparent text-3xl "/> Selected participants get momento with certificates.</h1>
              <h1 className="bg-transparent text-white text-3xl p-4 flex justify-center gap-1  capitalize"><BsStars className="bg-transparent text-3xl "/> 100% Certification for ALL eligible participants</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
