import React from "react";
import "../styles/CoordinatorCard.scss";

function FacultyCoordinatorCard(props) {
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
              <span className="bg-transparent">{props.position}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyCoordinatorCard;
