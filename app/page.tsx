"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { langue } = useLanguage();
  const fr = langue === "fr";

  return (
    <main>
      <Navbar />

      {/* SECTION ACCUEIL */}
      <section id="accueil" className="hero">

        <div className="hero-content">
          <span className="hero-badge">
            {fr ? "Bienvenue dans mon univers numérique" : "Welcome to my digital world"}
          </span>

          <h1>
            {fr ? "Je transforme les idées en" : "I transform ideas into"}
            <span>
              {fr ? " expériences numériques." : " digital experiences."}
            </span>
          </h1>

          <p>
            {fr
              ? "Je suis Noëlie, étudiante en informatique et passionnée par le développement web, les nouvelles technologies et la création de solutions innovantes."
              : "I am Noëlie, a computer science student passionate about web development, new technologies and creating innovative solutions."}
          </p>

          <div className="hero-buttons">
            <a href="#projets" className="primary-button">
              {fr ? "Découvrir mes projets" : "Explore my projects"}
            </a>

            <a href="#contact" className="secondary-button">
              {fr ? "Me contacter" : "Contact me"}
            </a>
          </div>
        </div>

        {/* PHOTO DE PROFIL */}
        <div className="hero-visual">
          <div className="profile-frame">
            <Image
              src="/images/profile.jpeg"
              alt={fr ? "Portrait de Noëlie" : "Portrait of Noëlie"}
              width={400}
              height={500}
              priority
              className="profile-photo"
            />
          </div>
        </div>

      </section>

      {/* SECTION À PROPOS */}
      <section id="apropos" className="about">

        <div className="about-visual">
          <div className="about-decoration">
            <span>✦</span>
            <h2>Nelyfox</h2>
            <p>Curiosity · Creativity · Growth</p>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">
            {fr ? "À PROPOS DE MOI" : "ABOUT ME"}
          </span>

          <h2>
            {fr ? "Derrière le code," : "Behind the code,"}
            <span>{fr ? " une passion." : " a passion."}</span>
          </h2>

          <p>
            {fr
              ? "Je suis Noëlie, étudiante en troisième année d'informatique, passionnée par le développement d'applications et les nouvelles technologies."
              : "I am Noëlie, a third-year computer science student passionate about application development and new technologies."}
          </p>

          <p>
            {fr
              ? "J'aime apprendre, relever de nouveaux défis et transformer mes idées en projets concrets. Je cherche constamment à développer mes compétences et à découvrir de nouvelles possibilités dans le monde du numérique."
              : "I enjoy learning, taking on new challenges and turning my ideas into real projects. I am constantly looking to improve my skills and explore new possibilities in the digital world."}
          </p>

          <a href="#projets" className="primary-button">
            {fr ? "Voir mes réalisations" : "View my work"}
          </a>
        </div>

      </section>

      {/* SECTION COMPÉTENCES */}
      <section id="competences" className="skills">

        <div className="skills-header">
          <span className="section-label">
            {fr ? "MES COMPÉTENCES" : "MY SKILLS"}
          </span>

          <h2>
            {fr ? "Mon univers" : "My technical"}
            <span>{fr ? " technique." : " world."}</span>
          </h2>

          <p>
            {fr
              ? "Les technologies et outils que j'utilise pour concevoir et développer mes projets."
              : "The technologies and tools I use to design and develop my projects."}
          </p>
        </div>

        <div className="skills-container">

          <div className="skill-card">
            <span className="skill-icon">⌨</span>
            <h3>{fr ? "Développement web" : "Web development"}</h3>
            <p>HTML · CSS · PHP · JavaScript</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">⌘</span>
            <h3>{fr ? "Programmation" : "Programming"}</h3>
            <p>Java · Python</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">▤</span>
            <h3>{fr ? "Bases de données" : "Databases"}</h3>
            <p>MariaDB</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">⚙</span>
            <h3>Frameworks</h3>
            <p>Laravel · React · Next.js</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">✧</span>
            <h3>{fr ? "Outils & technologies" : "Tools & technologies"}</h3>
            <p>Git · GitHub · VS Code</p>
          </div>

        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="projects">

        <div className="projects-header">
          <span className="section-label">
            {fr ? "MES RÉALISATIONS" : "MY PROJECTS"}
          </span>

          <h2>
            {fr ? "Des idées qui prennent" : "Ideas brought to"}
            <span>{fr ? " vie." : " life."}</span>
          </h2>

          <p>
            {fr
              ? "Découvrez quelques projets sur lesquels je travaille ou dont je développe actuellement la conception."
              : "Discover some of the projects I am working on or currently designing."}
          </p>
        </div>

        <div className="projects-container">

          {/* PROJET 1 */}
          <article className="project-card">
            <div className="project-image">
              <span>💜</span>
            </div>

            <div className="project-info">
              <span className="project-status">
                {fr ? "En développement" : "In development"}
              </span>

              <h3>MrFinManage</h3>

              <p>
                {fr
                  ? "Une application intelligente de gestion financière permettant de suivre ses revenus, ses dépenses et ses budgets."
                  : "An intelligent financial management application designed to track income, expenses and budgets."}
              </p>

              <div className="project-tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MariaDB</span>
              </div>
            </div>
          </article>

          {/* PROJET 2 */}
          <article className="project-card">
            <div className="project-image">
              <span>🧩</span>
            </div>

            <div className="project-info">
              <span className="project-status">
                {fr ? "En développement" : "In development"}
              </span>

              <h3>QuizApp</h3>

              <p>
                {fr
                  ? "Une application de quiz interactifs permettant aux utilisateurs de tester leurs connaissances dans différentes disciplines."
                  : "An interactive quiz application that allows users to test their knowledge in different subjects."}
              </p>

              <div className="project-tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
              </div>
            </div>
          </article>

          {/* PROJET 3 : PLUMES D'OR */}
          <article className="project-card">
            <div className="project-image poem-image">
              <span>❝</span>
            </div>

            <div className="project-info">
              <span className="project-status">
                {fr ? "Réalisé" : "Completed"}
              </span>

              <h3>Plumes D’or</h3>

              <p>
                {fr
                  ? "Un espace littéraire dédié à la poésie, réunissant les œuvres de différents auteurs ainsi que mes propres créations. Un univers où les mots prennent vie."
                  : "A literary space dedicated to poetry, bringing together works by different authors as well as my own creations. A world where words come to life."}
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>Web design</span>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="contact">

        <div className="contact-content">
          <span className="section-label">CONTACT</span>

          <h2>
            {fr ? "Une idée, un projet ?" : "An idea, a project?"}
            <span>{fr ? " Parlons-en !" : " Let's talk!"}</span>
          </h2>

          <p>
            {fr
              ? "Tu souhaites collaborer avec moi, discuter d'un projet ou simplement échanger ? Je serais ravie de te lire."
              : "Would you like to collaborate with me, discuss a project or simply have a conversation? I would be delighted to hear from you."}
          </p>

          <ContactForm />
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Nelyfox"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/noëlie-badagbon-384201356/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-decoration">
          <span>✦</span>
          <p>
            {fr
              ? "Créons quelque chose de remarquable."
              : "Let's create something remarkable."}
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">

          <a href="#accueil" className="logo">
            Nely<span>fox</span>.
          </a>

          <p>
            {fr
              ? "Transformer les idées en expériences numériques."
              : "Turning ideas into digital experiences."}
          </p>

          <div className="footer-links">
            <a href="#accueil">{fr ? "Accueil" : "Home"}</a>
            <a href="#apropos">{fr ? "À propos" : "About"}</a>
            <a href="#competences">{fr ? "Compétences" : "Skills"}</a>
            <a href="#projets">{fr ? "Projets" : "Projects"}</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Nelyfox. {fr ? "Tous droits réservés." : "All rights reserved."}
          </p>

          <p className="credo">
            ✦ {fr
              ? "Les étoiles inspirent, la science révèle, la création révolutionne."
              : "Stars inspire, science reveals, creation revolutionizes."} ✦
          </p>
        </div>

      </footer>

    </main>
  );
}