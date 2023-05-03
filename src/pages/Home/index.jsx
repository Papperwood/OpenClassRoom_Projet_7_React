import "../css/normalize.css";
import "../css/home.css";
import image from "../../assets/IMG.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Gallery from '../../components/gallery/gallery'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <img src={image} alt="Background" className="background-image" />
        <div className="overlay-text">Chez vous, partout et ailleurs</div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}
