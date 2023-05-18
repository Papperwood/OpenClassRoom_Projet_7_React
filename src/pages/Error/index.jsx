import { Link } from "react-router-dom";
import "../css/error.css";
import Logo from "../../assets/404.png";

// Déclare une fonction appelée Error qui retourne un composant fonctionnel React.
function Error() {
  return (
    <div className="Error">
      <div className="Error_in">
        <img src={Logo} alt="kasa, erreur 404" />

        <p className="Error_in_1">
          Oups! La page que vous demandez n'existe pas.
        </p>

        <Link className="Error_in_2" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
