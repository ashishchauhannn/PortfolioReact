import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aashish chauhan </span>
            from <span className="purple"> Saharanpur, Uttarpradesh, India.</span>

            {/* <br />
            I am currently employed as a software developer at Juspay.
            <br /> */}
            <br />
            I have completed my post graduation in MCA from Quantum university roorkee , Uttrakhand.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basket ball.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "WITH GREAT POWER COMES GREAT RESPONSIBILITY.!"{" "}
          </p>
          <footer className="blockquote-footer">STAN LEE.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
