import { Card } from "react-bootstrap";

import java from "../assets/images/java.png";
import spring from "../assets/images/springboot.png";
import python from "../assets/images/python.png";
import sql from "../assets/images/sql.png";
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/javascript.png";
import bootstrap from "../assets/images/bootstrap.png";
import mysql from "../assets/images/mysql.png";
import mongodb from "../assets/images/mongodb.png";
import firebase from "../assets/images/firebase.svg";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import postman from "../assets/images/postman.svg";

function Skills() {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body>
        <h3 className="text-warning">Skills</h3>

        {/* Backend */}
        <h6 className="mt-4 text-warning">Programming languages</h6>
        <div className="skills-grid">
          <Skill icon={java} name="Java"/>
         
          <Skill icon={sql} name="SQL" />
          <Skill icon={python} name="Python" />
        </div>

        {/* Frontend */}
        <h6 className="mt-4 text-warning">Frontend</h6>
        <div className="skills-grid">
          <Skill icon={html} name="HTML" />
          <Skill icon={css} name="CSS" />
          <Skill icon={js} name="JavaScript" />
          
        </div>

    {/* Frontend */}
        <h6 className="mt-4 text-warning">Frameworks</h6>
        <div className="skills-grid">
           <Skill icon={spring} name="Spring Boot" />
          <Skill icon={react} name="React" />
          <Skill icon={bootstrap} name="Bootstrap" />
        </div>
        {/* Database */}
        <h6 className="mt-4 text-warning">Database</h6>
        <div className="skills-grid">
          <Skill icon={mysql} name="MySQL" />
          <Skill icon={mongodb} name="MongoDB" />
          <Skill icon={firebase} name="Firebase" />
        </div>

        {/* Tools */}
        <h6 className="mt-4 text-warning">Tools</h6>
        <div className="skills-grid">
          <Skill icon={git} name="Git" />
          <Skill icon={github} name="GitHub" />
          <Skill icon={postman} name="Postman" />
        </div>
      </Card.Body>
    </Card>
  );
}

/* Reusable Skill Card */
function Skill({ icon, name }) {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Skills;
