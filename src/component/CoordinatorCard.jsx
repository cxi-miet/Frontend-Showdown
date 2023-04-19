import React, { useState } from "react";
import "../styles/CoordinatorCard.scss";

function CoordinatorCard(props) {
  const delay = props.delay;
  const animationdelay = {
    "animation-delay": delay,
  };
  return (
    <div
      className="team_card_container bg-transparent"
      style={animationdelay}
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="team_card bg-transparent">
        <div className="team_content bg-transparent">
          <div className="imgbox bg-transparent">
            <img className="bg-transparent" src={props.img} />
          </div>
          <div className="contentBox bg-transparent">
            <h3 className="bg-transparent">
              {props.name}
              <br />
              <span className="bg-transparent">
                {props.course} <br /> {props.branch} <br /> {props.year}
                {props.position}
              </span>
            </h3>
          </div>
        </div>
        <ul className="sci bg-transparent">
          <li className={`bg-transparent ${props.hide ? "hidden" : "block"}`}>
            <a className="bg-transparent" href={props.linkedin} target="blank">
              <i className="fa-brands fa-linkedin bg-transparent"></i>
            </a>
          </li>
          <li className={`bg-transparent ${props.hide ? "hidden" : "block"}`}>
            <a className="bg-transparent" href={props.instagram} target="blank">
              <i className="fa-brands fa-instagram bg-transparent"></i>
            </a>
          </li>
          <li className={`bg-transparent ${props.hide ? "hidden" : "block"}`}>
            <a className="bg-transparent" href={props.github} target="blank">
              <i className="fa-brands fa-github bg-transparent"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CoordinatorCard;
