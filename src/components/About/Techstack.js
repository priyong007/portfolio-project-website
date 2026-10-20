import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
 
  DiGit,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {

  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  // SiFirebase,

} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
  

      {/* Frameworks & Libraries */}

      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>

      {/* Databases */}

      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      {/* <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col> */}

     

      {/* Web Basics */}
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    </Row>
  );
}

export default Techstack;