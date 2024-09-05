import React, {useRef} from 'react'
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import Social from "./components/social/social";
import "./App.css"
import "./components/social/social.css"

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
                        <li onClick={() => scrollToSection(skills)}>
                            My Skills
                        </li>
                        <li onClick={() => scrollToSection(contact)}>
                            Contact Me
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="intro-container">
                <div className="intro-name">
                    <h1>I am Christian Allen</h1>
                </div>
                <div className="intro-text">
                    <h3>A recent Computer Science graduate with a passion for impactful tech. Eager to dive into
                    my first full-time software engineering role and make a difference.</h3>
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
        <div ref={skills} className="skills">
            <h1>My Skills</h1>
            <Skills />
        </div>
        <div ref={contact} className="contact">
            <h1>Contact Me</h1>
            <Contact />
        </div>
    </div>
  );
}

export default App;