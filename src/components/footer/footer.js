// Importer les modules nécessaires
import logo from "../../assets/LOGO.png"; // Importe l'image du logo à partir du chemin spécifié
import "./footer.css"; // Importe les styles CSS pour le footer

// Déclare une fonction appelée Footer qui retourne un composant fonctionnel React
export default function Footer() {
  // Retourne le JSX (le code qui ressemble à du HTML est appelé JSX)
  return (
    // Un composant footer avec la classe 'footer' pour l'application de styles CSS
    <footer className="footer">
      {/* Image du logo de Kasa */}
      <img src={logo} alt="Kasa" />

      {/* Texte de copyright qui apparaît dans le footer */}
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
