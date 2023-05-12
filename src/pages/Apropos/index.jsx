// Importe les modules nécessaires
import "../css/apropos.css"; // Importe les styles CSS pour la page A propos.
import aproposBanner from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"; // Importe l'image de la bannière.
import Dropdown from "../../components/dropdown/dropdown"; // Importe le composant Dropdown.
import aboutData from "../../data/aboutData.json"; // Importe les données pour la page A propos à partir d'un fichier JSON.

// Déclare une fonction appelée APropos qui retourne un composant fonctionnel React.
function APropos() {
  // Change le titre de la page.
  document.title = "Page A propos";

  // Retourne le JSX.
  return (
    <>
      {/* Affiche l'image de la bannière */}
      <img src={aproposBanner} className="kalen_img" alt="Banner" />

      {/* Crée une section avec la classe 'apropos-section' */}
      <section className="apropos-section">
        {/* Parcourt le tableau aboutData et pour chaque élément, retourne un composant Dropdown. */}
        {aboutData.map((apropos, index) => (
          // Pour chaque élément du tableau, un composant Dropdown est créé avec des propriétés spécifiques.
          <Dropdown
            title={apropos.title} // La propriété title est passée au composant.
            content={apropos.content} // La propriété content est passée au composant.
            key={`${apropos.title}-${index}`} // La clé est utilisée par React pour identifier de manière unique chaque composant dans la liste.
          />
        ))}
      </section>
    </>
  );
}

// Exporte la fonction APropos comme module par défaut.
export default APropos;
