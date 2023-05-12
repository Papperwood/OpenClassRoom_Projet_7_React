// Importe les modules nécessaires
import "../css/home.css"; // Importe les styles CSS pour la page d'accueil.
import image from "../../assets/IMG.png"; // Importe l'image de fond pour la page d'accueil.
import Gallery from "../../components/gallery/gallery"; // Importe le composant Gallery.

// Déclare une fonction appelée Home qui retourne un composant fonctionnel React.
export default function Home() {
  // Retourne le JSX.
  return (
    // Crée un div avec la classe 'home' pour l'application des styles CSS.
    <div className="home">
      <div className="home-container">
        {/* Affiche l'image de fond */}
        <img src={image} alt="Background" className="background-image" />
        {/* Affiche un texte d'introduction */}
        <div className="overlay-text">Chez vous, partout et ailleurs</div>
      </div>
      {/* Affiche le composant Gallery */}
      <Gallery />
    </div>
  );
}
