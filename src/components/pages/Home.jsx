import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import heroimage from "../../assets/1.png";
import { FaUserFriends } from "react-icons/fa";
import resume from "../../assets/document/Devam_Joshi.pdf";

function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Student",
        "Backend Developer",
        "API Developer",
        "Graphics Designer",
        "Figma Designer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hola, It's Me</h3>
        <h1>Devam Joshi</h1>
        <h3>
          And I'm a <span className="multiple-text"></span>
        </h3>
        <p>
          Currently enrolled in a B.Tech. in Computer Enginerring programme at
          Silveroak University in Ahemdabad, Gujarat. Coding the backbone of innovation, one function at a time
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/devam-joshi-9223b21ab/" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Devam-Joshi" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/devam_joshi_/"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://x.com/Devam3104" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>

          <a href="https://medium.com/@devamjoshi8" target="_blank">
            <i className="bx bxl-medium"></i>
          </a>
        </div>

        <a href={resume} className="btn" target="_blank">
          Download CV
        </a>
      </div>

      <div className="home-img">
        <img src={heroimage} alt="" />
      </div>
    </section>
  );
}

export default Home;
