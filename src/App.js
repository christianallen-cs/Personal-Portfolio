import React, {useRef} from 'react'
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Social from "./components/social/social";
import "./App.css"
import "./components/social/social.css"
import "./pages/about/about.css"

function App() {
    const projects = useRef(null);
    const about = useRef(null);

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
                            About Me
                        </li>
                        <li onClick={() => scrollToSection(projects)}>
                            My Projects
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
            <h1>About Me</h1>
            <About />
        </div>
        <div ref={projects} className="projects">
            <h1>My Projects</h1>
            <Projects />
        </div>
    </div>
  );
}

export default App;