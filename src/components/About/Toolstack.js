import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // SiIntellijidea,
  SiFigma,
  SiAdobephotoshop,

  SiLinux,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs */}
  
      {/* <Col xs={4} md={2} className="tech-icons"><SiIntellijidea /></Col> */}

      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
      
      {/* Platforms */}
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
      

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
    </Row>
  );
}

export default Toolstack;