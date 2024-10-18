import React from "react";
import Navbar from "../component/Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import MyProject from "./MyProject";
import AchievedCertification from "./AchievedCertification";
import Footer from "../component/Footer";
import Skills from "./Skills";

const MainPagePortfolio = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      {/* <MyProject /> */}
      {/* <AchievedCertification /> */}
      <Footer />
    </>
  );
};

export default MainPagePortfolio;
