import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import "./projects.css"

const projectData = [
    {
        id: 1,
        image: './screenshots/ai.jpg',
        title: 'Ai Pathfinder',
        description: 'A group of sophisticated AI pathfinding algorithms using Scala and JavaScript to enhance enemy movement precision. Optimized player location retrieval and path computations, enabling smooth, efficient AI navigation without diagonal movements.',
        link: 'https://github.com/christianallen-cs/Enemy-AI',
        icon: './icons/scala.png',
        icon2: './icons/javascript.png',
        icon3: './icons/html.png'
    },
    {
        id: 2,
        image: './screenshots/multithread.jpg',
        title: 'Multithreaded Web App',
        description: 'A full-stack web application that focused on the multithreading capabilities of java. Displayed language translations for both english and french, time zone conversions and currency formatting all integrated with docker for containerization.',
        link: 'https://github.com/christianallen-cs/Multithreaded-Web-App',
        icon: './icons/typescript.png',
        icon2: './icons/docker.png',
        icon3: './icons/springboot.png',
    },
    {
        id: 3,
        image: './screenshots/database.jpg',
        title: 'Back-End Hub',
        description: 'A Spring Boot application with a complete back-end system, including entity configurations, dao layers, and service implementations, integrated with a front-end for user interaction. Features robust entity relationships, data handling, and user interactions.',
        link: 'https://github.com/christianallen-cs/Vacation-Checkout',
        icon: './icons/java.png',
        icon2: './icons/angular.png',
        icon3: './icons/sql.png'
    },
    {
        id: 4,
        image: './screenshots/movie.jpg',
        title: 'Movie Matcher',
        description: 'A python based movie recommendation system using cosine similarity to match user ratings with films. Processed a vast dataset of over 50,000 movies and 100,000 ratings, delivering top recommendations through a user-friendly interface.',
        link: 'https://github.com/christianallen-cs/WGU-Capstone',
        icon: './icons/python.png',
        icon2: './icons/jupyter.png',
        icon3: './icons/kaggle.png'
    },
]

function Projects() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="section">
                    <div className="title-holder">
                        <h1>my projects</h1>
                    </div>
                    <Row className="card-grid">
                        {projectData.slice(0, 4).map(blog => (
                            <Col md={6} lg={3} key={blog.id}>
                                <div className='holder'>
                                    <Card>
                                        <Card.Img variant="top" src={blog.image}/>
                                        <Card.Body>
                                            <time>{blog.time}</time>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>
                                                {blog.description}
                                            </Card.Text>
                                            <a
                                                href={blog.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary"
                                            >
                                                Repository
                                                <i className="fas fa-chevron-right"></i>
                                            </a>
                                            <Card.Img variant="bottom" src={blog.icon}></Card.Img>
                                            <Card.Img variant="bottom" src={blog.icon2}></Card.Img>
                                            <Card.Img variant="bottom" src={blog.icon3}></Card.Img>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Projects