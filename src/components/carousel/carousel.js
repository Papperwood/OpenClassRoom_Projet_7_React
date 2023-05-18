import React, { useState } from "react";
import Vector_right from "../../assets/Vector_right.png";
import Vector_left from "../../assets/Vector_left.png";
import "./carousel.css";

// La fonction Carousel reçoit un objet de propriétés, avec `images` étant l'une d'entre elles.
export default function Carousel({ images }) {
  // Initialise l'indice de l'image actuelle à 0.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante.
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente.
  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    // Une section avec une image de fond correspondant à l'image actuelle.
    <section
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      className="carousel-section"
    >
      {/* Si il y a plus d'une image, affiche les boutons de navigation. */}
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
