import React, { useState } from "react";
import "./dropdown.css";
import vectorImage from "../../assets/Vector.png";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

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
