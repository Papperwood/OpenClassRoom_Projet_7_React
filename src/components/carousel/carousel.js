import React, { useState } from "react";
import Vector_right from "../../assets/Vector_right.png";
import Vector_left from "../../assets/Vector_left.png";
import "./carousel.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length); 
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      className="carousel-section"
    >
      {images.length > 1 && (
        <>
          <img
            className="carousel-arrow-left"
            src={Vector_left}
            alt="Previous slide"
            onClick={handlePrevious}
          />
          <img
            className="carousel-arrow-right"
            src={Vector_right}
            alt="Next slide"
            onClick={handleNext}
          />
          <p className="carousel-slide-count">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </section>
  );
}
