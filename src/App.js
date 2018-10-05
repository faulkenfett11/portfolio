import React, { Component } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";
import resumePic from "./pictures/ResumePicCircle.png";

class App extends Component {
  render() {
    return (
      <div className="main">
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
                <a className="h3nav">Projects</a>
                <a className="h3nav">Blog</a>
                <a className="h3nav">Contact</a>
              </ul>
            </div>
          </div>
          <div className="homepage">
            <div className="content">
              <div className="content-container">
                <ul className="content-list">
                  <li className="content-world">
                    Hello World
                  </li>
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
            <h1>ABOUT</h1>
            <hr />
            <div className="about-contents">
              <img
                src={resumePic}
                className="profile-pic"
                alt="profile-picture"
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
            <h1>MEDIA</h1>
          </div>
        </div>
        <div className="skills" id="tech">
          <h1>Skills</h1>
        </div>
      </div>
    );
  }
}

export default App;
