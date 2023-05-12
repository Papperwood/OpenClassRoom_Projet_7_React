// Importe les modules nécessaires
import { Link } from "react-router-dom"; // Importe le composant Link de react-router-dom pour la gestion des routes.
import "./nav.css"; // Importe les styles CSS pour la barre de navigation.

// Déclare une fonction appelée Navbar qui retourne un composant fonctionnel React.
export default function Navbar() {
  // Retourne le JSX.
  return (
    // Un composant nav avec la classe 'navigation' pour l'application de styles CSS.
    <nav className="navigation">
      {/* Crée une liste non ordonnée avec la classe 'nav_in'. */}
      <ul className="nav_in">
        {/* Crée un élément de liste avec la classe 'nav_click'. */}
        <li className="nav_click">
          {/* Crée un lien vers la route '/'. */}
          <Link to="/">
            {/* Le texte du lien est 'Accueil'. */}
            Accueil
          </Link>
        </li>
        {/* Crée un autre élément de liste avec la classe 'nav_click'. */}
        <li className="nav_click">
          {/* Crée un lien vers la route '/Apropos/'. */}
          <Link to="/Apropos/">
            {/* Le texte du lien est 'A propos'. */}A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
