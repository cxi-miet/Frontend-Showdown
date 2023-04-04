import React, { useState } from "react";
import "../styles/register.scss";
import Timer from "../Timer";
import RegisterBtn from "./RegisterBtn";
function Register() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  var round1Time = "9 April 2023 11:00:00";
  const countDate = new Date(round1Time).getTime();
  var x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);

    setTimerDays(d);
    setTimerHours(hrs);
    setTimerMinutes(min) 
    setTimerSeconds(sec)

    if (distance < 0) {
      x = setInterval(0);
    }
  });
  const registrationLink ="#";
  const Round1Files ="#";
  const Round2Files ="#";
  return (
    <div className="w-full flex justify-center items-center gap-20" id="Register">
      
      <Timer
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        timerHeading="Registration Close in"
      />
      <RegisterBtn name="Register now" link="#"/>
    </div>
  );
}

export default Register;
