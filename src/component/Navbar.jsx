import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import RegisterBtn from "./RegisterBtn";
import AOS from "aos";

import logo from "../assets/logo.png";
import NavbarMenu from "./NavbarMenu";

import "../styles/navbar.scss";

import "aos/dist/aos.css";

function Navbar() {
  AOS.init();
  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="flex justify-center">
      <div
        className={`w-full fixed top-0 left-0 z-50 bg-transparent flex justify-between items-center  py-1 ${
          colorChange || showMenu ? "navScroll" : null
        }`}
        id="navbar"
      >
        <div
          className="flex items-center cursor-pointer bg-transparent m-5"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <HashLink className="bg-transparent" to={"/#header"}>
            <img className="w-20 h-20 bg-transparent" src={logo} alt="Fs" />
          </HashLink>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="text-4xl absolute right-8 top-4 cursor-pointer bg-transparent lg:hidden text-white m-5"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          {showMenu ? (
            <RxCross2 className="bg-transparent w-16 h-16 " />
          ) : (
            <BiMenuAltRight className="bg-transparent w-16 h-16" />
          )}
        </div>
        <ul
          className="hidden lg:flex justify-center items-center gap-10 bg-transparent mr-10"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <li className="text-xl  bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#Prizes"}>
              Prizes
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#Rules"}>
              Rules
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#About-us"}>
              About us
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#Timeline"}>
              Timeline
            </HashLink>
          </li>
          <li className="text-xl bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#FAQ"}>
              FAQ
            </HashLink>
          </li>
          <RegisterBtn name="Register Now" />
        </ul>
      </div>
      <div className="fixed top-28 z-40 w-full">
        <NavbarMenu position={showMenu} />
      </div>
    </div>
  );
}

export default Navbar;
