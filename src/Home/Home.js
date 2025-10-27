import React, { useState, useEffect } from "react";
import ProgressCircle from "../CSS-items/ProgressCircle/ProgressCircle";
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
          <li className="navbar-items">
            <a
              href="#home"
              className={`item-link ${activeHash === "#home" ? "active" : ""}`}
            >
              Home
            </a>
          </li>
          <li className="navbar-items">
            <a
              href="#about"
              className={`item-link ${activeHash === "#about" ? "active" : ""}`}
            >
              About me
            </a>
          </li>
          <li className="navbar-items">
            <a
              href="#services"
              className={`item-link ${
                activeHash === "#services" ? "active" : ""
              }`}
            >
              Services
            </a>
          </li>
          <li className="navbar-items">
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
            <li className="sm-items" id="telegram">
              <a href="https://t.me/t1mur_25">
                <img
                  src="../../images/telegram.png"
                  alt="Telegram logo"
                  className="sm-pics"
                />
              </a>
            </li>
            <li className="sm-items" id="linkedin">
              <a href="https://linkedin.com/in/timur-joldasbaev01">
                <img
                  src="../../images/linkedin.png"
                  alt="LinkedIn logo"
                  className="sm-pics"
                />
              </a>
            </li>
            <li className="sm-items" id="email">
              <a href="mailto:timurjoldasbayev01@gmail.com">
                <img
                  src="../../images/email.png"
                  alt="Gmail logo"
                  className="sm-pics"
                />
              </a>
            </li>
            <li className="sm-items" id="instagram">
              <a href="https://www.instagram.com/t1mur_2501/">
                <img
                  src="../../images/instagram.png"
                  alt="Instagram logo"
                  className="sm-pics"
                />
              </a>
            </li>
          </ul>
          <div className="home-buttons">
            <a href="#contact">
              <div className="btn-contact">Contact me</div>
            </a>
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
        <h1 className="about-title">About me</h1>
        <p className="about-subtext">
          Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolorum odio, fugiat ratione magnam accusantium
          labore.
        </p>
        <div className="about-group">
          <div className="image">
            <img
              src="../../images/portret.jpg"
              alt="Portret"
              className="image-item"
            />
          </div>
          <div className="content">
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae quia labore repellendus enim ratione, excepturi
              delectus amet eveniet dolorum ea! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dicta, earum eveniet neque culpa,
              cum, vitae enim dolores accusamus beatae animi sequi itaque
              voluptatibus! Officiis, itaque corrupti iure nostrum autem id
              eveniet rerum esse. Neque, ex eligendi voluptas obcaecati
              cupiditate dicta similique temporibus corporis illo et ipsam ad
              molestiae? Corrupti, repellat.
            </p>
            <div className="btn-cv main-color">Download CV</div>
          </div>
        </div>
        <ul className="skills">
          <li
            style={{
              background: "transparent",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="Adobe Photoshop"
              icon={<span>Ps</span>}
            />
          </li>
          <li
            style={{
              background: "transparent",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="Front-end Developer"
              icon={<span>FD</span>}
            />
          </li>
          <li
            style={{
              background: "transparent",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="Trading EA and Indicators"
              icon={<span>XM</span>}
            />
          </li>
          <li
            style={{
              background: "transparent",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="Adobe Photoshop"
              icon={<span>Ps</span>}
            />
          </li>
          <li
            style={{
              background: "transparent",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="Adobe Photoshop"
              icon={<span>Ps</span>}
            />
          </li>
          <li
            style={{
              background: "transparent",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              percentage={85}
              label="Adobe Photoshop"
              icon={<span>Ps</span>}
            />
          </li>
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
        <p className="title">Contact me</p>
        <p className="subtext">
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
          <textarea
            type="text"
            placeholder="Your details: "
            className="form-item"
          />
          <div className="form-btns">
            <button className="form-btn" type="button">
              Send
            </button>
            <button className="form-btn" type="button">
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="footer">
        <ul className="footer-list">
          <li className="list-items">
            <a href="#home">Home</a>
          </li>
          <li className="list-items">
            <a href="#about">About me</a>
          </li>
          <li className="list-items">
            <a href="#services">Services</a>
          </li>
          <li className="list-items">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <ul className="socialMedia">
          <li className="sm-items" id="telegram">
            <a href="https://t.me/t1mur_25">
              <img
                src="../../images/telegram.png"
                alt="Telegram logo"
                className="sm-pics"
              />
            </a>
          </li>
          <li className="sm-items" id="linkedin">
            <a href="https://linkedin.com/in/timur-joldasbaev01">
              <img
                src="../../images/linkedin.png"
                alt="LinkedIn logo"
                className="sm-pics"
              />
            </a>
          </li>
          <li className="sm-items" id="email">
            <a href="mailto:timurjoldasbayev01@gmail.com">
              <img
                src="../../images/email.png"
                alt="Gmail logo"
                className="sm-pics"
              />
            </a>
          </li>
          <li className="sm-items" id="instagram">
            <a href="https://www.instagram.com/t1mur_2501/">
              <img
                src="../../images/instagram.png"
                alt="Instagram logo"
                className="sm-pics"
              />
            </a>
          </li>
        </ul>
        <p className="doneby">Designed by Timur Joldasbayev timurjoldasbayev01@gmail.com</p>
      </div>
    </div>
  );
};
export default Home;
