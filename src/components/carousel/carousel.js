// On importe les modules nécessaires
import React, { useState } from "react"; // useState est un Hook de React qui permet d'ajouter un état React à une fonction.
import Vector_right from "../../assets/Vector_right.png"; // Importe l'image pour la flèche de droite.
import Vector_left from "../../assets/Vector_left.png"; // Importe l'image pour la flèche de gauche.
import "./carousel.css"; // Importe les styles css pour le carousel.

// La fonction Carousel reçoit un objet de propriétés, avec `images` étant l'une d'entre elles.
export default function Carousel({ images }) {
  // Initialise l'indice de l'image actuelle à 0.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante.
  const handleNext = () => {
    // Définit l'indice de l'image actuelle en ajoutant 1 à l'indice actuel, modulo la longueur du tableau d'images pour boucler à 0 une fois qu'on atteint la fin.
    setCurrentIndex((currentIndex + 1) % images.length); 
  };

  // Fonction pour revenir à l'image précédente.
  const handlePrevious = () => {
    // Définit l'indice de l'image actuelle en soustrayant 1 de l'indice actuel, ou en allant à la dernière image si on est déjà à la première.
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Retourne le composant JSX.
  return (
    // Une section avec une image de fond correspondant à l'image actuelle.
    <section
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      className="carousel-section"
    >
      {/* Si il y a plus d'une image, affiche les boutons de navigation. */}
      {images.length > 1 && (
        <>
          {/* Bouton pour aller à l'image précédente. */}
          <img
            className="carousel-arrow-left"
            src={Vector_left}
            alt="Previous slide"
            onClick={handlePrevious}
          />
          {/* Bouton pour aller à l'image suivante. */}
          <img
            className="carousel-arrow-right"
            src={Vector_right}
            alt="Next slide"
            onClick={handleNext}
          />
          {/* Affiche le comptage des diapositives. */}
          <p className="carousel-slide-count">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </section>
  );
}
