import "../css/logement.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import kasaList from "../../data/kasaList.json";
import Grade from "../../components/grade/grade";
import Carousel from "../../components/carousel/carousel";
import Host from "../../components/host/host";

// Déclare une fonction appelée Logement qui retourne un composant fonctionnel React.
export default function Logement() {
  // Utilise le hook useParams pour obtenir l'identifiant du logement à partir de l'URL.
  const { id } = useParams();
  // Utilise le hook useState pour stocker et modifier l'état de la propriété sélectionnée.
  const [property, setProperty] = useState(null);

  // Utilise le hook useEffect pour trouver et définir la propriété correspondant à l'identifiant obtenu à partir de l'URL.
  useEffect(() => {
    const foundProperty = kasaList.find((item) => item.id === id);
    setProperty(foundProperty);
  }, [id]);

  // Si la propriété n'est pas encore chargée, retourne la page error car null.
  if (!property) {
    return null;
  }

  // Si property existe, alors host existe également.
  const host = property ? property.host : null;

  // Déclare les variables pour les détails du logement.
  const equipments = property.equipments ? property.equipments.join(", ") : "";
  const description = property.description || "";
  const tags = property.tags || [];

  return (
    <div>
      <Carousel images={property.pictures} />
      <div className="middle">
          <main className="middle_in">
            <div className="middle_in_content">
              <div>
                <h1>{property.title}</h1>
                <h2>{property.location}</h2>
                <div>
                  {tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="middle_content_grade_host">
                <Grade grade={property.rating} />
                {host && <Host name={host.name} picture={host.picture} />}
              </div>
            </div>
          </main>
          <div className="logement-container">
            <div className="dropdown-container">
              {/* Affiche deux composants Dropdown pour la description et les équipements du logement. */}
              <Dropdown title="Description" content={description} />
              <Dropdown title="Équipements" content={equipments} />
            </div>
          </div>
      </div>
    </div>
  );
}
