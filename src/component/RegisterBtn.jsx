import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/register.scss";

function RegisterBtn(props) {
  return (
    <button
      id="btn"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <span className="bg-transparent">
        <HashLink className="bg-transparent" to={props.link}>
          {props.name}
        </HashLink>
      </span>
      <i></i>
    </button>
  );
}

export default RegisterBtn;
