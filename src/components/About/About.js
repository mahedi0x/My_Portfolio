import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle"; // Uncomment if you are using particles
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { FaFigma, FaLaptopCode, FaServer } from "react-icons/fa";

function About() {
  return (
    <>
      <style type="text/css">
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            height: 100%;
          }
          
          .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(199, 112, 240, 0.2);
            border: 1px solid rgba(199, 112, 240, 0.4);
          }

          .purple-text {
            color: #c770f0 !important;
          }

          .about-text {
            text-align: justify;
            font-size: 1.1em;
          }

          @media (max-width: 768px) {
            .about-text {
              text-align: left;
            }
            .project-heading {
              font-size: 2.3em;
            }
          }
        `}
      </style>

      <Container fluid className="about-section">
        {/* <Particle /> */}
        <Container>
          
          {/* Main Row: Centered Content */}
          {/* Changed justify-center to justify-content-center */}
          <Row className="align-items-center justify-content-center py-5" style={{ minHeight: "80vh" }}>

            {/* Left Column: About Me + Stats (6 Columns) */}
            <Col md={12} lg={6} className="pe-lg-5 mb-5 mb-lg-0">
              <div className="about-content">
                <h1 className="display-5 fw-bold mb-4 text-center text-lg-start">
                  About <span className="purple-text">Me</span>
                </h1>
                
                <p className="about-text text-white mb-5" style={{ lineHeight: "1.8" }}>
                  My journey started with photography learning to create
                  something beautiful from nothing. That same passion now
                  fuels my work as a <b className="purple-text">MERN Stack Developer</b>. 
                  <br /><br />
                  I build fast, clean, and impactful web apps with React, Next.js,
                  Node.js, and MongoDB turning ideas into reality, one
                  perfect pixel and line of code at a time.
                </p>

                {/* Stats Section */}
                <Row className="text-center g-3">
                  <Col xs={12} md={4}>
                    <div className="glass-card p-3 rounded-3">
                      <h2 className="purple-text fw-bold">20+</h2>
                      <p className="mb-0 text-white small">Completed Projects</p>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="glass-card p-3 rounded-3">
                      <h2 className="purple-text fw-bold">95%</h2>
                      <p className="mb-0 text-white small">Client Satisfaction</p>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="glass-card p-3 rounded-3">
                      <h2 className="purple-text fw-bold">3+</h2>
                      <p className="mb-0 text-white small">Years of Experience</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Right Column: Services (4 Columns) */}
            <Col md={12} lg={4} className="ps-lg-4 ">
              <h2 className="mb-4 fw-bold text-center text-lg-center">
                My <span className="purple-text">Services</span>
              </h2>
              
              <Row className="g-4"> 
                {/* Service Card 1 */}
                <Col xs={12}>
                  <div className="glass-card p-4 rounded-4">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <FaFigma size={35} style={{ color: "#FA5053" }}/>
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-2 fw-bold text-white">Website Design</h5>
                        <p className="mb-0 text-white-50 small">
                        I create intuitive, visually engaging UI/UX designs with Figma and other modern tools.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* Service Card 2 */}
                <Col xs={12}>
                  <div className="glass-card p-4 rounded-4">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                     
                        <FaLaptopCode size={35} className="purple-text" />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-2 fw-bold text-white">Website Development</h5>
                        <p className="mb-0 text-white-50 small">
                          Responsive, high-performance websites using React & Next.js.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Service Card 2 */}
                <Col xs={12}>
                  <div className="glass-card p-4 rounded-4">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <FaServer size={35} style={{ color: "#007bff" }} />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-2 fw-bold text-white">Deployment</h5>
                        <p className="mb-0 text-white-50 small">
                          Secure hosting solutions with CI/CD and cloud platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            
          </Row>

          {/* Skills Section */}
          <h1 className="project-heading mt-5">
            Professional <strong className="purple-text">Skillset </strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple-text">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
          
        </Container>
      </Container>
    </>
  );
}

export default About;