import React, { useState } from "react";
import "./dropdown.css";
import vectorImage from "../../assets/Vector.png";

const Dropdown = ({ title, content }) => { // deux propriété d'entré qui seront le text
  const [isOpen, setIsOpen] = useState(false); // methode usestate, qui défini isOPEN en false 

  const toggleDropdown = () => { // mise a jour de isOpen pour false->true et vice versa
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-title" onClick={toggleDropdown} tabIndex="0"> {/* gestion d'evenement au click */}
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
