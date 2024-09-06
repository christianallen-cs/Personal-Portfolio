import React, {useRef} from 'react'
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Social from "./components/social/social";
import Skills from "./pages/skills/skills";
import "./App.css"
import "./components/social/social.css"
import "./pages/about/about.css"
import "./pages/skills/skills.css"

function App() {
    const projects = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

  return (
    <div className="App">
        <ScrollToTop />
        <Social />
        <div className="main">
            <nav className="navbar">
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li onClick={() => scrollToSection(about)}>
                            About
                        </li>
                        <li onClick={() => scrollToSection(skills)}>
                            Skills
                        </li>
                        <li onClick={() => scrollToSection(projects)}>
                            Projects
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="intro-container">
                <div className="intro-name">
                    <h1>Hello</h1>
                </div>
                <div className="intro-text">
                    <h2>I am Christian Allen</h2>
                </div>
            </div>
        </div>
        <div ref={about} className="about">
            <About />
        </div>
        <div ref={skills} className="skills">
            <Skills />
        </div>
        <div ref={projects} className="projects">
            <Projects />
        </div>
    </div>
  );
}

export default App;