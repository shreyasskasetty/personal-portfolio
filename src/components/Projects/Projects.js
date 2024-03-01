import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import can from "../../Assets/Projects/can.png";
import printlysoftware from "../../Assets/Projects/printly-desktop.png";
import printlymobile from "../../Assets/Projects/PrintlyMobileApp.png";
import automation_framework from "../../Assets/Projects/automation_framework.png"
import smartfly from "../../Assets/Projects/smartfly.png"
import ShadowAnalysis from "../../Assets/Projects/ShadowAnalysis.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
         <span style={{ color: "black" }}> My </span><strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartfly}
              isBlog={false}
              isGithub={true}
              title="Smart Fly"
              description="SmartFly is an innovative airport time management application developed as a prototype for the American Airlines challenge at the tamuhackx hackathon hosted by Texas A&M University. Designed to optimize the travel experience, SmartFly integrates real-time updates and personalized recommendations, ensuring that travelers are efficiently guided through the airport and can enjoy their time before boarding their flights"
              ghLink="https://github.com/shreyasskasetty/SmartFly"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShadowAnalysis}
              isBlog={false}
              isGithub={true}
              title="Shadow Analysis"
              description="The Shadow Analysis project is part of the Smart Construction Smart City & Smart Building Research Lab evaluation at Texas A&M University. It focuses on performing shadow analysis using a Python application, containerized for AWS deployment, and integrates data storage in MongoDB."
              ghLink="https://github.com/shreyasskasetty/shadow-analysis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printlysoftware}
              isBlog={false}
              isGithub={true}
              title="Printly Software"
              description="Printly is a desktop application that helps print shop staff manage print requests and schedule prints by assigning them to specific printing resources. It is built using ElectronJS, Firebase, ReactJS, and Node.JS and includes a feature for generating invoices. In addition, it also provides users with the ability to track the status of their print requests in real-time. With this feature, end users can easily stay informed about the status of their print orders and know when they will be ready for pickup. Overall, this tool aims to provide a convenient and efficient way for customers to access printing services while promoting COVID-19 appropriate behavior and helping to keep print shop staff and customers safe."
              ghLink="https://github.com/shreyasskasetty/Printly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printlymobile}
              isBlog={false}
              isGithub={true}
              title="Printly Mobile"
              description="Printly Mobile is a web-based mobile application built with ReactJS and Firebase that allows customers to request print services from remote locations. Through the app, users can fill out a form specifying their print job requirements and submit their request. The request is then stored in a real-time Firestore database and synced with the Printly Software, enabling users to schedule their print orders remotely and pick up the completed prints at their convenience. This app aims to provide a convenient and efficient way for customers to access printing services while promoting COVID-19 appropriate behavior."
              ghLink="https://github.com/shreyasskasetty/printlymobile"
              demoLink="https://shreyasskasetty.github.io/printlymobile/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={can}
              isBlog={false}
              isGithub={false}
              title="Interactive Component Analyser for Optical Network Devices"
              description="The Interactive Component Analyser for Optical Network Devices is a tool that helps users monitor and troubleshoot failures in an optical line system. It includes an interactive circuit path and a dashboard that can be accessed by all network devices through a secure shell connection. The tool allows users to trace the real-time power of an optical signal by monitoring photodiodes at various points in the circuit. To use the tool, users must login to the devices using an IP address and password. This tool is designed to help users identify and resolve issues with their optical network devices in a timely and efficient manner."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automation_framework}
              isBlog={false}
              isGithub={false}
              title="Automation Framework for faster Integration of Optical Line System Firmwares"
              description="This project involved the development of a python test framework to streamline and accelerate the process of integrating third-party vendor firmware into network optical line systems. The framework was designed to address the challenges of testing and evaluating complex use cases, such as Finite State Machine transitions in safety conditions, and to be flexible enough to incorporate more complex use cases in the future. The final product was intended to serve as a standard for firmware integration in the optical line system industry, addressing common challenges in testing embedded systems."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
