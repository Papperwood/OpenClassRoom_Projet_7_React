import React from "react";
import star from "../../assets/star.svg";

function Grade({ grade }) {
  const totalStar = 5;

  return (
    <div className="Grade-wrapper">
      {[...Array(totalStar)].map((_, i) => (
        <img
          className={i < grade ? "star-full" : "star-empty"}
          key={"star-" + i}
          src={star}
          alt={i < grade ? "Full Star Grade" : "Empty Star Grade"}
        />
      ))}
    </div>
  );
}

export default Grade;
