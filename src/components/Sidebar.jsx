import { Card, Button } from "react-bootstrap";
import profile from "../assets/images/profile.jpg";
import resume from "../assets/images/Shramika_Poojary_Java_Developer_Resume.pdf";

function Sidebar() {
  return (
    <div className="sidebar-fixed">
      <Card className="h-100 border-0 shadow-sm rounded sidebar-card">
        <Card.Body className="text-center sidebar-content">
          <img src={profile} alt="profile" className="profile-img" />

          <h4 className="mt-3 text-warning">Shramika Poojary</h4>
          <h6>Java Full Stack Developer</h6>
 <p className="d-flex justify-content-center gap-2">
             <p><i className="bi bi-geo-alt-fill"></i> India</p>

            </p>
            
          <hr className="desktop-only" />

          {/* Desktop-only info */}
          <div className="desktop-only">
            <p className="d-flex justify-content-center align-items-center gap-2">
              <i className="bi bi-envelope-fill"></i>
              <a href="mailto:shramikapoojary62@gmail.com">
                shramikapoojary62@gmail.com
              </a>
            </p>
          </div>

          {/* Social + Resume (optional on mobile) */}
          <div className="social-links mt-3 d-flex justify-content-center gap-4">
            <a href="https://www.linkedin.com/in/shramika-poojary-789b27288" target="_blank">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://github.com/shramika-poojary" target="_blank">
              <i className="bi bi-github fs-4"></i>
            </a>
          </div>

          <div className="mt-3 desktop-only">
            <Button
              variant="btn btn-primary"
              size="sm"
              href={resume}
              target="_blank"
            >
              Download Resume
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sidebar;
