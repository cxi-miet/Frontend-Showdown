import React from "react";
import "../styles/register.scss";

function RegisterBtn(props) {
  return (
    <a className="bg-transparent" href={props.link} target={props.target}>
    <button
      id="btn"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <span className="bg-transparent">
          {props.name} 
      </span>
      <i></i>
    </button>
        </a>
  );
}

export default RegisterBtn;
