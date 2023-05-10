import React, { useState, useEffect } from "react";
import kasaList from "../../data/kasaList.json";
import "./carousel.css";

const CarouselComponent = ({ selectedId }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const selectedProperty = kasaList.find(item => item.id === selectedId);
    if (selectedProperty) {
      setImageList(selectedProperty.pictures);
    }
  }, [selectedId]);

  return (
    <div className="carousel-container">
      {imageList.length > 0 && (
        <Carousel
          showArrows
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop
          width="1240px"
        >
          {imageList.map((image, index) => (
            <div key={index}>
              <img className="carousel-slide-image" src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselComponent;