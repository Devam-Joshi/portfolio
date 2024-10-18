import React from "react";
import { certifications } from "../../data/certificateData";
import CertificateSlider from "../component/CertificateSlider";

const AchievedCertification = () => {
  return (
    <section className="portfolio section-certificate" id="Certification">
      <h2 className="heading">
        Achieved <span>Certifications</span>
      </h2>
      <div className="portfolio-container certificate-container">
        <CertificateSlider certificates={certifications} />
      </div>
    </section>
  );
};

export default AchievedCertification;
