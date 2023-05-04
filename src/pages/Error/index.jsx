import "../css/error.css";
import Logo from "../../assets/404.png";


function Error() {
  return (
    <div className="Error">
      <div className="Error_in">
        <img src={Logo} alt="kasa, erreur 404" />
        <p className="Error_in_1">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <button className="Error_in_2" to="/">
          Retourner sur la page d'accueil
        </button>
      </div>
    </div>
  );
}

export default Error;
