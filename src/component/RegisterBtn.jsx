import React, { useEffect, useState } from "react";
import "../styles/register.scss";

function RegisterBtn(props) {
  const [btnStyle, setBtnStyle] = useState({
    "background":
      "linear-gradient(90deg,rgba(0, 108, 233, 0.5592830882352942) 0%,rgba(134, 148, 229, 1) 100%)",
  });
  useEffect(() => {
    let todayDate = new Date().getTime();
    const registerEnd = new Date("9 April 2023 19:15:00").getTime();
    if(todayDate > registerEnd){
      setBtnStyle({
        "background-color": "grey",
        "pointer-events": "none",
      });
    }
  }, []);
  

  return (
    <button
      id="btn"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      style={btnStyle}
    >
      <a className="bg-transparent" href={props.link} target={props.target}>
        <span className="bg-transparent">{props.name}</span>
      </a>
      <i></i>
    </button>
  );
}

export default RegisterBtn;
