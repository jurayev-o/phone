import React, { useState } from "react";

const Carusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carusel">
      <button className="carusel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div className="carusel-image">
        <img
          src={images[currentIndex].src}
          alt={`carousel ${currentIndex + 1}`}
        />
        <div className="carusel-caption">{images[currentIndex].caption}</div>
      </div>
      <button className="carusel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carusel;


