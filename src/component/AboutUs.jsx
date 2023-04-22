import React from "react";
import Dev from "../assets/Dev.png";
import aryan from "../assets/Aryan.jpg";
// import amanjot from "../assets/amanjot.jpg";
import DEEPSHIKHA from "../assets/deepsikha.jpeg";
import dhruv from "../assets/dhruv.jpeg";
import muskeshSir from "../assets/Muskesh-sir.jpeg";
import shashwatSir from "../assets/Shashwat-sir.jpeg";
import CoordinatorCard from "./CoordinatorCard";
import FacultyCoordinatorCard from "./FacultyCoordinatorCard";

import "../styles/aboutus.scss";

function AboutUs() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 py-[50px]"
      id="About-us"
    >
      <h1
        className="text-3xl text-white bg-transparent w-full text-center z-10"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Meet our Team
      </h1>
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Faculty Coordinators
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
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Student Coordinators
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
      <div className="bg-transparent w-full flex justify-center items-center flex-col gap-10 py-[20px]">
        <h1
          className="text-3xl text-white bg-transparent w-full text-center z-10 uppercase"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Managing Team
        </h1>
        <div className="flex justify-center items-center bg-transparent flex-wrap gap-10">
          <CoordinatorCard
            name="DEEPSHIKHA PANWAR"
            course="B.Tech"
            branch="CSIT"
            year="2nd Year"
            img={DEEPSHIKHA}
            delay="0s"
            hide={true}
          />
          <CoordinatorCard
            name="Dhruv"
            course="B.Tech"
            branch="CSE"
            year="2nd Year"
            img={dhruv}
            delay="1s"
            linkedin="http://linkedin.com/in/bitwisedhruv"
            instagram="http://instagram.com/bitwisedhruv"
            github="http://github.com/codemonk643"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
