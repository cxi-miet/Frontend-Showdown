import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
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
    <div
      className="w-full fixed top-0 left-0 z-50 text-white bg-transparent"
      id="navbar"
    >
      <div
        className={`md:flex items-center justify-between  py-4 md:px-10 px-7 bg-transparent navbar-container ${
          colorChange ? "nav_scroll" : null
        }`}
      >
        <div className="flex items-center font-bold text-2xl cursor-pointer text-white uppercase bg-transparent">
          <HashLink className="bg-transparent" to={"/#header"}>
            <img className="w-20 h-20 bg-transparent" src={logo} alt="Fs" />
          </HashLink>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="text-4xl absolute right-8 top-4 cursor-pointer md:hidden bg-transparent"
        >
          {showMenu ? (
            <RxCross2 className="bg-transparent w-16 h-16" />
          ) : (
            <BiMenuAltRight className="bg-transparent w-16 h-16" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 gap-5 absolute md:static  rounded-br-full md:z-auto z-[-1] left-0 w-full h-96 md:h-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            showMenu ? "top-28" : "top-[-480px]"
          } navbarTab md:bg-transparent`}
        >
          <li className={`md:ml-8 text-xl md:my-0 my-7 bg-transparent`}>
            <HashLink className="text-white bg-transparent" to={"/#Prizes"}>
              Prizes
            </HashLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#Rules"}>
              Rules
            </HashLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#About-us"}>
              About us
            </HashLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#Timeline"}>
              Timeline
            </HashLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 bg-transparent">
            <HashLink className="text-white bg-transparent" to={"/#FAQ"}>
              FAQ
            </HashLink>
          </li>
          <button className=" btn2 md:hidden block">
            <span>Register Now</span>
            <i></i>
          </button>

          <button className="md:ml-5 hidden md:block btn1">
            <span className="bg-transparent">
              <HashLink className="bg-transparent" to={"/#products"}>
                Register Now
              </HashLink>
            </span>
            <i></i>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
