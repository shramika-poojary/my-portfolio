import { Card, Button } from "react-bootstrap";


function Certifications() {
  return (
    <Card className="border-0 shadow-sm section-card">
      <Card.Body>
        <h3 className="mb-3">🎓 Certification</h3>

        <h5 className="fw-semibold">
          Master in Java Full Stack Development
        </h5>

        <p className="text-muted mb-2">
          IT Vendor Name · 2024 – 2025
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
    </Card>
  );
}

export default Certifications;
