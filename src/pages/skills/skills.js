import React from "react"
import './skills.css'

const languages = [
    {id: 2, src: '/icons/css.png', alt: 'CSS'},
    {id: 3, src: '/icons/html.png', alt: 'HTML'},
    {id: 5, src: '/icons/java.png', alt: 'Java'},
    {id: 6, src: '/icons/javascript.png', alt: 'JavaScript'},
    {id: 7, src: '/icons/python.png', alt: 'Python'},
    {id: 4, src: '/icons/scala.png', alt: 'Scala'},
    {id: 8, src: '/icons/sql.png', alt: 'SQL'}
]

const tools = [
    {id: 6, src: '/icons/angular.png', alt: 'Angular'},
    {id: 1, src: '/icons/docker.png', alt: 'Docker'},
    {id: 2, src: '/icons/git.png', alt: 'Git'},
    {id: 8, src: '/icons/mysql.png', alt: 'MySQL'},
    {id: 3, src: '/icons/nodejs.png', alt: 'NodeJS'},
    {id: 4, src: '/icons/reactjs.png', alt: 'ReactJS'},
    {id: 5, src: '/icons/springboot.png', alt: 'Spring Boot'},
]

const Skills = () => {
    return (
        <div className="skills-page">
            <div className="skills-category">
                <h1>my Skills</h1>
                <h2>Coding Languages</h2>
                <div className="skills-list">
                    {languages.map(skill => (
                        <div key={skill.id} className="floating-icon">
                            <span className="icon-name">{skill.alt}</span>
                            <img src={skill.src} alt={skill.alt} className="icon" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="tools-category">
                <h2>Technologies And Frameworks</h2>
                <div className="tools-list">
                    {tools.map(skill => (
                        <div key={skill.id} className="floating-icon">
                            <span className="icon-name">{skill.alt}</span>
                            <img src={skill.src} alt={skill.alt} className="icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills