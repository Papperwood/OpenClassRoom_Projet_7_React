// Importe les modules nécessaires
import React from "react"; // Importe React.
import { Link } from "react-router-dom"; // Importe le composant Link de react-router-dom pour la gestion des routes.
import "./PropertyCard.css"; // Importe les styles CSS pour le composant PropertyCard.

// Déclare une fonction appelée PropertyCard qui prend en entrée un objet de propriétés, avec `id`, `title`, et `cover` comme propriétés.
export default function PropertyCard({ id, title, cover }) {
  // Retourne le JSX.
  return (
    // Crée un lien vers la route `/Logement/${id}`, avec la classe 'PropertyCard' pour l'application des styles CSS.
    <Link to={`/Logement/${id}`} className="PropertyCard">
      {/* Affiche l'image de couverture du bien immobilier */}
      <img src={cover} alt={title} />
      {/* Affiche le titre du bien immobilier */}
      <h3>{title}</h3>
    </Link>
  );
}
