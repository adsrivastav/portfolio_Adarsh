import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shopping from "../../Assets/Projects/shopping.png";
import conductionplate from "../../Assets/Projects/conductionplate.png";
import weather from "../../Assets/Projects/weather.png";
import yumyum from "../../Assets/Projects/yuyum.png";
import news from "../../Assets/Projects/news.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="ShopSmart"
              description="ShopSmart is a dynamic e-commerce web application that allows users to browse, shop, and manage their orders. This project integrates various key features and technologies to provide a seamless shopping experience"
              ghLink="https://github.com/adsrivastav/Shopingmart"
              demoLink="https://shopingmart.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yumyum}
              isBlog={false}
              title="YumYumCourier"
              description="YumYumCourier is a food delivery application built using React.js and Tailwind CSS. This application allows users to browse a variety of food items, add them to their cart, and proceed to checkout."
              ghLink="https://github.com/adsrivastav/YumYumCourier_app"
              demoLink="https://main--admirable-liger-06c709.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WeatherApi"
              description="This weather application is built using React.js and fetches data from the OpenWeatherMap API to display current weather information for any city entered by the user. The app is designed to be simple, user-friendly, and responsive, providing users with real-time weather updates"
              ghLink="https://github.com/adsrivastav/weather_APi_UsingREactJS/tree/main"
              demoLink="https://melodic-medovik-ccb18d.netlify.app//"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NEWS API"
              description="NewsAPP is a dynamic news website built to fetch and display the latest news articles using the NewsAPI. Due to the limitations of the Developer plan provided by NewsAPI, this application can only be run on a local development server. Requests from the browser are restricted under the Developer plan, except for those originating from localhost. Consequently, I am unable to provide a live link for this project."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conductionplate}
              isBlog={false}
              title="2D Heat Conduction Simulation Using Crank-Nicolson Method in Python"
              description="This college final year project simulates 2D heat conduction in a material using the Crank-Nicolson method, an implicit finite difference technique. It models temperature distribution across a grid by solving the heat equation iteratively, accounting for thermal conductivity, convective heat transfer, and boundary conditions. The project visualizes temperature variations over time through a contour plot, demonstrating advanced numerical methods and computational efficiency."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
