// Importe les modules nécessaires
import { Link } from "react-router-dom"; // Importe le composant Link de react-router-dom pour la gestion des routes.
import "../css/error.css"; // Importe les styles CSS pour la page d'erreur.
import Logo from "../../assets/404.png"; // Importe l'image du logo pour la page d'erreur.

// Déclare une fonction appelée Error qui retourne un composant fonctionnel React.
function Error() {
  // Retourne le JSX.
  return (
    // Crée un div avec la classe 'Error' pour l'application des styles CSS.
    <div className="Error">
      {/* Crée un div avec la classe 'Error_in' pour l'application des styles CSS. */}
      <div className="Error_in">
        {/* Affiche l'image du logo d'erreur */}
        <img src={Logo} alt="kasa, erreur 404" />
        {/* Affiche un message d'erreur */}
        <p className="Error_in_1">
          Oups! La page que vous demandez n'existe pas.
        </p>
        {/* Crée un lien vers la route '/'. */}
        <Link className="Error_in_2" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

// Exporte la fonction Error comme module par défaut.
export default Error;
