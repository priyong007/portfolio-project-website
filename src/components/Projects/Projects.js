import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import DevStack from "../../Assets/Projects/dev stack.png";
import carental from "../../Assets/Projects/car.png";
import bizzup from "../../Assets/Projects/bizz.png";
import bazardar from "../../Assets/Projects/bazardor.png";
import Wres from "../../Assets/Projects/WN Resturants.png";
import Mres from "../../Assets/Projects/Resturant mobile.png";
import dreamz from "../../Assets/Projects/wed.png";
import travel from "../../Assets/Projects/travel.png";
import flight from "../../Assets/Projects/flight app.png";
import bookvibe from "../../Assets/Projects/bookVibe.png";
import bpl from "../../Assets/Projects/portbpl.png";
import fitLog from "../../Assets/Projects/fitLog.png";


function Projects() {
  // Project data in an array with tags (web / mobile)
  const projects = [
    {
      imgPath: bpl,
      title: "Premium Leauge Auction - Players Purchase System",
      description: "A web application where users can browse available players, select the ones they want to buy, and manage their selections using in-game coins. The system validates the user’s remaining balance and prevents purchases when the available coins are insufficient.",
      ghLink: "https://github.com/priyong007/bpl-players-purchase-project",
      demoLink: "https://priyongbplcricktet.netlify.app/",
      type: "web",
      
    },
    {
      imgPath: fitLog,
      title: "LibraCore - FitLog is workout Management System",
      description: "FitLog is a workout management web application where users can explore workouts, add exercises to their daily workout plan, save workouts for later, and manage their selected exercises easily.",
      ghLink: "https://github.com/priyong007/fit-log",
      demoLink: "https://fit-log-delta-eight.vercel.app/",
      type: "web",
    },
    {
      imgPath: bookvibe,
      title: "Book Vibe App",
      description: "Book Vibe is a modern book collection and reading tracker built with Next.js. Users can browse books, view detailed information, add books to a reading list or wishlist, and remove them anytime.",
      ghLink: "https://github.com/priyong007/book-vibe",
      demoLink: "https://book-vibe-gamma-amber.vercel.app/",
      type: "mobile",
    },
    
    {
      imgPath: bazardar,
      title: "Super Shop App",
      description: "BazarDor is a web-based market price tracking application that helps users explore daily prices of essential commodities in Bangladesh. Users can compare prices across different markets, view price changes over time, and make informed purchasing decisions.",
      ghLink: "https://github.com/priyong007/bazar-dor",
      demoLink: "https://bazar-dor-orpin.vercel.app/",
      type: "web",
    },
    {
      imgPath: DevStack,
      title: "DevStack-app",
      description: "DevStack-ap application that streamlines operations by managing stack. It also provides personalized add to stack , remove stack. Built with React, Tailwind CSS and integrated with Material UI, the system delivers a modern, responsive, and efficient stack management solution.",
       ghLink: "https://github.com/priyong007/Assignment-5-DevStack-app",
      demoLink: "https://assignment-5-devstack-app.netlify.app/",
      type: "web",
    },
    
    {
      imgPath: carental,
      title: "Car Rental App",
      description: "A Flutter-based mobile application for renting premium cars, integrated with Firebase Firestore for real-time data management. The app features a luxurious and responsive UI, structured with BLoC architecture, and supports cross-platform deployment on Android, iOS, and Web.",
      ghLink: "https://github.com/ChaminduWn/Car_Rental",
      
      type: "mobile",
    },
    {
      imgPath: bizzup,
      title: "BizzSup",
      description:
        "BizzSup is an online customer support system for businesses, developed using PHP, HTML, CSS, JavaScript, and MySQL, hosted locally via XAMPP. The platform features a user-friendly interface with dynamic interactions, allowing businesses to manage customer inquiries efficiently. Built with clean PHP backend scripts, styled with external CSS, and enhanced with JavaScript, BizzSup provides a visually appealing and functional solution for online customer support.",
      ghLink: "https://github.com/ChaminduWn/BizzSup",
      type: "web",
    },
    {
      imgPath: Wres,
      title: "WN Restaurant - Web App",
      description: "A restaurant management system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and styled with Tailwind CSS. This application provides a seamless experience for customers and management alike, supporting menu browsing, ordering, payments, and user management functionalities.",
      ghLink: "https://github.com/ChaminduWn/Resturant",
      type: "web",
    },
    {
      imgPath: Mres,
      title: "WN Restaurant - Mobile App",
      description: "React Native application built with Expo Go, serving as the user-facing counterpart to the web app. It allows users to browse food items, manage their cart, make payments, and update profiles, all connected to a Node.js/Express backend with MongoDB. Designed for Android, it ensures seamless cross-platform access to user data while keeping admin functionalities exclusive to the web version.",
      ghLink: "https://github.com/ChaminduWn/Restaurant-MobileApp",
      type: "mobile",
    },
    {
      imgPath: dreamz,
      title: "FairyTalePlanner - Wedding Planning System",
      description: "FairyTalePlanner is a MERN-based wedding planning platform that connects couples with vendors to make wedding planning effortless and enjoyable. Built with React, Node.js, Express, MongoDB, and styled with Tailwind CSS, it features a budget tracker, interactive Google Maps API for venues and services, and admin-approved listings to ensure high-quality experiences.",
      ghLink: "https://github.com/ChaminduWn/FairyTalePlanner",
      type: "web",
    },
  
    {
      imgPath: travel,
      title: "Travel Management Learning Platform",
      description: "Spring Boot and React.js based web application that blends travel planning with interactive learning and community features. Users can plan trips, join or create travel groups, chat in real time via Spring WebSocket, and share experiences through blog-style posts with likes and comments. The platform also includes quizzes to make learning engaging and social. Built with Spring Boot, React.js, MongoDB, Firebase, and JavaScript, it provides a modern, scalable solution for collaborative travel and knowledge sharing",
      ghLink: "https://github.com/ChaminduWn/Travel-Management-Learning-Platform",
      type: "web",
    },
    
    {
      imgPath: flight,
      title: "Flight Booking Website",
      description: "Travel Booking Website is a responsive platform built with React.js and TailwindCSS that allows users to search flights, book tickets, and follow a step-by-step guide for the booking process. Featuring user authentication, a modern UI with animations, and integration with the Amadeus API, it provides a seamless experience across desktop and mobile devices.",
      ghLink: "https://github.com/ChaminduWn/Flight-App",
      type: "web",
    },
    
  ];

  // State for search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || project.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on — filter by type or search by name.
        </p>

        {/* 🔍 Search + Filter */}
        <div className="project-filters" style={{ position: "relative", zIndex: 10 }}>
          <Form.Control
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ position: "relative", zIndex: 10 }}
          />
          <div className="filter-buttons" style={{ position: "relative", zIndex: 10 }}>
            <button
              className={filter === "all" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("all")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              All
            </button>
            <button
              className={filter === "web" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("web")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Web
            </button>
            <button
              className={filter === "mobile" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("mobile")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Mobile
            </button>
            <button
              className={filter === "iot" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("iot")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              IoT / AI
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;