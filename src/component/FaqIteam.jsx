// import { PhoneCallback } from '@mui/icons-material'
import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FaqIteam({
  open,
  toggle,
  question,
  answer,
  point1,
  point2,
  point3,
  space,
}) {
  return (
    <div
      className="pt-[10px] bg-transparent text-white"
      id="question-container"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div
        className="flex justify-between items-center cursor-pointer bg-transparent"
        id="question"
        onClick={toggle}
      >
        <p className="text-[16px] font-semibold bg-transparent">{question}</p>
        <div className="text-[30px] bg-transparent">
          {open ? (
            <AiOutlineMinus className="bg-transparent" />
          ) : (
            <AiOutlinePlus className="bg-transparent" />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-transparent text-left px-10">
          {answer}
          <br className={`${space ? "block" : "hidden"}`} />
          {point1}
          <br className={`${space ? "block" : "hidden"}`} />
          {point2}
          <br className={`${space ? "block" : "hidden"}`} />
          {point3}{" "}
        </div>
      </Collapse>
    </div>
  );
}

export default FaqIteam;
