import React from "react";
import "../styles/card.scss";
function card() {
  return (
      <div className="team_card_container bg-transparent">
        <div className="team_card bg-transparent">
          <div className="team_content bg-transparent">
            <div className="imgbox bg-transparent">
              <img
                className="bg-transparent"
                src="https://imgs.search.brave.com/WmD0U73KZvhL5S-BDiH_MhWxfDiRLHm0lV9TGNRBVNw/rs:fit:247:247:1/g:ce/aHR0cHM6Ly93d3cu/ZHJ1cGFsLm9yZy9m/aWxlcy9wcm9maWxl/X2RlZmF1bHQuanBn"
              />
            </div>
            <div className="contentBox bg-transparent">
              <h3 className="bg-transparent">
                Name
                <br />
                <span className="bg-transparent">position</span>
              </h3>
            </div>
          </div>
          <ul className="sci bg-transparent">
            <li className="bg-transparent">
              <a className="bg-transparent" href="">
                <i className="fa-brands fa-linkedin bg-transparent"></i>
              </a>
            </li>
            <li className="bg-transparent">
              <a className="bg-transparent" href="">
                <i className="fa-brands fa-instagram bg-transparent"></i>
              </a>
            </li>
            <li className="bg-transparent">
              <a className="bg-transparent" href="">
                <i className="fa-brands fa-github bg-transparent"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default card;
