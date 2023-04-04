import React from "react";
import "./styles/register.scss";
function Timer(props) {
  
  return (
    <div className="text-white" id="timer">
      <div className="timer-container flex flex-col gap-5 justify-center items-center ">
        <h2 className="text-white text-3xl bg-transparent uppercase">{props.timerHeading}</h2>
          <div className="timer flex justify-center items-center gap-10">
            <div className="Days">
              <p>{props.timerDays}</p>
              <small>Days</small>
            </div>
            <div className="Hours">
              <p>{props.timerHours}</p>
              <small>Hours</small>
            </div>
            <div className="Minutes">
              <p>{props.timerMinutes}</p>
              <small>Minutes</small>
            </div>
            <div className="Seconds">
              <p>{props.timerSeconds}</p>
              <small>Seconds</small>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Timer;
