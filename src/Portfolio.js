import React, { Component } from "react";
import "./Portfolio.css";
import { MdArrowDropDown, MdArrowDropUp, MdHome } from "react-icons/md";
import resumePic from "./pictures/ResumePicCircle.png";

class App extends Component {
  render() {
    return (
      <div className="main" id="home">
        <div className="background">
          <div className="NavBarContainer">
            <div class="menu-icon">
              <label for="toggle" />
              <input id="toggle" type="checkbox" />
              <div class="icon" />
              <ul className="menu">
                <a className="h3nav" href="#about">
                  About
                </a>
                <a className="h3nav" href="#tech">
                  Skills
                </a>
                <a className="h3nav" href="#projects">
                  Projects
                </a>
                <a className="h3nav" href="#contact">
                  Contact
                </a>
              </ul>
            </div>
          </div>
          <div className="homepage">
            <div className="content">
              <div className="content-container">
                <ul className="content-list">
                  <li className="content-world">Hello World</li>
                </ul>
              </div>
            </div>
            <div className="title">
              <h1 className="titleName">Justin Faulkenberry</h1>
              <hr className="hrTitle" />
              <h2 className="titleDev">Software Engineer</h2>
            </div>
          </div>
          <a className="page-down" href="#about">
            <MdArrowDropDown className="down-icon" />
          </a>
        </div>
        <div className="about" id="about">
          <div className="about-me">
            <h1>About</h1>
            <hr />
            <div className="about-contents">
              <img
                src={resumePic}
                className="profile-pic"
                alt="resume"
              />
              <p className="about-text">
                {/* I am a full stack software engineer in San Diego, CA. A veteran
                of the United States Military, I am highly motivated and always
                eager to learn new and challenging material. I am always working
                on new ideas that come to mind; one of my favorites things to do
                is create, design, and code new projects and watch them come to
                life. When I'm not working on a project I'm either reading about
                astronomy, robotics, artificial intelligence, or (my guilty
                pleasure) movie trivia. And when I'm not at my computer you'll
                see me out exploring nature and hiking with my pup, Tycho. */}
              </p>
            </div>
          </div>
          <div className="about-media">
            <h1>Media</h1>
            <div className="about-nb">
              <a className="back" href="#home">
                <MdArrowDropUp className="back-icon" />
              </a>
              <a className="next" href="#tech">
                <MdArrowDropDown className="next-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="skills" id="tech">
          <h1>Skills</h1>
          <div className="next-back">
            <a className="back" href="#about">
              <MdArrowDropUp className="back-icon" />
            </a>
            <a className="next" href="#projects">
              <MdArrowDropDown className="next-icon" />
            </a>
          </div>
        </div>
        <div className="projects" id="projects">
          <h1>Projects</h1>
        </div>
        <div className="blog" id="blog">
          <h1>Blog</h1>
          <div className="next-back">
            <a className="back" href="#tech">
              <MdArrowDropUp className="back-icon" />
            </a>
            <a className="next" href="#contact">
              <MdArrowDropDown className="next-icon" />
            </a>
          </div>
        </div>
        <div className="contact" id="contact">
          <h1>Contact</h1>
          <div className="next-back">
            <a className="next" href="#projects">
              <MdArrowDropUp className="next-icon" />
            </a>
            <a className="home" href="#home">
              <MdHome className="home-icon" />
            </a>
          </div>
        </div>
        <footer>Justin Faulkenberry 2018</footer>
      </div>
    );
  }
}

export default App;
