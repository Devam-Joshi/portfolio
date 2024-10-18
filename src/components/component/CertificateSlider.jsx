import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import CertificateCard from "./CertificateCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificateSlider = ({ certificates }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = useCallback((oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  }, []);

  const CustomDots = ({ slideCount, currentSlide }) => {
    const visibleDots = 4;
    const startDot = Math.floor(currentSlide / visibleDots) * visibleDots;

    return (
      <>
        {/* Desktop dots */}
        <ul className="desktop-dots">
          {[...Array(slideCount)].map((_, idx) => (
            <li key={idx} className={idx === currentSlide ? 'slick-active' : ''}>
              <button></button>
            </li>
          ))}
        </ul>

        {/* Mobile/Tablet dots */}
        <ul className="mobile-dots">
          {[...Array(visibleDots)].map((_, idx) => {
            const dotIndex = startDot + idx;
            return (
              <li key={idx} className={dotIndex === currentSlide ? 'slick-active' : ''}>
                <button></button>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
      <div className="custom-dots-container">
        <CustomDots slideCount={certificates.length} currentSlide={currentSlide} />
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="custom-slider">
        {certificates.map((cert, index) => (
          <div key={index} className="slider-item">
            <CertificateCard {...cert} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificateSlider;