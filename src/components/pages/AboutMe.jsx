import React from "react";
import secondSideImage from "../../assets/2.png";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={secondSideImage} alt="About Me" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <p>
          Hey viewer. <span>Devam Joshi</span> is from Gujarat. The educational
          journey includes hands-on experience in backend development and
          graphic design, showcasing a versatile skill set in both technical and
          creative fields.
        </p>
        <p>
          With <span>2 years of experience</span> in backend development, Devam
          specializes in <span>Laravel and Node.js</span>, creating robust and
          scalable server-side applications. Also adept in frontend
          technologies, Devam's design knowledge enhances user experiences,
          especially with skills in
          <span> Figma</span> for UI/UX and graphic design.
        </p>
        <p>
          Currently focused on expanding expertise in backend technologies,
          Devam is also exploring <span>cloud computing</span> to elevate skills
          further. The combination of development and design expertise allows
          Devam to build seamless and visually appealing user interfaces while
          ensuring the backend performs flawlessly.
        </p>
        <p>
          Apart from professional work, Devam has a passion for{" "}
          <span>graphic design</span>, using tools like{" "}
          <span>Canva and Photoshop</span> to create visually stunning designs.
          This creative side adds another dimension to the technical skillset,
          bridging the gap between backend performance and frontend design.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
