import React from "react";
import web from "../src/images/homepage1.jpg";
// import { NavLink } from "react-router-dom";
import Common from "./common";

const Home = () => {
  return (
    <>
      <Common name="TÜİK ÇOCUK" imgsrc={web} visit="/icerik" btname="Başla" />
    </>
  );
};

export default Home;
