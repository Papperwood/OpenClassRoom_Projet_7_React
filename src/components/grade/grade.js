// Importe les modules nécessaires
import React from "react";
import starFull from "../../assets/star-full.png";
import starEmpty from "../../assets/star-empty.png";
import "./grade.css";

// Définit une fonction Grade qui prend en entrée un objet de propriétés, avec `grade` comme propriété.
function Grade({ grade }) {
  return (
    <div className="Grade-wrapper">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <img
          className={i < grade ? "star-full" : "star-empty"}
          key={"star-" + i}
          src={i < grade ? starFull : starEmpty}
          alt={i < grade ? "Full Star Grade" : "Empty Star Grade"}
        />
      ))}
    </div>
  );
}

export default Grade;
