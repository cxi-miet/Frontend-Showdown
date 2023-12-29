import React, { useState } from "react";
import "../styles/register.scss";
import Timer from "../Timer";
import RegisterSectionBtn from "./RegisterSectionBtn";
function Register() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [timerHeading, setTimerHeading] = useState();
  const [btnName, setBtnName] = useState();
  const [link, setLink] = useState("#");
  const [target, setTarget] = useState();
  let [countDate, setCount] = useState();

  const formLink = "https://forms.gle/LxFegbzy3fHB45nJ7";
  const fileLink =
    "https://drive.google.com/drive/folders/1aD3qwOI8YJfkPFlKQuKYqCh2KaZp6EI8?usp=sharing";
  const registerEnd = new Date("21 April 2023 24:00:00").getTime();
  const round1TimeStart = new Date("23 April 2023 11:00:00").getTime();
  const round1TimeEnd = new Date("23 April 2023 17:00:00").getTime();
  const round2TimeStart = new Date("29 April 2023 18:00:00").getTime();
  const round2TimeEnd = new Date("22 july 2023 18:00:00").getTime();

  let timer = setInterval(() => {
    const todayDate = new Date().getTime();
    let distance = countDate - todayDate;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);
    setTimerDays(d);
    setTimerHours(hrs);
    setTimerMinutes(min);
    setTimerSeconds(sec);
    if (todayDate < registerEnd) {
      setTimerHeading("Registrations Close in");
      setCount(registerEnd);
      setLink(formLink);
      setBtnName("Register Now");
      setTarget("_blank");
    } else if (registerEnd < todayDate && todayDate < round1TimeStart) {
      setTimerHeading("Phase 1 Start in");
      setCount(round1TimeStart);
      setBtnName("Registration Closed");
    } else if (round1TimeStart < todayDate && todayDate < round1TimeEnd) {
      setTimerHeading("Phase 1 End in");
      setCount(round1TimeEnd);
      setLink(fileLink);
      setBtnName("Download Files");
    } else if (registerEnd < todayDate && todayDate < round2TimeStart) {
      setTimerHeading("Phase 2 Start in");
      setCount(round2TimeStart);
      setLink("");
      setBtnName("Registration Closed");
    } else if (round2TimeStart < todayDate && todayDate < round2TimeEnd) {
      setTimerHeading("Phase 2 End in");
      setCount(round2TimeEnd);
      setBtnName("Registration Closed");
      setLink("");
    } else {
      setTimerHeading("Registration Closed");
      console.log("Invalid");
      setLink("");
      clearInterval(timer);
      setTimerDays("00");
      setTimerHours("00");
      setTimerMinutes("00");
      setTimerSeconds("00");
      setBtnName("Registration Closed");
    }
  }, 1000);

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
      <RegisterSectionBtn name={btnName} link={link} target={target} />
    </div>
  );
}

export default Register;
