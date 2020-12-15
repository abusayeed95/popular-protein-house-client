import React from "react";

import "./About.css";
import From from "./From";
import HowItEarns from "./HowItEarns";
import Partners from "./Partners";
import What from "./What";

const About = () => {
  return (
    <div className="about p-5">
      <What />
      <HowItEarns />
      <Partners />
      <From />
    </div>
  );
};

export default About;
