import React from "react";
import "../styles/prizes.scss";
import { GiCrenelCrown } from "react-icons/gi";

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
        <p className="text-white bg-transparent text-xl">
          Certificates for all eligible participants
        </p>
      </div>
      <div className="prizes-card bg-transparent z-10">
        <div className="prizes-element flex justify-center gap-5">
          <GiCrenelCrown className="bg-transparent text-3xl" /> Rs xxx
        </div>
        <div className="prizes-element flex justify-center gap-5">
          <GiCrenelCrown className="bg-transparent text-3xl" /> Rs xxx
        </div>
        <div className="prizes-element flex justify-center gap-5">
          <GiCrenelCrown className="bg-transparent text-3xl" /> Rs xxx
        </div>
        <div className="prizes-element flex justify-center gap-5">
          <GiCrenelCrown className="bg-transparent text-3xl" /> Rs xxx
        </div>
        <div className="prizes-element flex justify-center gap-5">
          <GiCrenelCrown className="bg-transparent text-3xl" /> Rs xxx
        </div>
      </div>
    </div>
  );
}

export default Prizes;
