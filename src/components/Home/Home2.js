import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Hi! I'm <b className="purple">Priyongkar</b>, a dedicated <b className="purple">Software Engineer, Full Stack Web Developer</b> from Bangladesh. 
              I fell in love with programming 💻 and enjoy building web application, interactive web applications, with Database and Api that solve real-world problems. 🤷‍♂️
              <br />
              <br />
              I am fluent in Javascript Programing languages, including <i><b className="purple">HTML, CSS, Javascript, Typescript, and React / Next.js</b></i>.
              <br />
              <br />
              My interests center around developing high-performance <i><b className="purple">technologies and scalable products</b></i>, 
              spanning from backend service APIs and web dashboards apps.
              <br />
              <br />
              I am constantly seeking opportunities to expand my skill set, explore cutting-edge paradigms (like AI integration), and contribute to impactful team projects. I excel at building end-to-end products using <b className="purple">React.js, Next.js, Nodejs, Expressjs</b>, and Mongodb databases.
              <br />
              <br />
              Outside of development, I love keeping up with the latest tech trends, collaborating with other developers 🤝, and bringing innovative ideas to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
<ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href="https://github.com/priyong007"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>

  <li className="social-icons">
    <a
      href="https://x.com/PriyongkarC"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineTwitter />
    </a>
  </li>

  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/priyongkar-chakma/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>

  <li className="social-icons">
    <a
      href="https://www.instagram.com/priyongkarchakma/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillInstagram />
    </a>
  </li>
</ul>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
