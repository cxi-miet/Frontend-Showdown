import React from "react";
import "../styles/rules.scss";
import RulesCard from "./RulesCard";

function Rules() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 py-[60px]"
      id="Rules"
    >
      <h1
        className="text-white bg-transparent md:text-5xl text-4xl z-10 text-center"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Rules and Regulations
      </h1>
      <h1
        className="text-white bg-transparent md:text-5xl text-4xl z-10"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Round 1
      </h1>

      <RulesCard
        rule1="You are allowed to use HTML,CSS and JavaScript according to your
      convinience."
        rule2="Use of any framework and libraries are prohibited."
        rule3="Any external resources ( images, cdn links & text) are NOT
      allowed."
        rule4="Duplicate and copied work may lead to eliminations."
        rule5="AI generated code/contents are prohibited."
        rule6="Submissions must be done in given interval of time and follow all
      given instructions."
      />

      <h1
        className="text-white bg-transparent md:text-5xl text-4xl z-10"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Round 2
      </h1>
      <RulesCard
        rule1="You are allowed to use HTML,CSS and JavaScript according to your
        convenience."
        rule2="Use of any framework and libraries are allowed."
        rule3="Any external resources ( images link, cdn links & text) are
        allowed."
        rule4="Submissions must be done in given interval of time and follow all
        given instructions."
        rule5="AI generated code/contents are prohibited."
        rule6="Duplicate and copied work may lead to eliminations."
      />
    </div>
  );
}

export default Rules;
