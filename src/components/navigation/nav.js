import { Link } from "react-router-dom";
import "./nav.css";

// Déclare une fonction appelée Navbar qui retourne un composant fonctionnel React.
export default function Navbar() {
  return (
    // Un composant nav avec la classe 'navigation' pour l'application de styles CSS.
    <nav className="navigation">
      <ul className="nav_in">
        <li className="nav_click">
          <Link to="/">Accueil</Link>
        </li>

        <li className="nav_click">
          <Link to="/Apropos/">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
