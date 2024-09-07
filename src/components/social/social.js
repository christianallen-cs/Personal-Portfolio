import React, { useEffect } from "react";
import "./social.css"

const Social = () => {
    useEffect(() => {
        document.querySelectorAll('.social-item a span').forEach(span => {
            const text = span.textContent;
            span.innerHTML = text.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
        });
    }, []);

    return (
        <nav className="social-bar">
            <ul className="social-list">
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/christian-allen-cs/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://github.com/christianallen-cs" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="mailto:christianallen213@gmail.com">
                        <i className="fa fa-envelope"></i>
                        <span>Email</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file"></i>
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Social