import React, { useState, useEffect } from "react";
import "./Home.scss";

const Home = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    // Listen for hash change
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeHash]);
  return (
    <div className="main">
      <div className="nav">
        <ul className="navbar">
          <li className="navbar-items" >
            <a
              href="#home"
              className={`item-link ${activeHash === "#home" ? "active" : ""}`}
            >
              Home
            </a>
          </li>
          <li className="navbar-items" >
            <a
              href="#about"
              className={`item-link ${activeHash === "#about" ? "active" : ""}`}
            >
              About me
            </a>
          </li>
          <li className="navbar-items" >
            <a
              href="#services"
              className={`item-link ${
                activeHash === "#services" ? "active" : ""
              }`}
            >
              Services
            </a>
          </li>
          <li className="navbar-items" >
            <a
              href="#contact"
              className={`item-link ${
                activeHash === "#contact" ? "active" : ""
              }`}
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
      <div className="home" id="home">
        <div className="context">
          <p className="hello">Hi I am</p>
          <p className="name">Timur Joldasbayev</p>
          <p className="profession">Software Engineer</p>
          <ul className="socialMedia">
            <li className="sm-items" id="telegram"></li>
            <li className="sm-items" id="linkedin"></li>
            <li className="sm-items" id="email"></li>
            <li className="sm-items" id="instagram"></li>
          </ul>
          <div className="home-buttons">
            <div className="btn-contact">Contact me</div>
            <div className="btn-cv">Download CV</div>
          </div>
        </div>
        <div className="image">
          <img
            src="../../images/portret.jpg"
            alt="Portret"
            className="image-item"
          />
        </div>
      </div>
      <div className="about" id="about">
        <p className="about-title">About me</p>
        <p>Lorem ipsum dolor sit.</p>
        <div className="about-group">
          <div className="image">
            <img
              src="../../images/portret.jpg"
              alt="Portret"
              className="image-item"
            />
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae quia labore repellendus enim ratione, excepturi
              delectus amet eveniet dolorum ea!
            </p>
          </div>
          <div className="btn-cv main-color">Download CV</div>
        </div>
        <ul className="skills">
          <li className="skills-item"></li>
          <li className="skills-item"></li>
          <li className="skills-item"></li>
          <li className="skills-item"></li>
          <li className="skills-item"></li>
          <li className="skills-item"></li>
          <li className="skills-item"></li>
          <li className="skills-item"></li>
        </ul>
      </div>
      <div className="services" id="services">
        <p className="service-title">Services</p>
        <p className="title-subtext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          nobis numquam, quibusdam ad excepturi aspernatur.
        </p>
        <ul className="service-list">
          <li className="service-items">
            <img
              src="../../images/folder.png"
              alt="Folder"
              className="service-images"
            />
            <p className="service-name">Something</p>
            <p className="service-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              voluptas atque animi sapiente eaque quas?
            </p>
          </li>
          <li className="service-items">
            <img
              src="../../images/folder.png"
              alt="Folder"
              className="service-images"
            />
            <p className="service-name">Something</p>
            <p className="service-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              voluptas atque animi sapiente eaque quas?
            </p>
          </li>
          <li className="service-items">
            <img
              src="../../images/folder.png"
              alt="Folder"
              className="service-images"
            />
            <p className="service-name">Something</p>
            <p className="service-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              voluptas atque animi sapiente eaque quas?
            </p>
          </li>
          <li className="service-items">
            <img
              src="../../images/folder.png"
              alt="Folder"
              className="service-images"
            />
            <p className="service-name">Something</p>
            <p className="service-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              voluptas atque animi sapiente eaque quas?
            </p>
          </li>
          <li className="service-items">
            <img
              src="../../images/folder.png"
              alt="Folder"
              className="service-images"
            />
            <p className="service-name">Something</p>
            <p className="service-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              voluptas atque animi sapiente eaque quas?
            </p>
          </li>
          <li className="service-items">
            <img
              src="../../images/folder.png"
              alt="Folder"
              className="service-images"
            />
            <p className="service-name">Something</p>
            <p className="service-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              voluptas atque animi sapiente eaque quas?
            </p>
          </li>
        </ul>
      </div>
      <div className="contact" id="contact">
        <p className="contac-title">Contact me</p>
        <p className="contac-subtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          mollitia aliquam veritatis! Hic, excepturi impedit.
        </p>
        <form action="register" className="contact-form">
          <input type="text" placeholder="Your name: " className="form-item" />
          <input
            type="text"
            placeholder="Your phonenumber: "
            className="form-item"
          />
          <input type="text" placeholder="Your email: " className="form-item" />
          <input
            type="text"
            placeholder="Your serviceType: "
            className="form-item"
          />
          <input
            type="text"
            placeholder="Your details: "
            className="form-item"
          />
          <div className="form-btn">Send</div>
        </form>
      </div>
      <div className="footer">
        <ul className="navbar">
          <li className="navbar-items">Home</li>
          <li className="navbar-items">About me</li>
          <li className="navbar-items">Services</li>
          <li className="navbar-items">Contact me</li>
        </ul>
        <ul className="socialMedia">
          <li className="sm-items" id="telegram"></li>
          <li className="sm-items" id="linkedin"></li>
          <li className="sm-items" id="email"></li>
          <li className="sm-items" id="instagram"></li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
