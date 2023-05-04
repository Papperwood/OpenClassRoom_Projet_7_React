import "../css/logement.css";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import kasaList from "../../data/kasaList.json";


export default function Logement() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = kasaList.find((item) => item.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      {/* Affichez les autres informations de la propriété ici */}
    </div>
  );
}
