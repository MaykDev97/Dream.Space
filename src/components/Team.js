import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Card, CardBody } from "react-bootstrap";

export const Team = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
        <section className="skill" id="Our-Team">
            <div className="container">
                <div className="row">
                    <div className="col-12 skill-separator">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="wrap-word">Our Team</h2>
                            <p className="wrap-word"> We are a team of web developers who are passionate about our work. Our team is made up of talented and passionate people who are constantly learning and growing. We love working on challenging projects and are always looking for new ways to improve our services. If you are looking for a team of web developers who can help you create a high-quality website, feel free to contact us. We will be happy to discuss your needs and help you achieve your goals."
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5 className="wrap-word">Project Manager</h5>
                                    <p className="wrap-word">Maykol- MaykDev97 </p>
                                    <p>MaykolD</p>

                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5 className="wrap-word">Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5 className="wrap-word">Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5 className="wrap-word">Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}