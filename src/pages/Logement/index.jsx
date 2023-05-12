import "../css/logement.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import kasaList from "../../data/kasaList.json";
import Grade from "../../components/grade/grade";
import Carousel from "../../components/carousel/carousel";

export default function Logement() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const foundProperty = kasaList.find((item) => item.id === id);
    setProperty(foundProperty);
  }, [id]);

  useEffect(() => {
    const pictures = kasaList.find(item => item.id === id).pictures;
    setImages(pictures);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const equipments = property.equipments ? property.equipments.join(", ") : "";
  const description = property.description || "";
  const tags = property.tags || [];

  return (
    <div>
      <Carousel images={images} />
      <h1>{property.title}</h1>
      <h3>{property.location}</h3>
      <div className="info-container">
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Grade grade={property.rating} />
      </div>
      <div className="logement-container">
        <div className="dropdown-container" style={{ display: "flex" }}>
          <Dropdown title="Description" content={description} />
          <Dropdown title="Équipements" content={equipments} />
        </div>
      </div>
    </div>
  );
}
