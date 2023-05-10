import React from "react";
import star from "../../assets/star.svg";

function Grade({ grade }) {

  return (
    <div className="Grade-wrapper">
      {[1,2,3,4,5].map((_, i) => (
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
