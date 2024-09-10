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
        description: 'A group of sophisticated Ai pathfinding algorithms using Scala and javaScript to enhance enemy movement precision. optimized player location retrieval and path computations, enabling smooth, efficient Ai navigation without diagonal movements.',
        link: 'https://github.com/christianallen-cs/Enemy-AI'
    },
    {
        id: 2,
        image: './screenshots/music-rainbow.jpg',
        title: 'Genetic Algorithm',
        description: 'Advanced statistical methods and a Bayesian average algorithm using scala, addressing biases in user ratings. Designed functions for processing song data from CSv files, calculating cost functions, and refining playlist recommendations.',
        link: 'https://github.com/christianallen-cs/Genetic-Algorithm'
    },
    {
        id: 3,
        image: './screenshots/route.jpg',
        title: 'SmartRoute System',
        description: 'A nearest neighbor algorithm to reduce package delivery and truck mileage by 30 percent. implemented a custom hash table for real-time package tracking and created an intuitive ui for streamlined delivery monitoring and truck status.',
        link: 'https://github.com/christianallen-cs/Smart-Route'
    },
    {
        id: 4,
        image: './screenshots/movie.jpg',
        title: 'Movie Matcher',
        description: 'Python-based movie recommendation system using cosine similarity to match user ratings with films. Processed a vast dataset of over 50,000 movies and 100,000 ratings, delivering top recommendations through a user-friendly interface.',
        link: 'https://github.com/christianallen-cs/WGU-Capstone'
    },
]

function Projects() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="section">
                    <div className="title-holder">
                        <h1>my projects</h1>
                        <div className="subtitle">explore my favorite works</div>
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