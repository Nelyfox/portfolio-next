"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <header className="navbar">

      <a href="#accueil" className="logo">
        Nely<span>fox</span>.
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-label="Ouvrir ou fermer le menu"
      >
        {menuOuvert ? "✕" : "☰"}
      </button>

      <nav className={`nav-menu ${menuOuvert ? "active" : ""}`}>
        <a href="#accueil" onClick={() => setMenuOuvert(false)}>Accueil</a>
        <a href="#apropos" onClick={() => setMenuOuvert(false)}>À propos</a>
        <a href="#competences" onClick={() => setMenuOuvert(false)}>Compétences</a>
        <a href="#projets" onClick={() => setMenuOuvert(false)}>Projets</a>
        <a href="#contact" onClick={() => setMenuOuvert(false)}>Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Me contacter
      </a>

    </header>
  );
}