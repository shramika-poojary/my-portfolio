import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "achievements":
        return <Achievements />;
      default:
        return <About />;
    }
  };

  return (
    <>
      {/* MOBILE NAVBAR (mobile only) */}
      <div className="d-md-none">
        <MobileNavbar setActiveSection={setActiveSection} />
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* LEFT SIDEBAR (desktop only) */}
          <div className="col-12 col-md-3 p-0">
            <Sidebar />
          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className="col-12 col-md-9 main-content">
            {/* TOP NAV (desktop only) */}
            <div className="d-none d-md-block">
              <TopNav
                active={activeSection}
                setActive={setActiveSection}
              />
            </div>

            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
