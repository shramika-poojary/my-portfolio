import { Card, Button } from "react-bootstrap";


function Certifications() {
  return (
    <Card className="border-0 shadow-sm section-card">
      <Card.Body>
        <h3 className="mb-3 text-warning">🎓 Certification</h3>

        <h5 className="fw-semibold text-warning">
          Master in Java Full Stack Development
        </h5>

        <p className="text mb-2">
          I.T Vedant · 2024 – 2025
        </p>

        <ul className="text-muted">
          <li>Java, OOPs, Collections & Exception Handling</li>
          <li>Spring Boot, REST APIs, MVC Architecture</li>
          <li>React, HTML, CSS, JavaScript</li>
          <li>SQL, Database Design & Optimization</li>
          <li>Git, GitHub, Postman</li>
        </ul>

        <Button
          variant="outline-primary"
          href="/src/assets/certificates/java-fullstack-certificate.pdf"
          target="_blank"
          className="mt-2 d-inline-flex align-items-center gap-2"
        >
          View Certificate 
        </Button>
      </Card.Body>

      <Card.Body>
        <h3 className="mb-3 text-warning">🎓 NSDC Certification</h3>

        <h5 className="fw-semibold text-warning">
           Java Full Stack Web Development
        </h5>

        

        <ul className="text-muted">
          <li>Java, OOPs, Collections & Exception Handling</li>
          <li>Spring Boot, REST APIs, MVC Architecture</li>
          <li>React, HTML, CSS, JavaScript</li>
          <li>SQL, Database Design & Optimization</li>
          <li>Git, GitHub, Postman</li>
        </ul>

        <Button
          variant="outline-primary"
          href="my-portfolio\src\assets\images\nsdc.jpg"
          target="_blank"
          className="mt-2 d-inline-flex align-items-center gap-2"
        >
          View Certificate 
        </Button>
      </Card.Body>
    </Card>


  );
}

export default Certifications;
