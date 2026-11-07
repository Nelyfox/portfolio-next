import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* SECTION ACCUEIL */}
      <section id="accueil" className="hero">

        {/* Texte de présentation */}
        <div className="hero-content">
          <span className="hero-badge">
            Bienvenue dans mon univers numérique
          </span>

          <h1>
            Je transforme les idées en
            <span> expériences numériques.</span>
          </h1>

          <p>
            Je suis Noëlie, étudiante en informatique et passionnée
            par le développement web, les nouvelles technologies
            et la création de solutions innovantes.
          </p>

          <div className="hero-buttons">
            <a href="#projets" className="primary-button">
              Découvrir mes projets
            </a>

            <a href="#contact" className="secondary-button">
              Me contacter
            </a>
          </div>
        </div>

        {/* PHOTO DE PROFIL */}
        <div className="hero-visual">
          <div className="profile-frame">
            <Image
              src="/images/profile.jpeg"
              alt="Portrait de Noëlie"
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
    <span className="section-label">À PROPOS DE MOI</span>

    <h2>
      Derrière le code, <span>une passion.</span>
    </h2>

    <p>
      Je suis Noëlie, étudiante en troisième année d'informatique,
      passionnée par le développement d'applications et les
      nouvelles technologies.
    </p>

    <p>
      J'aime apprendre, relever de nouveaux défis et transformer
      mes idées en projets concrets. Je cherche constamment à
      développer mes compétences et à découvrir de nouvelles
      possibilités dans le monde du numérique.
    </p>

    <a href="#projets" className="primary-button">
      Voir mes réalisations
    </a>
  </div>

</section>

    {/* SECTION COMPÉTENCES */}
<section id="competences" className="skills">

  <div className="skills-header">
    <span className="section-label">MES COMPÉTENCES</span>

    <h2>
      Mon univers <span>technique.</span>
    </h2>

    <p>
      Les technologies et outils que j'utilise pour concevoir
      et développer mes projets.
    </p>
  </div>

  <div className="skills-container">

    <div className="skill-card">
      <span className="skill-icon">⌨</span>
      <h3>Développement web</h3>
      <p>HTML · CSS · PHP · JavaScript</p>
    </div>

    <div className="skill-card">
      <span className="skill-icon">⌘</span>
      <h3>Programmation</h3>
      <p>Java · Python</p>
    </div>

    <div className="skill-card">
      <span className="skill-icon">▤</span>
      <h3>Bases de données</h3>
      <p>MariaDB</p>
    </div>

    <div className="skill-card">
      <span className="skill-icon">⚙</span>
      <h3>Frameworks</h3>
      <p>Laravel · React · Next.js</p>
    </div>

    <div className="skill-card">
      <span className="skill-icon">✧</span>
      <h3>Outils & technologies</h3>
      <p>Git · GitHub · VS Code</p>
    </div>

  </div>

</section>

{/* SECTION PROJETS */}
<section id="projets" className="projects">

  <div className="projects-header">
    <span className="section-label">MES RÉALISATIONS</span>

    <h2>
      Des idées qui prennent <span>vie.</span>
    </h2>

    <p>
      Découvrez quelques projets sur lesquels je travaille
      ou dont je développe actuellement la conception.
    </p>
  </div>

  <div className="projects-container">

    {/* Projet 1 */}
    <article className="project-card">
      <div className="project-image">
        <span>💜</span>
      </div>

      <div className="project-info">
        <span className="project-status">En développement</span>
        <h3>MrFinManage</h3>

        <p>
          Une application intelligente de gestion financière
          permettant de suivre ses revenus, ses dépenses
          et ses budgets.
        </p>

        <div className="project-tags">
          <span>Laravel</span>
          <span>PHP</span>
          <span>MariaDB</span>
        </div>
      </div>
    </article>

    {/* Projet 2 */}
    <article className="project-card">
      <div className="project-image">
        <span>🧩</span>
      </div>

      <div className="project-info">
        <span className="project-status">En développement</span>
        <h3>QuizApp</h3>

        <p>
          Une application de quiz interactifs permettant
          aux utilisateurs de tester leurs connaissances
          dans différentes disciplines.
        </p>

        <div className="project-tags">
          <span>PHP</span>
          <span>MySQL</span>
          <span>JavaScript</span>
        </div>
      </div>
    </article>

   {/* Projet 4 : Plumes D'or */}
    <article className="project-card">

      <div className="project-image poem-image">
        <span>❝</span>
      </div>

      <div className="project-info">

        <span className="project-status">Réalisé</span>

        <h3>Plumes D’or</h3>

        <p>
          Un espace littéraire dédié à la poésie, réunissant
          les œuvres de différents auteurs ainsi que mes
          propres créations. Un univers où les mots prennent vie.
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
      Une idée, un projet ? <span>Parlons-en !</span>
    </h2>

    <p>
      Tu souhaites collaborer avec moi, discuter d'un projet
      ou simplement échanger ? Je serais ravie de te lire.
    </p>

    <a
      href="mailto:noeliebadagbon@email.com"
      className="contact-button"
    >
      M'envoyer un message ✉
    </a>

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
    <p>Créons quelque chose de remarquable.</p>
  </div>

</section>

{/* FOOTER */}
<footer className="footer">

  <div className="footer-top">

    <a href="#accueil" className="logo">
      Nely<span>fox</span>.
    </a>

    <p>
      Transformer les idées en expériences numériques.
    </p>

    <div className="footer-links">
      <a href="#accueil">Accueil</a>
      <a href="#apropos">À propos</a>
      <a href="#competences">Compétences</a>
      <a href="#projets">Projets</a>
      <a href="#contact">Contact</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Nelyfox. Tous droits réservés.
    </p>

    <p>Conçu avec passion et beaucoup de créativité. 💜</p>
  </div>

</footer>

    </main>
  );
}