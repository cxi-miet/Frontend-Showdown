import React from "react";
import Dev from "../assets/Dev.png";
import aryan from "../assets/Aryan.jpg";
import muskeshSir from "../assets/Muskesh-sir.jpeg";
import shashwatSir from "../assets/Shashwat-sir.jpeg";
import "../styles/aboutus.scss";
import CoordinatorCard from "./CoordinatorCard";
import FacultyCoordinatorCard from "./FacultyCoordinatorCard";

function AboutUs() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10"
      id="About-us"
    >
      <h1 className="text-3xl text-white bg-transparent w-full text-center z-10">
        Meet our Team
      </h1>
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10">
        <h1 className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase">
          Faculty Coordinator
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <FacultyCoordinatorCard
            name="Dr. Mukesh Rawat"
            position="Prof. & Head - CSE"
            img={muskeshSir}
            delay="0.5s"
          />
          <FacultyCoordinatorCard
            name="Dr. Shashwat Pathak"
            position="Head ACIC, MIET"
            img={shashwatSir}
            delay="1.5s"
          />
        </div>
      </div>
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10">
        <h1 className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase">
        Student Coordinator
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
        <CoordinatorCard
            name="Dev Chauhan"
            course="B.Tech"
            branch="CSIT"
            year="2nd Year"
            img={Dev}
            linkedin="https://www.linkedin.com/in/dev-chauhan-44ba15247/"
            instagram="https://www.instagram.com/_unknown_code__/"
            github="https://github.com/devcode8"
            delay="0s"
          />
          <CoordinatorCard
            name="Aryan Gupta"
            course="B.Tech"
            branch="CSIT"
            year="2nd Year"
            img={aryan}
            linkedin="https://www.linkedin.com/in/aryan-gupta-5a599325a"
            instagram="https://instagram.com/_undying_code?igshid=ZDdkNTZiNTM="
            github="https://github.com/undying-code"
            delay="1s"
          />
        </div>
      </div>

      {/* <div className="containers team_container bg-transparent text-white z-10">
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
          <FacultyCoordinatorCard
            name="Dr. Mukesh Rawat"
            position="Prof. & Head - CSE"
            img={muskeshSir}
          />
          <FacultyCoordinatorCard
            name="Dr. Shashwat Pathak"
            position="Head ACIC, MIET"
            img={shashwatSir}
          />
        </div>
        <div className="team_heading student bg-transparent">
          <h1 className="bg-transparent flex justify-center items-center text-4xl uppercase">
            Student Coordinator
          </h1>
        </div>
        <div className="student_container bg-transparent">
          <CoordinatorCard
            name="Dev Chauhan"
            course="B.Tech"
            branch="CSIT"
            year="2nd Year"
            img={Dev}
            linkedin="https://www.linkedin.com/in/dev-chauhan-44ba15247/"
            instagram="https://www.instagram.com/_unknown_code__/"
            github="https://github.com/devcode8"
          />
          <CoordinatorCard
            name="Aryan Gupta"
            course="B.Tech"
            branch="CSIT"
            year="2nd Year"
            img={aryan}
            linkedin="https://www.linkedin.com/in/aryan-gupta-5a599325a"
            instagram="https://instagram.com/_undying_code?igshid=ZDdkNTZiNTM="
            github="https://github.com/undying-code"
          />
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
