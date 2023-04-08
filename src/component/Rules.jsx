import React from "react";
import "../styles/rules.scss";
import RulesCard from "./RulesCard";

function Rules() {
  return (
    <div
      className="flex items-center justify-center min-h-screen flex-col gap-10 p-10"
      id="Rules"
    >
      <h1 className="text-white bg-transparent md:text-5xl text-4xl z-10 text-center">
        Rules and Regulation
      </h1>
      <h1 className="text-white bg-transparent md:text-5xl text-4xl z-10">Round 1</h1>

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

      <h1 className="text-white bg-transparent md:text-5xl text-4xl z-10">Round 2</h1>
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
