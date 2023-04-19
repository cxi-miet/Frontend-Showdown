import React, { useState } from "react";
import "../styles/register.scss";

function RegisterSectionBtn(props) {
  const [btnStyle, setBtnStyle] = useState({});
  const timer = setInterval(() => {
    let todayDate = new Date().getTime();
    const registerEnd = new Date("21 April 2023 24:00:00").getTime();
    const round1TimeStart = new Date("23 April 2023 11:00:00").getTime();
    const round1TimeEnd = new Date("23 April 2023 17:00:00").getTime();
    if (registerEnd < todayDate && todayDate < round1TimeStart) {
      setBtnStyle({
        "pointer-events": "none",
        "background-color": "grey",
      });
    } else if (round1TimeStart < todayDate && todayDate < round1TimeEnd) {
      setBtnStyle({
        "pointer-events": "auto",
      });
    } else if (round1TimeEnd < todayDate) {
      clearInterval(timer);
      setBtnStyle({
        "background-color": "grey",
        "pointer-events": "none",
      });
    }
  }, 1000);

  return (
    <div
      id="RegisterSectionBtn"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
     className="bg-transparent"
    >
      <a href={props.link} className="bg-transparent" target={props.target}>
        <button className="bg-transparent" style={btnStyle}>
          <span></span>
          <span></span>
          <span></span>
          {props.name}
          <span></span>
        </button>
      </a>
    </div>
  );
}

export default RegisterSectionBtn;
