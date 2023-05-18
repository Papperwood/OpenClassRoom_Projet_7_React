import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

// Déclare une fonction appelée PropertyCard qui prend en entrée un objet de propriétés, avec `id`, `title`, et `cover` comme propriétés.
export default function PropertyCard({ id, title, cover }) {
  return (
    // Crée un lien vers la route `/Logement/${id}`, avec la classe 'PropertyCard' pour l'application des styles CSS.
    <Link to={`/Logement/${id}`} className="PropertyCard">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
