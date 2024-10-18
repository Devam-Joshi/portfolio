import React from "react";

const PortfolioCard = ({
  imageSrc,
  title,
  description,
  githubLink,
  websiteLink,
  youtubeLink,
}) => {
  return (
    <div className="portfolio-box">
      <img src={imageSrc} alt={title} />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="iconcontainer">
          {githubLink && (
            <a href={githubLink} target="_blank">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target="_blank">
              <i className="bx bx-link-external"></i>
            </a>
          )}
          {youtubeLink && (
            <a href={youtubeLink} target="_blank">
              <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
