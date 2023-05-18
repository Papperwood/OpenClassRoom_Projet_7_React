import logo from "../../assets/LOGO.png";
import "./footer.css";
// Déclare une fonction appelée Footer qui retourne un composant fonctionnel React
export default function Footer() {
  return (
    // Un composant footer avec la classe 'footer' pour l'application de styles CSS
    <footer className="footer">
      <img src={logo} alt="Kasa" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
