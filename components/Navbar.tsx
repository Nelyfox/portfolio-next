"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const { langue, changerLangue } = useLanguage();

  const fermerMenu = () => setMenuOuvert(false);

  return (
    <header className="navbar">

      <a href="#accueil" className="logo" translate="no">
        Nely<span>fox</span>.
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {menuOuvert ? "✕" : "☰"}
      </button>

      <nav className={`nav-menu ${menuOuvert ? "active" : ""}`}>

        <a href="#accueil" onClick={fermerMenu}>
          {langue === "fr" ? "Accueil" : "Home"}
        </a>

        <a href="#apropos" onClick={fermerMenu}>
          {langue === "fr" ? "À propos" : "About"}
        </a>

        <a href="#competences" onClick={fermerMenu}>
          {langue === "fr" ? "Compétences" : "Skills"}
        </a>

        <a href="#projets" onClick={fermerMenu}>
          {langue === "fr" ? "Projets" : "Projects"}
        </a>

        <a href="#contact" onClick={fermerMenu}>
          Contact
        </a>

        <button
          className="language-toggle"
          onClick={() => {
            changerLangue();
            fermerMenu();
          }}
        >
          {langue === "fr" ? "EN" : "FR"}
        </button>

      </nav>

      <a href="#contact" className="nav-button">
        {langue === "fr" ? "Me contacter" : "Contact me"}
      </a>

    </header>
  );
}