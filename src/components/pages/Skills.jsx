import React from "react";
import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Known <span>Skills</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skills-box" key={index}>
            <>
              <img src={skill.icon} alt={skill.description} />
              <h4>{skill.description}</h4>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
