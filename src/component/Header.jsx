import React from "react";
import RegisterBtn from "./RegisterBtn";

import "../styles/header.scss";


import figma from "../assets/figma-logo.png";
import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";
import js from "../assets/javascript-logo.png";
import image from "../assets/header-img.png";

function Header() {
  return (
    <div className="flex justify-center items-center text-white" id="header">
      <div className="header-container relative flex justify-center items-center flex-wrap">
        <div
          className="header-text bg-transparent uppercase flex justify-center flex-col"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h1 className="frontend-text bg-transparent">Frontend</h1>
          <h1 className="Showdown-text">Showdown</h1>
          <p className="bg-transparent context-text mt-2">
            One of biggest competitive activity , providing an opportunity to
            showcase your skills and grow with us.
          </p>
          <div className="header-btn bg-transparent mt-3">
          <RegisterBtn name="Register Now" link="#Register" />
          </div>
        </div>
        <div
          className="relative header-image bg-transparent w-96 uppercase flex justify-center flex-col"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src={image} className="bg-transparent" alt="" />
          <img
            src={figma}
            className="lang-img bg-transparent absolute w-32 inset-y-0"
            alt=""
          />
          <img
            src={html}
            className="lang-img bg-transparent absolute w-32 inset-y-10 right-0"
            alt=""
          />
          <img
            src={css}
            className="lang-img bg-transparent absolute w-32  inset-y-56"
            alt=""
          />
          <img
            src={js}
            className="lang-img bg-transparent absolute w-32  inset-y-64 right-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
