import { Card, Badge } from "react-bootstrap";

function Education() {
  return (
    <Card className="border-0 shadow-sm section-card">
      <Card.Body>
        <h3 className="mb-4 text-warning">Education</h3>

        <div className="education-timeline">

          {/* Masters */}
          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-content">
              <h5>Master of Computer Science</h5>
              <p className="mb-1">
                SIES College of Arts, Science & Commerce (Autonomous), Nerul
              </p>
              <span className="text-warning">June 2025 – Present</span>
              <div className="mt-2">
                <Badge bg="info">Pursuing</Badge>
              </div>
            </div>
          </div>

          {/* Bachelors */}
          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-content">
              <h5>Bachelor of Computer Science</h5>
              <p className="mb-1">
                J.K College of Science & Commerce, Ghansoli
              </p>
              <span className="text-warning">July 2022 – April 2025</span>
              <div className="mt-2">
                <Badge bg="success" className="me-2">CGPA: 9.34</Badge>
                <Badge bg="secondary">Completed</Badge>
              </div>
            </div>
          </div>

        </div>
      </Card.Body>
    </Card>
  );
}

export default Education;
