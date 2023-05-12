// On importe les modules nécessaires
import React, { useState } from "react"; // useState est un Hook de React qui permet d'ajouter un état React à une fonction.
import "./dropdown.css"; // Importe les styles css pour le menu déroulant.
import vectorImage from "../../assets/Vector.png"; // Importe l'image pour la flèche du menu déroulant.

// La fonction Dropdown reçoit un objet de propriétés, avec `title` et `content` comme ses attributs.
const Dropdown = ({ title, content }) => {
  // Initialise l'état de l'ouverture du menu déroulant à false (fermé).
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture du menu déroulant.
  const toggleDropdown = () => {
    // Change l'état d'ouverture à son opposé (si ouvert, alors ferme, si fermé, alors ouvre).
    setIsOpen(!isOpen);
  };

  // Retourne le composant JSX.
  return (
    <div className="dropdown">
      {" "}
      {/* Div contenant le menu déroulant */}
      {/* Bouton pour ouvrir/fermer le menu déroulant. Le gestionnaire d'événements onClick appelle la fonction toggleDropdown. */}
      <button className="dropdown-title" onClick={toggleDropdown} tabIndex="0">
        {title} {/* Affiche le titre du menu déroulant */}
        {/* Affiche l'image de la flèche. Si le menu est ouvert, ajoute la classe CSS "rotate" pour faire pivoter la flèche. */}
        <img
          src={vectorImage}
          alt="arrow"
          className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>
      {/* Si le menu est ouvert (isOpen est true), alors affiche le contenu du menu déroulant. */}
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

// Exporte la fonction Dropdown comme module par défaut.
export default Dropdown;
