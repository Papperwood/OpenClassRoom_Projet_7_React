// On importe les modules nécessaires
import "./gallery.css"; // Importe les styles CSS pour la galerie.
import kasaList from "../../data/kasaList.json"; // Importe les données de la liste de Kasa à partir d'un fichier JSON.
import PropertyCard from "../PropertyCard/PropertyCard"; // Importe le composant PropertyCard.

// Déclare une fonction appelée Gallery qui retourne un composant fonctionnel React.
export default function Gallery() {
  // Retourne le JSX.
  return (
    // Crée un div avec la classe 'gallery-wrapper' pour l'application des styles CSS.
    <div className="gallery-wrapper">
      {/* Le contenu précédent est maintenant enveloppé dans un autre div avec la classe 'gallery'. */}
      <main className="gallery">
        {/* Parcourt le tableau kasaList et pour chaque élément, retourne un composant PropertyCard. */}
        {kasaList.map((kasaList) => {
          // Pour chaque élément de la liste, un composant PropertyCard est créé avec des propriétés spécifiques.
          return (
            <PropertyCard
              key={kasaList.id} // La clé est utilisée par React pour identifier de manière unique chaque composant dans la liste.
              id={kasaList.id} // La propriété id est passée au composant.
              title={kasaList.title} // La propriété title est passée au composant.
              cover={kasaList.cover} // La propriété cover est passée au composant.
            />
          );
        })}
      </main>
    </div>
  );
}
