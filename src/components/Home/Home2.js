import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a MERN Stack Developer with a strong passion for building
              beautiful, high-performance, and scalable web applications. From
              concept to production, I transform ideas into reliable, real-world
              solutions using <b className="purple">React.js</b>,
              <b className="purple"> Next.js</b>,
              <b className="purple"> Node.js</b>,and
              <b className="purple"> MongoDB.</b>
              <br />
              <br />
              I thrive on learning new technologies, sharpening my
              problem-solving mindset, and pushing my boundaries through
              continuous growth. From crafting smooth, intuitive user interfaces
              to engineering secure and efficient backend systems, I enjoy
              working across the entire full-stack development lifecycle.
              <br />
              <br />I continually upgrade my skills by exploring modern{" "}
              <b className="purple">frameworks</b>, improving{" "}
              <b className="purple">UI/UX </b> design optimizing frontend
              performance, and preparing for advanced software engineering
              challenges.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row className="approach-section mt-5">
          <h2 className="text-center mb-5 text-white">
            My <span className="purple">Approach</span>
          </h2>

          <Col md={4} className="mb-4">
            <div className="approach-card animated-border">
              <span className="step-number">01</span>
              <h4>Define</h4>
              <p>
                I work closely with clients to clearly understand project goals,
                requirements, and vision to build a strong strategic foundation.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="approach-card animated-border active-card">
              <span className="step-number">02</span>
              <h4>Develop</h4>
              <p>
                I transform ideas into real-world products using clean
                architecture, modern frameworks, and scalable backend systems.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="approach-card animated-border">
              <span className="step-number">03</span>
              <h4>Deliver</h4>
              <p>
                I ensure precise delivery with performance optimization, clean
                code, and long-term maintainability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
