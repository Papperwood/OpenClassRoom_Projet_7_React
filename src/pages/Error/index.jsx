import "../css/normalize.css";
import "../css/error.css";
import Logo from "../../assets/404.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"


function Error() {
  return (
    <div className="Error">
      <Header />
      <div className="Error_in">
        <img src={Logo} alt="kasa, erreur 404" />
        <p className="Error_in_1">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <link className="Error_in_2" to="/">
          Retourner sur la page d'accueil
        </link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
