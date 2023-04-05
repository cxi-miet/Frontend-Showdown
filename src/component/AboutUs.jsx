import React from "react";
import "../styles/aboutus.scss";

function AboutUs() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      id="About-us"
    >
      <div className="containers team_container bg-transparent text-white z-10">
        <div className="team_heading bg-transparent flex justify-center items-center">
          <h1 className="bg-transparent flex justify-center items-center text-4xl uppercase">
            Team
          </h1>
        </div>
        <div className="team_heading Faculty bg-transparent">
          <h1 className="bg-transparent flex justify-center items-center text-4xl uppercase">
            Faculty Coordinator
          </h1>
        </div>
        <div className="faculty_container bg-transparent">
          <div className="team_card_container bg-transparent">
            <div className="team_card bg-transparent">
              <div className="team_content bg-transparent">
                <div className="imgbox">
                  <img
                    className="bg-transparent"
                    src="https://imgs.search.brave.com/WmD0U73KZvhL5S-BDiH_MhWxfDiRLHm0lV9TGNRBVNw/rs:fit:247:247:1/g:ce/aHR0cHM6Ly93d3cu/ZHJ1cGFsLm9yZy9m/aWxlcy9wcm9maWxl/X2RlZmF1bHQuanBn"
                  />
                </div>
                <div className="contentBox bg-transparent">
                  <h3 className="bg-transparent">
                    Dr. Mukesh Rawat
                    <br />
                    <span className="bg-transparent">
                      Prof. & Head CSE Department
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="team_card_container bg-transparent">
            <div className="team_card bg-transparent">
              <div className="team_content bg-transparent">
                <div className="imgbox">
                  <img
                    className="bg-transparent"
                    src="https://imgs.search.brave.com/WmD0U73KZvhL5S-BDiH_MhWxfDiRLHm0lV9TGNRBVNw/rs:fit:247:247:1/g:ce/aHR0cHM6Ly93d3cu/ZHJ1cGFsLm9yZy9m/aWxlcy9wcm9maWxl/X2RlZmF1bHQuanBn"
                  />
                </div>
                <div className="contentBox bg-transparent">
                  <h3 className="bg-transparent">
                    Mr. Shashwat Pathak
                    <br />
                    <span className="bg-transparent">Head ACIC MIET</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_heading student bg-transparent">
          <h1 className="bg-transparent flex justify-center items-center text-4xl uppercase">
            Student Coordinator
          </h1>
        </div>
        <div className="student_container bg-transparent">
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
                    Dev Chauhan
                    <br />
                    <span className="bg-transparent">
                      B.Tech <br /> CSIT <br /> 2nd Year
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="sci bg-transparent">
                <li className="bg-transparent">
                  <a
                    className="bg-transparent"
                    href="https://www.linkedin.com/in/dev-chauhan-44ba15247/"
                    target="blank"
                  >
                    <i className="fa-brands fa-linkedin bg-transparent"></i>
                  </a>
                </li>
                <li className="bg-transparent">
                  <a
                    className="bg-transparent"
                    href="https://www.instagram.com/_unknown_code__/"
                    target="blank"
                  >
                    <i className="fa-brands fa-instagram bg-transparent"></i>
                  </a>
                </li>
                <li className="bg-transparent">
                  <a
                    className="bg-transparent"
                    href="https://github.com/devcode8"
                    target="blank"
                  >
                    <i className="fa-brands fa-github bg-transparent"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                    Aryan Gupta
                    <br />
                    <span className="bg-transparent">
                      B.Tech <br /> CSIT <br /> 2nd Year
                    </span>
                  </h3>
                </div>
              </div>
              <ul className="sci bg-transparent">
                <li className="bg-transparent">
                  <a
                    className="bg-transparent"
                    href="https://www.linkedin.com/in/aryan-gupta-5a599325a"
                    target="blank"
                  >
                    <i className="fa-brands fa-linkedin bg-transparent"></i>
                  </a>
                </li>
                <li className="bg-transparent">
                  <a
                    className="bg-transparent"
                    href="https://instagram.com/_undying_code?igshid=ZDdkNTZiNTM="
                    target="blank"
                  >
                    <i className="fa-brands fa-instagram bg-transparent"></i>
                  </a>
                </li>
                <li className="bg-transparent">
                  <a
                    className="bg-transparent"
                    href="https://github.com/undying-code"
                    target="blank"
                  >
                    <i className="fa-brands fa-github bg-transparent"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
