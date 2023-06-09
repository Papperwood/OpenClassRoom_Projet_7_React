import "../css/home.css";
import image from "../../assets/IMG.png";
import Gallery from "../../components/gallery/gallery";

// Déclare une fonction appelée Home qui retourne un composant fonctionnel React.
export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src={image} alt="Background" className="background-image" />
        <div className="overlay-text">Chez vous, partout et ailleurs</div>
      </div>
      <Gallery />
    </div>
  );
}
