import React from "react";
import Header from "./component/Header";
import Timeline from "./component/Timeline";
import Prizes from "./component/Prizes";
import Rules from "./component/Rules";
import AboutUs from "./component/AboutUs";
import Faq from "./component/Faq";
import Register from "./component/Register";
import AOS from "aos";

import "aos/dist/aos.css";

function Home() {
  AOS.init();
  
  return (
    <div>
      <Header />
      <Timeline />
      <Prizes />
      <Rules />
      <Register />
      <Faq/>
      <AboutUs />
    </div>
  );
}

export default Home;
