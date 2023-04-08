import React from "react";
import { HashLink } from "react-router-hash-link";
import RegisterBtn from "./RegisterBtn";
import "../styles/navbar.scss";

function NavbarMenu(props) {
  const position = props.position;
  return (
    <div className="sticky lg:hidden bottom-0 ">
      <ul
        className={`flex flex-col rounded-br-[300px] absolute ${
          position ? "top-[13px]" : "top-[-880px]"
        } transition-all duration-1000 ease-in-out w-full px-10 pb-20 bg-transparent gap-10`}
        id="navbarTab"
      >
        <li className="text-xl mt-4 bg-transparent">
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
  );
}

export default NavbarMenu;
