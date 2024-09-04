import React, {useRef} from 'react'
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";

function App() {
    const skills = useRef(null);
    const projects = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

  return (
    <div className="App">
        <ScrollToTop />
        <div className="main">
            <nav className="navbar">
                <div className="navbar-center">
                    <ul className = "nav-links">
                        <li onClick={() => scrollToSection(about)}>
                            About Me
                        </li>
                        <li onClick={() => scrollToSection(projects)}>
                            My Projects
                        </li>
                        <li onClick={() => scrollToSection(skills)}>
                            My Skills
                        </li>
                        <li onClick={() => scrollToSection(contact)}>
                            Contact Me
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div ref={about} className="about">
            <h3>About Me</h3>
            <About />
        </div>
        <div ref={projects} className="projects">
            <h3>My Projects</h3>
            <Projects />
        </div>
        <div ref={skills} className="skills">
            <h3>My Skills</h3>
            <Skills />
        </div>
        <div ref={contact} className="contact">
            <h3>Contact Me</h3>
            <Contact />
        </div>
    </div>
  );
}

export default App;