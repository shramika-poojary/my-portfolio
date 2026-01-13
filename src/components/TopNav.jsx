function TopNav({ active, setActive }) {
  return (
    <ul className="nav justify-content-end mb-4 top-nav">
      <li className="nav-item">
        <button
          className={`nav-link ${active === "about" ? "active" : ""}`}
          onClick={() => setActive("about")}
        >
          About
        </button>
      </li>

      <li className="nav-item">
        <button
          className={`nav-link ${active === "skills" ? "active" : ""}`}
          onClick={() => setActive("skills")}
        >
          Skills
        </button>
      </li>
<li className="nav-item">
        <button
          className={`nav-link ${active === "projects" ? "active" : ""}`}
          onClick={() => setActive("projects")}
        >
          Projects
        </button>
      </li>

      <li className="nav-item">
        <button
          className={`nav-link ${active === "education" ? "active" : ""}`}
          onClick={() => setActive("education")}
        >
          Education
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${active === "achievements" ? "active" : ""}`}
          onClick={() => setActive("achievements")}
        >
          Achievements
        </button>
      </li>
       
    </ul>
  
  );
}

export default TopNav;
