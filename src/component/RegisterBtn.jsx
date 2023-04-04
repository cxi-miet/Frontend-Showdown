import React from "react";
import "../styles/register.scss";

function RegisterBtn(props) {
  return (
    <div id="btn" className="bg-transparent">
      <a
        href={props.link}
        target="blank"
        className="text-white text-3xl bg-transparent"
      >
        <button type="button" class="btn bg-transparent">
          <strong className="bg-transparent">{props.name}</strong>
          <div id="container-stars" className="bg-transparent">
            <div id="stars"></div>
          </div>

          <div id="glow" className="bg-transparent">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
      </a>
    </div>
  );
}

export default RegisterBtn;
