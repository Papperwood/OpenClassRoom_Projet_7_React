import React, { useState } from "react";
import "./dropdown.css";
import vectorImage from "../../assets/Vector.png";

// La fonction Dropdown reçoit un objet de propriétés, avec `title` et `content` comme ses attributs.
const Dropdown = ({ title, content }) => {
  // Initialise l'état de l'ouverture du menu déroulant à false (fermé).
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture du menu déroulant.
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-title" onClick={toggleDropdown} tabIndex="0">
        {title}
        <img
          src={vectorImage}
          alt="arrow"
          className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;
