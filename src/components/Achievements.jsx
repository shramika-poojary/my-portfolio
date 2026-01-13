import { Card, Badge } from "react-bootstrap";

function Achievements() {
  return (
    <Card className="border-0 shadow-sm section-card">
      <Card.Body>
        <h3 className="mb-4 text-warning">Achievements</h3>

        <div className="achievement-box">
          <div className="achievement-icon">
           
            <span className="emoji">🏆</span>
          </div>

          <div className="achievement-content">
            <h5 className="text-primary">Certificate of Merit – Avishkar Research Convention</h5>

            <p className="mb-2 text-info">
              Awarded by the <strong>University of Mumbai</strong> at the
              19th Avishkar Research Convention (Zonal Round) for presenting
              the <strong>SecureSHE</strong> research app project.
            </p>

            <p className="text-info">
              Selected for the <strong>Final Round</strong> of the
              Inter-Collegiate Research Convention 2024 (Thane West Zone).
            </p>

            <Badge bg="primary">Project Achievement</Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Achievements;
