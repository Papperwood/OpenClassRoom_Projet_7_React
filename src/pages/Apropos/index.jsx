import "../css/apropos.css";
import aproposBanner from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Dropdown from "../../components/dropdown/dropdown";
import aboutData from "../../data/aboutData.json";

function APropos() {
  /* Setting the title of the page. */
  document.title = "Page A propos";

  return (
    <>
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
    </>
  );
}

export default APropos;