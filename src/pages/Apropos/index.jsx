import "../css/normalize.css";
import "../css/apropos.css";
import aproposBanner from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Dropdown from "../../components/dropdown/dropdown";

function APropos() {
  /* Setting the title of the page. */
  document.title = "Page A propos";

  const aproposData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <>
      <Header />
      <img src={aproposBanner} className="kalen_img" alt="Banner" />
      <section className="apropos-section">
        {aproposData.map((apropos, index) => (
          <Dropdown
            title={apropos.title}
            content={apropos.content}
            key={`${apropos.title}-${index}`}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default APropos;
