// Importe les modules nécessaires
import React from "react"; // Importe React.
import starFull from "../../assets/star-full.png"; // Importe l'image pour une étoile pleine.
import starEmpty from "../../assets/star-empty.png"; // Importe l'image pour une étoile vide.
import "./grade.css"; // Importe les styles CSS pour le grade.

// Définit une fonction Grade qui prend en entrée un objet de propriétés, avec `grade` comme propriété.
function Grade({ grade }) {
  // Retourne le JSX.
  return (
    <div className="Grade-wrapper">
      {/* Pour chaque nombre de 1 à 5, crée une image d'étoile. */}
      {[1, 2, 3, 4, 5].map((_, i) => (
        // Une image d'étoile est créée.
        // Si l'indice est inférieur à la note, alors l'étoile est pleine, sinon elle est vide.
        // La clé est utilisée par React pour identifier de manière unique chaque élément dans la liste.
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

// Exporte la fonction Grade comme module par défaut.
export default Grade;
