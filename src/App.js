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
            <main>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li onClick={() => scrollToSection(about)}>About</li>
                        <li onClick={() => scrollToSection(skills)}>Skills</li>
                        <li onClick={() => scrollToSection(projects)}>Projects</li>
                    </ul>
                    <img src="/icons/spiderman.png" alt="Spiderman" className="spiderman"/>
                </nav>

                <section className="intro">
                    <h1>Hello</h1>
                    <h2>I'm Christian Allen</h2>
                </section>

                <section ref={about}>
                    <About />
                </section>

                <section ref={skills}>
                    <Skills />
                </section>

                <section ref={projects}>
                    <Projects />
                </section>
            </main>
        </div>
    );
}

export default App;