import { Card, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body>
        {/* About Me */}
        <h3 className="text-warning">About Me</h3>
        <p className="mt-3">
          I am a Java Full Stack Developer with hands-on experience in building
          RESTful APIs and database-driven applications using Java and Spring Boot.
          I have a strong foundation in object-oriented programming, MVC architecture,
          and modern web technologies.
        </p>

        <p>
          Through academic and personal projects, I have worked on backend development,
          API design, database integration, and frontend development using React and
          Bootstrap. I am eager to learn, grow, and contribute effectively in a
          professional software development environment.
        </p>

        {/* What I'm Doing */}
        <h4 className="mt-5 text-warning">My Expertise
</h4>

        <Row className="mt-4 g-4 ">
          <Col md={6}>
            <div className="doing-card border border-warning rounded-4 p-2">
              <i className="bi bi-code-slash fs-3 text-primary"></i>
              <h6 className="mt-3 text-warning">Backend Development</h6>
              <p>
                Developing RESTful APIs and backend logic using Java, Spring Boot,
                and layered architecture with proper database integration.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="doing-card border border-warning rounded-4 p-2">
              <i className="bi bi-window fs-3 text-primary"></i>
              <h6 className="mt-3 text-warning">Frontend Development</h6>
              <p>
                Building responsive and user-friendly interfaces using React,
                Bootstrap, HTML, CSS, and JavaScript.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="doing-card border border-warning rounded-4 p-2">
              <i className="bi bi-database fs-3 text-primary"></i>
              <h6 className="mt-3 text-warning">Database Design</h6>
              <p>
                Designing and managing relational and NoSQL databases using
                MySQL and MongoDB for scalable applications.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="doing-card border border-warning rounded-4 p-2">
              <i className="bi bi-tools fs-3 text-primary"></i>
              <h6 className="mt-3 text-warning">API Testing & Tools</h6>
              <p>
                Testing and validating APIs using Postman and managing
                version control with Git and GitHub.
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default About;
