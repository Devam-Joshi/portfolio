import React from "react";
import { projects } from "../../data/projectData";
import ProjectCard from "../component/ProjectCard";

const MyProject = () => {
  return (
    <section
      className="portfolio"
      id="project"
      style={{ background: "var(--second-bg-color)" }}
    >
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            youtubeLink={project.youtubeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProject;
