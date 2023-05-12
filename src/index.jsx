// Importer les modules nécessaires
import React from "react"; // Importe React
import "./pages/css/normalize.css"; // Importe normalize.css pour réinitialiser les styles CSS par défaut du navigateur
import ReactDOM from "react-dom/client"; // Importe ReactDOM pour manipuler le DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importe BrowserRouter, Route, et Routes de react-router-dom pour gérer les routes de l'application
import Home from "./pages/Home"; // Importe le composant Home
import Header from "./components/header/header"; // Importe le composant Header
import Footer from "./components/footer/footer"; // Importe le composant Footer
import Apropos from "./pages/Apropos"; // Importe le composant Apropos
import Error from "./pages/Error"; // Importe le composant Error
import Logement from "./pages/Logement"; // Importe le composant Logement

// Crée une racine pour l'application React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Fait le rendu de l'application dans la racine
root.render(
  <React.StrictMode>
    <Router>
      {" "}
      {/* Encapsule l'application dans un Router pour gérer les routes */}
      <Header /> {/* Affiche le composant Header */}
      <Routes>
        {" "}
        {/* Démarre la définition des routes */}
        <Route path="/" exact element={<Home />} />{" "}
        {/* Défini la route pour la page d'accueil */}
        <Route path="/Apropos" element={<Apropos />} />{" "}
        {/* Défini la route pour la page A propos */}
        <Route path="/Logement/:id" element={<Logement />} />{" "}
        {/* Défini la route pour la page Logement avec un paramètre id */}
        <Route path="*" element={<Error />} />{" "}
        {/* Défini une route par défaut qui s'active si aucune des autres routes ne correspond */}
      </Routes>
      <Footer /> {/* Affiche le composant Footer */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
