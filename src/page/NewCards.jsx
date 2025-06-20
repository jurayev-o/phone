import React, { useState } from "react";

const NewCards = ({ language, cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="NewCards">
      <div className="button-div">
        <button className="left-button" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="right-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className="carusel-NewCard">
        <div className="cards">
          <img
            src={cards[currentIndex].image}
            alt={`carousel ${currentIndex + 1}`}
          />
          <div className="carusel-caption1">
            {language === "Uzb" ? "Ismi: " : "имя: "}
            {cards[currentIndex].title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCards;
