import React, { useState } from "react";
import FaqIteam from "./FaqIteam";

import "../styles/faq.scss";

function Faq() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open == index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const faqData = [
    {
      question: "Do i have to pay for registration?",
      answer:
        "NO. There is no registration fee. Just click on Register Now button to register. ",
    },
    {
      question: "What is the task in competition?",
      answer:
        "You have to prepare webpage(s) focusing on frontend following the given instructions and submit it by the deadline positively.",
    },
    {
      question: "Can i team up with other participants?",
      answer: "NO. Frontend Showdown is a solo participation contest.",
    },
    {
      question: "What are the selection criteria ?",
      point1:
        "Any incomplete or duplicate submissions will result in elimination. Elimination(s) may also occur in case of failing/attempt to breach instructions .",
      point2: "No elimination is the only criteria for clearing ROUND 1.",
      point3:
        "Winning ROUND 2 means winning the competition. Selection of winners will be done on different parameters (including effectiveness, good Ui/Ux , responsive tendency, code structuring etc.) and will be declared soon after the ROUND 2.",
    },
    {
      question: "What externals sources can I use ?",
      point1:
        "For ROUND 1 , you are NOT allowed to use any external resources ( including any framework , images, cdn links, pre-processors etc. ). Resources and instructions will be provided , ready to download and use.",
      point2:
        "For ROUND 2 , you can use resources of your own choice(s), other than the provided resources. ",
    },
    {
      question: "How do i submit my project ?",
      answer:
        "Submission form link will be provided in WhatsApp Group. Fill out form and upload your work there within deadline , hit submit and you are all done.",
    },
    {
      question: "When will the prize distribution and certifications be done?",
      answer:
        "Prize distribution and certifications will be done along with winner announcement within few days after completion of ROUND 2.",
    },
  ];
  return (
    <div
      className="flex justify-center items-center bg-transparent flex-col py-[20px]"
      id="FAQ"
    >
      <h1
        className="text-white bg-transparent text-center mb-1"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center items-center bg-transparent flex-col">
        {faqData.map((data, index) => {
          return (
            <FaqIteam
              key={index}
              open={index === open}
              question={data.question}
              answer={data.answer}
              point1={data.point1}
              point2={data.point2}
              point3={data.point3}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
