// Importe les modules nécessaires
import "../css/logement.css"; // Importe les styles CSS pour la page de logement.
import React, { useState, useEffect } from "react"; // Importe useState et useEffect de React.
import { useParams } from "react-router-dom"; // Importe useParams de react-router-dom pour obtenir les paramètres de l'URL.
import Dropdown from "../../components/dropdown/dropdown"; // Importe le composant Dropdown.
import kasaList from "../../data/kasaList.json"; // Importe les données de la liste de logements.
import Grade from "../../components/grade/grade"; // Importe le composant Grade.
import Carousel from "../../components/carousel/carousel"; // Importe le composant Carousel.

// Déclare une fonction appelée Logement qui retourne un composant fonctionnel React.
export default function Logement() {
  // Utilise le hook useParams pour obtenir l'identifiant du logement à partir de l'URL.
  const { id } = useParams();
  // Utilise le hook useState pour stocker et modifier l'état de la propriété sélectionnée.
  const [property, setProperty] = useState(null);
  // Utilise le hook useState pour stocker et modifier l'état des images du logement.
  const [images, setImages] = useState([]);

  // Utilise le hook useEffect pour trouver et définir la propriété correspondant à l'identifiant obtenu à partir de l'URL.
  useEffect(() => {
    const foundProperty = kasaList.find((item) => item.id === id);
    setProperty(foundProperty);
  }, [id]);

  // Utilise le hook useEffect pour trouver et définir les images de la propriété correspondant à l'identifiant obtenu à partir de l'URL.
  useEffect(() => {
    const pictures = kasaList.find((item) => item.id === id).pictures;
    setImages(pictures);
  }, [id]);

  // Si la propriété n'est pas encore chargée, retourne un div avec le texte 'Loading...'.
  if (!property) {
    return <div>Loading...</div>;
  }

  // Déclare les variables pour les détails du logement.
  const equipments = property.equipments ? property.equipments.join(", ") : "";
  const description = property.description || "";
  const tags = property.tags || [];

  // Retourne le JSX.
  return (
    <div>
      {/* Affiche le composant Carousel avec les images du logement. */}
      <Carousel images={images} />
      {/* Affiche le titre du logement. */}
      <h1>{property.title}</h1>
      {/* Affiche l'emplacement du logement. */}
      <h3>{property.location}</h3>
      <div className="info-container">
        <div className="tags-container">
          {/* Mappe sur les tags du logement et les affiche. */}
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {/* Affiche le composant Grade avec la note du logement. */}
        <Grade grade={property.rating} />
      </div>
      <div className="logement-container">
        <div className="dropdown-container" style={{ display: "flex" }}>
          {/* Affiche deux composants Dropdown pour la description et les équipements du logement. */}
          <Dropdown title="Description" content={description} />
          <Dropdown title="Équipements" content={equipments} />
        </div>
      </div>
    </div>
  );
}
