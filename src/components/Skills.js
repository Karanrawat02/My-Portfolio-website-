import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import Javascript from "../assets/img/javascript.png"
import react from "../assets/img/React.png";
import Bootstrap from "../assets/img/bootstrap.png";
import Redux from "../assets/img/redux.png";

function Skills() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Web developer proficient in HTML, CSS, JavaScript,ReactJs, Redux and Bootstrap with a passion for crafting exceptional user interfaces. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="Imageskill" src={Html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Bootstrap} alt="Image" />
                                <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                                <img className="Imageskill" src={Redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;