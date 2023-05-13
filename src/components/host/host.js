// Host.js
import React from "react";
import "./host.css"; // Importe le CSS pour le composant Host.

function Host({ name, picture }) {
  return (
    <div className="host-container">
      <h2 className="host-name">{name}</h2>
      <img src={picture} alt={name} className="host-picture" />
    </div>
  );
}

export default Host;
