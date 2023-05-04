import "../css/normalize.css";
import "../css/apropos.css";
import aproposBanner from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Dropdown from "../../components/dropdown/dropdown";
import aboutData from "../../data/aboutData.json";

function APropos() {
  /* Setting the title of the page. */
  document.title = "Page A propos";

  return (
    <>
      <Header />
      <img src={aproposBanner} className="kalen_img" alt="Banner" />
      <section className="apropos-section">
        {aboutData.map((apropos, index) => (
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
