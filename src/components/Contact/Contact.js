import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
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
            border-radius: 15px;
          }
          
          .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(199, 112, 240, 0.2);
            border: 1px solid rgba(199, 112, 240, 0.4);
          }

          .purple-text {
            color: #c770f0 !important;
          }

          .glass-input {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            color: white !important;
            backdrop-filter: blur(5px);
            border-radius: 10px;
          }

          .glass-input:focus {
            background: rgba(255, 255, 255, 0.1) !important;
            border-color: #c770f0 !important;
            box-shadow: 0 0 10px rgba(199, 112, 240, 0.3) !important;
          }

          .btn-purple {
            background-color: #c770f0;
            border: none;
            padding: 10px 30px;
            font-weight: bold;
            border-radius: 10px;
            transition: all 0.3s ease;
          }

          .btn-purple:hover {
            background-color: #a546d4;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(199, 112, 240, 0.4);
          }
        `}
      </style>

      <Container fluid className="contact-section" style={{ minHeight: "50vh", padding: "50px 0", marginTop: "100px" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h1 className="text-center display-4 fw-bold mb-5 text-white">
                Get in <span className="purple-text">Touch</span>
              </h1>
            </Col>
          </Row>

          <Row className="justify-content-between align-items-stretch g-5">
            
            {/* Left Column: Contact Information */}
            <Col lg={5} md={12}>
              <div className="d-flex flex-column gap-4 h-100">
                {/* Phone Card */}
                <div className="glass-card p-4 d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <FaPhoneAlt size={30} className="purple-text" />
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold text-white mb-1">Phone</h5>
                    <p className="mb-0 text-white-50">+8801891474769</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="glass-card p-4 d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <FaEnvelope size={30} className="purple-text" />
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold text-white mb-1">Email</h5>
                    <p className="mb-0 text-white-50">mahedi.swe04@gmail.com</p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="glass-card p-4 d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt size={30} className="purple-text" />
                  </div>
                  <div className="ms-4">
                    <h5 className="fw-bold text-white mb-1">Location</h5>
                    <p className="mb-0 text-white-50">Sylhet, Bangladesh</p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="glass-card p-4 d-flex align-items-center">
                  <div className="flex-shrink-0">
        
                  </div>
                  <div className="ms-4">
                     <ul className="home-about-social-links">
                     <li className="social-icons">
                                    <a
                                      href="https://www.linkedin.com/in/mahedi0x/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour  home-social-icons"
                                    >
                                      <FaLinkedinIn />
                                    </a>
                                  </li>
                                  <li className="social-icons">
                                    <a
                                      href="https://web.facebook.com/mahdihasan.sun"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour  home-social-icons"
                                    >
                                      <FaFacebook />
                                    </a>
                                  </li>

                                  <li className="social-icons">
                                    <a
                                      href="https://github.com/mahedi0x"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour home-social-icons"
                                    >
                                      <AiFillGithub />
                                    </a>
                                  </li>

                                 

                                  <li className="social-icons">
                                    <a
                                      href="https://twitter.com/mahedi0x"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour  home-social-icons"
                                    >
                                      <AiOutlineTwitter />
                                    </a>
                                  </li>
                                 
                                 
                                </ul>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column: Contact Form */}
            <Col lg={7} md={12}>
              <div className="glass-card p-5 h-80" style={{ padding: "0px 50px",}}>
                <Form>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="text-white fw-bold">Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" className=" py-2" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label className="text-white fw-bold">Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" className=" py-2" />
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formMessage">
                    <Form.Label className="text-white fw-bold">Your Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write your message..." className=" py-2" />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="btn-purple w-100 py-3">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;