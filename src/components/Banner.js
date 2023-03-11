import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

function Banner () {
    return (
        <>
            <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{"Hi I'm Karan Rawat "}<span className='wrap'>Web Developer</span></h1>
                    <p>A passionate frontend developer focused on creating interactive, accessible, and responsive websites..</p>
                    <a href="Karan_Rawat.pdf" download="Karan Rawat Resume.pdf" style={{"text-decoration":"none"}}>
                    <button > Download Resume  <ArrowRightCircle size={25}/></button>
                    </a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header" />
                </Col>    
            </Row>
        </Container>
      </section>

        </>
    );
  }

export default Banner;
