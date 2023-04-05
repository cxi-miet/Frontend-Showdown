import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/header.scss";
import figma from "../assets/figma-logo.png"
import html from "../assets/html-logo.png"
import css from "../assets/css-logo.png"
import js from "../assets/javascript-logo.png"
import image from "../assets/header-img.png"

function Header() {
  return (
    <div className="flex justify-center text-white" id="header">
      <div className="header-container relative flex justify-center items-center flex-wrap gap-20">
        <div className="header-text bg-transparent uppercase flex justify-center flex-col">
          <h1 className="text-8xl frontend-text bg-transparent">Frontend</h1>
          <h1 className="text-6xl Showdown-text">Showdown</h1>
          <p className="bg-transparent context-text mt-2">
            One of biggest competitive activity , providing an opportunity to
            showcase your skills and grow with us.
          </p>
          <div className="header-btn bg-transparent mt-3">
            <button>
              <span className="bg-transparent">
                <HashLink className="bg-transparent" to={"/#products"}>
                  Register Now
                </HashLink>
              </span>
              <i></i>
            </button>
          </div>
        </div>
        <div className="relative header-text bg-transparent w-96 uppercase flex justify-center flex-col">
          <img src={image} className="bg-transparent" alt=""/>
          <img src={figma} className="bg-transparent absolute w-32 inset-y-0" alt=""/>
          {/* <img src={react} className="bg-transparent absolute w-32 inset-y-72 right-0" alt=""/> */}
          <img src={html} className="bg-transparent absolute w-32 inset-y-10 right-0" alt=""/>
          <img src={css} className="bg-transparent absolute w-32  inset-y-56" alt=""/>
          <img src={js} className="bg-transparent absolute w-32  inset-y-72 right-0" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Header;
