import React from "react"
import './skills.css'

const languages = [
    {id: 2, src: '/icons/css.png', alt: 'css'},
    {id: 1, src: '/icons/cpp.png', alt: 'c++'},
    {id: 3, src: '/icons/html.png', alt: 'html'},
    {id: 5, src: '/icons/java.png', alt: 'java'},
    {id: 6, src: '/icons/javascript.png', alt: 'javascript'},
    {id: 7, src: '/icons/python.png', alt: 'python'},
    {id: 4, src: '/icons/scala.png', alt: 'scala'},
    {id: 8, src: '/icons/sql.png', alt: 'sql'}
]

const tools = [
    {id: 6, src: '/icons/angular.png', alt: 'angular'},
    {id: 1, src: '/icons/docker.png', alt: 'docker'},
    {id: 2, src: '/icons/git.png', alt: 'git'},
    {id: 8, src: '/icons/mysql.png', alt: 'mysql'},
    {id: 3, src: '/icons/nodejs.png', alt: 'nodejs'},
    {id: 7, src: '/icons/postgres.png', alt: 'postgres'},
    {id: 4, src: '/icons/reactjs.png', alt: 'reactjs'},
    {id: 5, src: '/icons/springboot.png', alt: 'springboot'},
]

const Skills = () => {
    return (
        <div className="skills-page">
            <div className="skills-category">
                <h1>my Skills</h1>
                <h2>Coding Languages</h2>
                <div className="skills-list">
                    {languages.map(skill => (
                        <div key={skill.id} className="floating-circle">
                            <img src={skill.src} alt={skill.alt} className="icon" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="tools-category">
                <h2>Technologies And Frameworks</h2>
                <div className="tools-list">
                    {tools.map(skill => (
                        <div key={skill.id} className="floating-circle">
                            <img src={skill.src} alt={skill.alt} className="icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills