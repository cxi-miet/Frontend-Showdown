import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import RegisterBtn from "./RegisterBtn";


import logo from "../assets/logo.png";

import "../styles/navbar.scss";

function Navbar() {
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
        className={`w-full fixed top-0 left-0 z-50 bg-transparent flex justify-between items-center py-1 ${
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
          data-aos-duration="1000"
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
          data-aos-duration="1000"
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
              FAQs
            </HashLink>
          </li>
          <RegisterBtn name="Register Now" link="#Register" />
        </ul>
      </div>
      <div className="fixed top-28 z-40 w-full">
        <div className="sticky lg:hidden bottom-0 ">
          <ul
            className={`flex flex-col rounded-br-[300px] absolute ${
              showMenu ? "top-[13px]" : "top-[-880px]"
            } transition-all duration-1000 ease-in-out w-full px-10 pb-20 bg-transparent gap-10`}
            id="navbarTab"
          >
            <li className="text-xl mt-4 bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#Prizes"}
                onClick={() => setShowMenu(!showMenu)}
              >
                Prizes
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#Rules"}
                onClick={() => setShowMenu(!showMenu)}
              >
                Rules
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#About-us"}
                onClick={() => setShowMenu(!showMenu)}
              >
                About us
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#Timeline"}
                onClick={() => setShowMenu(!showMenu)}
              >
                Timeline
              </HashLink>
            </li>
            <li className="text-xl bg-transparent">
              <HashLink
                className="text-white bg-transparent"
                to={"/#FAQ"}
                onClick={() => setShowMenu(!showMenu)}
              >
                FAQs
              </HashLink>
            </li>
            <RegisterBtn name="Register Now" link="#Register"/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
