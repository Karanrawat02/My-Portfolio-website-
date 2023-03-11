import React from 'react';
import { Container,Row,Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/Camera.jpg';
import projImg2 from '../assets/img/Weather.jpg';
import projImg3 from '../assets/img/Ecom.jpg';
import projImg4 from '../assets/img/crud.jpg';
import projImg5 from '../assets/img/Stopwatch.jpg';
import projImg6 from '../assets/img/portfolio.jpg'
 
function Projects() {

    const projects =[
        {
            title: "IMDb Clone",
            description: "Front-end version of the IMDb website using React.js and The Movie DB API.",
            imgUrl: projImg1,
            link:"https://github.com/Karanrawat02/IMBd-Clone",
        },
        {
            title: "Weather APP",
            description: "Weather app using React.js and Weather-Map API",
            imgUrl: projImg2,
            link:"https://github.com/Karanrawat02/Weather-App",
        },
        {
            title: "E-commerce App",
            description: " E-commerce app using React.js and an API integration",
            imgUrl: projImg3,
            link:"https://github.com/Karanrawat02/Ecommerce-App/tree/main/ecomapp",
        },
        {
            title: "CRUD",
            description: "CRUD application using React JS from scratch",
            imgUrl: projImg4,
            link:"https://github.com/Karanrawat02/CRUD-App",
        },
        {
            title: "Stopwatch",
            description: "Stopwatch application using React.js",
            imgUrl: projImg5,
            link:"https://github.com/Karanrawat02/Stopwatch/tree/main/stopwatch",
        },
        {
            title: "Portfolio Website",
            description: "Portfolio Website using React.js",
            imgUrl: projImg6,
            link:"https://github.com/Karanrawat02/Portfolio",
        },
    ]
  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>These are some of the projects I built to practice and get better at the technologies mentioned above.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=> {
                                    return (
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem, ipsum.</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem, ipsum.</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}

export default Projects