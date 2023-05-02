import "../css/normalize.css";
import "../css/home.css";
import IMG from "../../assets/IMG.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <img src={IMG} alt="Background" className="background-image" />
        <div className="overlay-text">Chez vous, partout et ailleurs</div>
      </div>
      <Footer />
    </div>
  );
}
