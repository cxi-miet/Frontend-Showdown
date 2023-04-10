import React, { useEffect, useState } from "react";
import "../styles/register.scss";

function RegisterBtn(props) {
  const [btnName, setBtnName] = useState(props.name);
  const [btnStyle, setBtnStyle] = useState({
    background:
      "linear-gradient(90deg,rgba(0, 108, 233, 0.5592830882352942) 0%,rgba(134, 148, 229, 1) 100%)",
  });
  const [linkStyle, setLinkStyle] = useState({
    "pointer-events": "auto",
  });
  const timer = setInterval(() => {
    let todayDate = new Date().getTime();
    const registerEnd = new Date("21 April 2023 24:00:00").getTime();
    const round1TimeStart = new Date("23 April 2023 11:00:00").getTime();
    const round1TimeEnd = new Date("23 April 2023 17:00:00").getTime();
    if (registerEnd < todayDate && todayDate < round1TimeStart) {
      setBtnStyle({
        "background-color": "grey",
      });
      setBtnName("Registration Closed");
      setLinkStyle({
        "pointer-events": "none",
      })
    } else if (round1TimeStart < todayDate && todayDate < round1TimeEnd) {
      setBtnStyle({
        background:
          "linear-gradient(90deg,rgba(0, 108, 233, 0.5592830882352942) 0%,rgba(134, 148, 229, 1) 100%)",
      });
      setBtnName("Download Files");
    } else if (round1TimeEnd < todayDate) {
      setBtnStyle({
        "background-color": "grey",
      });
      setLinkStyle({
        "pointer-events": "none",
      })
      setBtnName("Registration Closed");
    }
  }, 1000);

  return (
    <a
      className="bg-transparent"
      href={props.link}
      target={props.target}
      style={linkStyle}
    >
      <button
        id="btn"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        style={btnStyle}
      >
        <span className="bg-transparent">{btnName}</span>
        <i></i>
      </button>
    </a>
  );
}

export default RegisterBtn;
