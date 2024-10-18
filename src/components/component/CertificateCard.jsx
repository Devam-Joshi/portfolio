import React from "react";

const CertificateCard = ({ image, title, description, websiteLink }) => {
  return (
    <div className="portfolio-box">
      <img src={image} alt={title} />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        {websiteLink && (
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <i className="bx bx-link-external"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
