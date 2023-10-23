/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Senior Project LIU Community Portal 🎉",
    description:
      "Portal Created to Connect LIU Community.It is a full-stack application that allows users to create an account, login, and post to the community board. The community board is a place where users can post about events, jobs, and other opportunities. The application also allows users to search for other users and view their profiles.",
    url: "https://github.com/Hussein-Fouani/Senior_Project_LIU_Community",
  },
  {
    title: "Blog App Rest-API 🎉",
    description:
      "A dynamic Blog Application API  using the Spring framework. It encompasses a wide array of concepts and tools, including Spring Boot, Spring Security, JWT, Spring Data JPA (Hibernate), and MySQL database.",
    url: "https://github.com/Hussein-Fouani/springboot-blog-rest-api",
  },
  {
    title: "Runner Group Project 🎉",
    description:
      "This is a CRUD (Create, Read, Update, Delete) web application built using Spring Boot and Thymeleaf. It allows users to manage a list of runners and events along with their associated details.",
    url: "https://github.com/Hussein-Fouani/Running_Application",
  },
  {
    title: "Chat Application With Spring  🎉",
    description:
      "Real-Time Web Applications with WebSockets Project! This Project aims to provide  a clear understanding of WebSockets and their crucial role in enabling real-time communication in web applications.",
    url: "https://github.com/Hussein-Fouani/Chat_Application",
  },
  {
    title: "Video Call App 🎉",
    description:
      "Video call application that allow you to Connect, collaborate, and enjoy seamless video calls with ease. Includes in-app chat and screen sharing features for enhanced communication. ",
    url: "https://github.com/Hussein-Fouani/Video_Call_App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>

        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
