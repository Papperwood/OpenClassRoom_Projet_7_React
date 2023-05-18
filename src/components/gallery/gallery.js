import "./gallery.css";
import kasaList from "../../data/kasaList.json";
import PropertyCard from "../PropertyCard/PropertyCard";

// Déclare une fonction appelée Gallery qui retourne un composant fonctionnel React.
export default function Gallery() {
  return (
    // Crée un div avec la classe 'gallery-wrapper' pour l'application des styles CSS.
    <div className="gallery-wrapper">
      <main className="gallery">
        {kasaList.map((kasaList) => {
          // Pour chaque élément de la liste, un composant PropertyCard est créé avec des propriétés spécifiques.
          return (
            <PropertyCard
              key={kasaList.id}
              id={kasaList.id}
              title={kasaList.title}
              cover={kasaList.cover}
            />
          );
        })}
      </main>
    </div>
  );
}
