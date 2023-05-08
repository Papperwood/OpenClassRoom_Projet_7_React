import "./gallery.css";
import kasaList from "../../data/kasaList.json";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function Gallery() {
  const handlePropertyClick = (id) => {};
  return (
    <main className="gallery">
      {kasaList.map((kasaList) => {
        return (
          <PropertyCard
            key={kasaList.id}
            id={kasaList.id}
            title={kasaList.title}
            cover={kasaList.cover}
            onPropertyClick={handlePropertyClick}
          />
        );
      })}
    </main>
  );
}
