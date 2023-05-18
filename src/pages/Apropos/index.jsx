import "../css/apropos.css";
import aproposBanner from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Dropdown from "../../components/dropdown/dropdown";
import aboutData from "../../data/aboutData.json";

// Déclare une fonction appelée APropos qui retourne un composant fonctionnel React.
function APropos() {
  return (
    <>
      <img src={aproposBanner} className="kalen_img" alt="Banner" />

      <section className="apropos-section">
        {aboutData.map((apropos, index) => (
          // Pour chaque élément du tableau, un composant Dropdown est créé avec des propriétés spécifiques.
          <Dropdown
            title={apropos.title}
            content={apropos.content}
            key={`${apropos.title}-${index}`}
          />
        ))}
      </section>
    </>
  );
}

export default APropos;
