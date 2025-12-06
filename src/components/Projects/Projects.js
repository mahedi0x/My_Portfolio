import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import cleanbd from "../../Assets/Projects/cleanbd.png";
import greenNest from "../../Assets/Projects/greenNest.png";
import learnSkill from "../../Assets/Projects/learnSkill.png";
import appBrain from "../../Assets/Projects/appbraing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* CSS Styling for Cards and Animations */}
      <style type="text/css">
        {`
          /* Card Container Styling (Glassmorphism) */
          .project-card-view {
            background-color: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(15px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
            border-radius: 15px !important;
            
            /* Enable Flexbox for vertical layout control */
            display: flex; 
            flex-direction: column;
            
            /* Crucial for equal height across all cards */
            height: 100% !important; 
            
            padding: 20px !important;
            /* REMOVED text-align: center; from here as it messes with the description */
            opacity: 1;
            transition: all 0.4s ease-in-out !important;
          }

          /* Fix for Word Spacing and Text Alignment */
          .project-card-view p {
              text-align: left !important; /* Ensure text flows naturally */
              flex-grow: 1; /* Allow description to take up maximum space */
              margin-bottom: 20px; /* Add margin below description */
          }
          
          /* New CSS for Button Alignment and Grouping */
          .project-card-view .project-card-footer {
              margin-top: auto; /* Pushes the button group to the bottom of the card */
              text-align: center !important; /* Center the buttons horizontally */
              display: flex;
              justify-content: center; /* Center buttons within the footer */
              gap: 10px; /* Space between buttons */
              padding-top: 10px; /* Small space above the buttons */
          }


          /* Hover Animation: Lift Up + Purple Glow */
          .project-card-view:hover {
            transform: translateY(-10px) scale(1.02) !important;
            box-shadow: 0 10px 30px rgba(199, 112, 240, 0.4) !important;
            border: 1px solid rgba(199, 112, 240, 0.5) !important;
          }

          /* Image Zoom Effect on Hover */
          .project-card-view img {
            border-radius: 10px;
            transition: transform 0.5s ease;
          }
          
          .project-card-view:hover img {
            transform: scale(1.05);
          }

          /* Button Styling inside cards */
          .project-card-view .btn-primary {
            background-color: #623686 !important;
            border-color: #623686 !important;
            transition: all 0.3s ease;
          }
          
          /* Removed margin-top: auto from here, as it's now applied to the footer wrapper */
          
          .project-card-view .btn-primary:hover {
            background-color: #8a4baf !important;
            transform: translateY(-2px);
          }
          
          /* Initial Fade In Animation */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .project-card {
            animation: fadeIn 0.8s ease-out forwards;
            height: 100%; /* Ensure Col takes 100% height for d-flex Row */
          }
        `}
      </style>

      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        {/* Added d-flex align-items-stretch for equal height cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="d-flex align-items-stretch">
          
          {/* Card 1: CleanBD */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleanbd}
              isBlog={false}
              title="CleanBD"
              description="CleanBD is a full-stack platform for reporting and tracking public complaints, such as garbage issues, illegal construction, and broken public property. Built with React, Node.js, Express, MongoDB, Tailwind CSS, and Firebase Auth, it features secure user authentication, complaint submission, tracking, and optional community cleanup contributions."
              ghLink="https://github.com/mahedi0x/CleanCommunity_Client"
              demoLink="https://cleanbd.netlify.app/"
            />
          </Col>

          {/* Card 2: LearnSkill */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnSkill}
              isBlog={false}
              title="LearnSkill"
              description="LearnSkill is a full-stack course management platform built with Next.js and NextAuth.js. It allows users to explore detailed course information and efficiently add, manage, update, or delete courses as needed. The application includes secure authentication, protected routes for sensitive actions, and a fully responsive, interactive user interface designed with reusable and maintainable components."
              ghLink="https://github.com/mahedi0x/Course_Management_Client"
              demoLink="https://course-management-client-lac.vercel.app/"              
            />
          </Col>

          {/* Card 3: GreenNest */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenNest}
              isBlog={false}
              title="GreenNest"
              description="GreenNest is a modern single-page web application designed for indoor plant enthusiasts to explore a wide variety of plants, access detailed care guides, purchase plant-related products, and book expert consultations. Built using React.js, Material-UI, and Firebase, the platform provides secure authentication, protected routes, and a fully responsive, user-friendly interface that ensures a smooth and engaging experience across all devices."
              ghLink="https://github.com/mahedi0x/GreenNest_Project"
              demoLink="https://green-nest-plant-677ac.web.app/"
            />
          </Col>

          {/* Card 4: App Brain */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appBrain}
              isBlog={false}
              title="App Brain"
              description="MyAppStore is a responsive web application built with React and Tailwind CSS to showcase a portfolio of mobile apps. Users can browse, search, view details, and simulate installing/uninstalling apps, all with smooth navigation, interactive charts, and toast notifications."
              ghLink="https://github.com/mahedi0x/React-Apps-Project"
              demoLink="https://react-app-project.pages.dev/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;