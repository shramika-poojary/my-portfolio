import { Card, Button, Badge, Row, Col } from "react-bootstrap";

import eventverseImg from "../assets/images/eventverse.png";
import campushireImg from "../assets/images/campusHire.jpeg";

function Projects() {
  return (
    <Card className="section-card border-0 shadow-sm">
      <Card.Body>
        <h3 className="mb-4 text-warning">Projects</h3>

        {/* Project 1 */}
        <Row className="mb-5 align-items-center text-warning">
          <Col md={4}>
            <img
              src={eventverseImg}
              alt="EventVerse Project"
              className="img-fluid rounded project-img"
            />
          </Col>

          <Col md={8}>
            <h5>EventVerse – College Event Booking System</h5>

            {/* Tech Stack */}
            <div className="mb-2">
              <Badge bg="primary" className="me-2">Java</Badge>
              <Badge bg="primary" className="me-2">Spring Boot</Badge>
              <Badge bg="secondary" className="me-2">HTML|CSS</Badge>
              <Badge bg="success" className="me-2">Bootstrap</Badge>
              <Badge bg="secondary" className="me-2">Javascript</Badge>
              <Badge bg="dark">MySQL</Badge>
            </div>

            {/* STAR Method */}
            <ul>
              <li>Needed a centralized system to manage college events and bookings.</li>
              <li>Designed a secure backend for event, user, and booking management.</li>
              <li>Built RESTful APIs with Spring Boot, role-based & session based authentication, and MySQL integration.</li>
              <li>Enabled smooth event booking workflow with tested APIs.</li>
            </ul>

            <Button
              className="btn btn-primary"
              size="sm"
              href="https://github.com/shramika-poojary/college-event-booking-system.git"
              target="_blank"
            >
              GitHub Repo
            </Button>
          </Col>
        </Row>

        {/* Project 2 */}
        <Row className="align-items-center">
          <Col md={4}>
            <img
              src={campushireImg}
              alt="CampusHire Project"
              className="img-fluid rounded project-img"
            />
          </Col>

          <Col md={8}>
            <h5 className="text-warning">CampusHire – Campus Placement App</h5>

            {/* Tech Stack */}
            <div className="mb-2">
              <Badge bg="primary" className="me-2">Java</Badge>
              <Badge bg="warning" text="dark" className="me-2">Android SDK</Badge>
              <Badge bg="success" className="me-2">Firebase</Badge>
              <Badge bg="info" className="me-2">XML</Badge>
            </div>

            {/* STAR Method */}
            <ul>
              <li>Manual placement communication caused delays and missed updates.</li>
              <li>Build a real-time campus hiring platform for students and placement cells.</li>
              <li>Developed Android app with Firebase Auth, Firestore, and push notifications.</li>
              <li>Improved real-time updates, secure access, and placement tracking.</li>
            </ul>

            
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Projects;
