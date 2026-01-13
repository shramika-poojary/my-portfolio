import { Navbar, Nav, Container } from "react-bootstrap";
import profile from "../assets/images/profile.jpg";

function MobileNavbar({ setActiveSection }) {
  return (
    <Navbar bg="white" expand={false} fixed="top" className="shadow-sm d-md-none">
      <Container fluid>
        <Navbar.Brand className="fw-semibold">
             <img
    src={profile}
    alt="logo"
    className="mobile-logo"
  />
          <span className="brand-text">Shramika Poojary</span>
        </Navbar.Brand>

        <Nav className="ms-auto d-flex flex-row gap-3">

          {["About", "Skills", "Projects", "Education", "Achievements"].map(
            (section) => (
              <Nav.Link
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
              >
                {section}
              </Nav.Link>
            )
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MobileNavbar;
