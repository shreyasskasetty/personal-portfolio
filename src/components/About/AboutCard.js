import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "rgb(20 39 78)"}}>
            Hello there 👋<br />
            I'm <strong>Shreyas</strong> (pronounced "Shrey-yes"), and I specialize in both Full Stack and Backend Development. Currently, I'm expanding my Computer Science education with a master's degree at Texas A&M University in College Station. I am passionate about innovation and impact, I highly value feedback, and I am always eager to learn.<br /><br />
            
            Before returning to academia, I gained valuable industry experience at Cisco Systems. There, I developed productivity tools and automation frameworks, collaborating closely with teams across hardware, QA, and software. My strengths are in backend web infrastructure, server-side programming, and I also have experience in front-end programming.<br /><br />
            
            In my free time, I focus on enhancing my skills. I'm currently specializing in topics like Search Engines, Recommender Systems and AI. I'm also learning new technologies like Apache Kafka, Graph QL, and exploring new front-end and backend frameworks, including Go, Mantine, and TypeScript.<br /><br />
            
            When I'm not glued to my laptop, I enjoy 
          </p>

          <ul style={{color: "rgb(20 39 78)"}}>
            <li className="about-activity">
              <ImPointRight /> Playing Sports/Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching/Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying updated with new technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
