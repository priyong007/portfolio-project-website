import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";

function ResumeNew() {
  const pdf = process.env.PUBLIC_URL + "/Priyongkar Chakma Resume.pptx.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Container className="resume-container">
          {/* Professional Resume Header */}
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={8} style={{ textAlign: "center" }}>
              <h1 className="resume-heading" style={{ marginBottom: "20px" }}>
                My <span className="purple">Professional CV</span>
              </h1>
              <p className="resume-subtitle">
                Full-Stack Software Engineer | React • Next.js • Node.js
              </p>
            </Col>
          </Row>

          {/* Download Button - Centered and Prominent */}
          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "50px", zIndex: 10 }}>
            <Col md={4} style={{ textAlign: "center" }}>
              <Button
                className="resume-download-btn"
                href={pdf}
                download
                style={{ 
                  width: "100%",
                  padding: "15px 40px",
                  fontSize: "1.1em",
                  fontWeight: "600"
                }}
              >
                <AiOutlineDownload style={{ marginRight: "10px" }} />
                Download CV
              </Button>
            </Col>
          </Row>

          {/* Resume Info Cards */}
          <Row style={{ justifyContent: "center", marginTop: "40px", marginBottom: "40px" }}>
            <Col md={3} className="resume-info-card">
              <div className="resume-info-content">
                <h4 className="purple">📧 Email</h4>
                <p>priyong.chakma@gmail.com</p>
              </div>
            </Col>
            <Col md={3} className="resume-info-card">
              <div className="resume-info-content">
                <h4 className="purple">📱 Phone</h4>
                <p>+880151677043</p>
              </div>
            </Col>
            <Col md={3} className="resume-info-card">
              <div className="resume-info-content">
                <h4 className="purple">🔗 Portfolio</h4>
                <p>https://vercel.com/priyongkarchakma</p>
              </div>
            </Col>
          </Row>

          {/* Quick Links */}
          <Row style={{ justifyContent: "center", marginTop: "30px", marginBottom: "50px" }}>
            <Col md={6} style={{ textAlign: "center" }}>
              <p style={{ color: "#b0b0b0", marginBottom: "15px" }}>
                Find me on:
              </p>
              <div className="social-links">
                <a href="https://github.com/priyong007" className="link-btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/priyongkar-chakma/" className="link-btn" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
