import "../css/logement.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import kasaList from "../../data/kasaList.json";

export default function Logement() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = kasaList.find((item) => item.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const equipments = property.equipments ? property.equipments.join(", ") : "";
  const description = property.description || "";

  return (
    <div>
      <h1>{property.title}</h1>
      <div className="logement-container">
        <div className="dropdown-container" style={{ display: "flex" }}>
          <Dropdown
            title="Description"
            content={description}
            isOpen={isOpen2}
            toggleDropdown={toggleDropdown2}
          />
          <Dropdown
            title="Équipements"
            content={equipments}
            isOpen={isOpen1}
            toggleDropdown={toggleDropdown1}
          />
        </div>
      </div>
    </div>
  );
}
