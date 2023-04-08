import React, { useEffect, useState } from "react";
import "../styles/register.scss";
import Timer from "../Timer";
import RegisterBtn from "./RegisterBtn";
function Register() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [timerHeading, setTimerHeading] = useState();
  
  // const [link, setLink] = useState("#");
  const todayDate = new Date().getTime();
  const registerEnd = new Date("21 April 2023 24:00:00").getTime();
  // const round1TimeStart = new Date("8 April 2023 7:55:00").getTime();
  // const round1TimeEnd = new Date("8 April 2023 7:46:00").getTime();
  // const round2TimeStart = new Date("27 April 2023 23:35:00").getTime();
  // const round2TimeEnd = new Date("28 April 2023 23:36:00").getTime();
  let countDate = registerEnd;

  // useEffect(() => {
  //   if (todayDate < registerEnd) {
  //     setTimerHeading("Registration Close in");
  //     // countDate = registerEnd;
  //   } else if (registerEnd < todayDate < round1TimeStart) {
  //     setTimerHeading("Phase 1 Start in");
  //     countDate = round1TimeStart;
  //   } else if (todayDate < round1TimeStart) {
  //     setTimerHeading("Phase 1 End in");
  //     // countDate = round1TimeEnd;
  //   } else if (todayDate > registerEnd < round2TimeStart) {
  //     setTimerHeading("Phase 2 Start in");
  //     // countDate = round2TimeStart;
  //   } else if (todayDate > round2TimeStart < round2TimeEnd) {
  //     setTimerHeading("Phase 2 End in");
  //     // countDate = round2TimeEnd;
  //   } else {
  //     console.log("Invalid");
  //   }
  // }, []);

  const timer = () => {
    let distance = countDate - todayDate;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);
    setTimerDays(d);
    setTimerHours(hrs);
    setTimerMinutes(min);
    setTimerSeconds(sec);
    // if (distance > 0) {
    //   // window.location.reload(false);
    // }
  };

  setInterval(timer, 1000);

  useEffect(()=>{
    setTimerHeading("Registration Close in");
  },[]);

  return (
    <div
      className="w-full flex justify-evenly items-center flex-wrap"
      id="Register"
    >
      <Timer
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        timerHeading={timerHeading}
      />
      <RegisterBtn name="Register now" link={"#"} />
    </div>
  );
}

export default Register;
