import React from "react";
import web from "../src/images/homepage2.png";

import Common from "./common";

const About = () => {
  return (
    <>
      <Common
        name="TÜİK ÇOCUK"
        imgsrc={web}
        visit="/contact"
        btname="TÜİK Çocuk Nedir?"
      />
    </>
  );
};

export default About;
