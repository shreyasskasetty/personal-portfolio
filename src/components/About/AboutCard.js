import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "rgb(20 39 78)"}}>
            Hi Everyone, I am <strong>Shreyas Shivakumar Kasetty </strong>
            from <strong> Bengaluru, India.</strong>
            <br />I am a Software Engineering working at Cisco Systems Pvt. Ltd building software 
             for next-generation Optical Line Systems.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{color: "rgb(20 39 78)"}}>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Art/Pencil Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(20 39 78)" }}>
          "The true measure of success is not in the achievements we accumulate, but in the positive impacts we have on the world around us.
           Let us strive to build things that make a difference, that improves the lives of others, and that leave a lasting legacy of kindness and compassion."{" "}
          </p>
          <footer className="blockquote-footer"><strong>Shreyas S Kasetty</strong></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
