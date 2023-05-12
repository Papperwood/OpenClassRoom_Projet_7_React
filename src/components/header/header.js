// Importe les modules nécessaires
import Navigation from "../navigation/nav.js"; // Importe le composant Navigation.
import Logo from "../../assets/logo_kasa.png"; // Importe l'image du logo.
import "./header.css"; // Importe les styles CSS pour le header.

// Déclare une fonction appelée Header qui retourne un composant fonctionnel React.
export default function Header() {
  // Retourne le JSX.
  return (
    // Un composant header avec la classe 'header' pour l'application de styles CSS.
    <header className="header">
      {/* Affiche l'image du logo de Kasa */}
      <img src={Logo} alt="kasa, location d'appartements" />

      {/* Affiche le composant Navigation */}
      <Navigation />
    </header>
  );
}
