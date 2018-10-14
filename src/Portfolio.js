import React, { Component } from "react";
import "./Portfolio.css";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdHome,
  MdCopyright
} from "react-icons/md";
// import { IoMdBriefcase } from "react-icons/io";
import { FaLinkedinIn, FaTwitter, FaUser, FaBriefcase } from "react-icons/fa";
import mountains from "./pictures/mountaintreeswhite.png";
import linkedin from "./pictures/linkedin.PNG";
import { Timeline } from "react-twitter-widgets";
import logo from "./logos/logo.svg";
import CSSLogo from "./logos/CSSLogo.png";
import html5Logo from "./logos/html5Logo.png";
import JavaScriptlogo from "./logos/JavaScriptlogo.png";
import ReduxLogo from "./logos/ReduxLogo.png";
import Cicon from "./logos/Cicon.png";
import less_logo from "./logos/less_logo.png";
import jquerylogo from "./logos/jquerylogo.png";
import mongodblogo from "./logos/mongodblogo.png";
import nodejslogo from "./logos/nodejslogo.png";
import bootstrap from "./logos/bootstrap.png";
import PythonIcon from "./logos/PythonIcon.png";
import SassLogo from "./logos/SassLogo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1
    };
  }

  render() {
    let aboutText = null;
    if (this.state.display === 1) {
      aboutText = (
        <div className="main-click">
          {/* <img
            src={resumePic}
            className="profile-pic"
            alt="resume"
            onClick={() => {
              this.setState({
                display: 1
              });
            }}
          /> */}
          <p className="about-text">
            Welcome, my name is Justin Faulkenberry and I am a full stack
            software engineer located in San Diego, CA. A veteran of the United
            States Military, I am highly motivated and always eager to learn new
            and challenging material. If I'm not at my computer coding, then I'm
            either at my current job with Orangetheory Fitness, reading about
            astronomy, robotics, artificial intelligence, movie trivia, and
            listening to podcasts, or out exploring nature and hiking with my
            Catahoula pup, Tycho.
            {/* I am always working on new ideas that come
            to mind; one of my favorites things to do is create, design, and
            code new projects and watch them come to life.  */}
          </p>
        </div>
      );
    }
    if (this.state.display === 2) {
      aboutText = (
        <div className="tweets">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "faulkenfett11"
            }}
            options={{
              username: "faulkenfett11",
              height: "275",
              width: "425"
            }}
          />
        </div>
      );
    }
    if (this.state.display === 3) {
      aboutText = (
        <div className="linkedin-display">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/justin-faulkenberry/"
          >
            <img src={linkedin} className="linkedin-prof" />
          </a>
        </div>
      );
    }

    return (
      <div className="main" id="home">
        <div className="background">
          <div className="NavBarContainer">
            <div className="menu-icon">
              <label for="toggle" />
              <input id="toggle" type="checkbox" />
              <div className="icon" />
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
          <h1 className="section-title">About</h1>
          <hr />
          <div className="about-contents">
            {aboutText}

            <div className="click-icons">
              <div className="media-links">
                <FaUser
                  className="click github"
                  onClick={() => {
                    this.setState({
                      display: 1
                    });
                  }}
                />
              </div>
              <div className="media-links">
                <FaBriefcase className="click experience" />
              </div>
              <div className="media-links">
                <FaLinkedinIn
                  className="click linkedin"
                  onClick={() => {
                    this.setState({
                      display: 3
                    });
                  }}
                />
              </div>
              <div className="media-links">
                <FaTwitter
                  className="click twitter"
                  onClick={() => {
                    this.setState({
                      display: 2
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="about-media" id="tech">
            <h1 className="section-skills">Skills</h1>
            <hr className="media-hr" />
            <div className="tech-logos">
              <img src={mountains} className="mountains" alt="mountains" />
              <img src={CSSLogo} alt="techIcons" className="tech-icons" />
              <img src={html5Logo} alt="techIcons" className="tech-icons" />
              <img
                src={JavaScriptlogo}
                alt="techIcons"
                className="tech-icons"
              />
              <img src={logo} alt="techIcons" className="tech-icons1" />
              <img src={ReduxLogo} alt="techIcons" className="tech-icons" />
              <img src={PythonIcon} alt="techIcons" className="tech-icons" />
              <img src={nodejslogo} alt="techIcons" className="tech-icons" />
              <img src={jquerylogo} alt="techIcons" className="tech-icons" />
              <img src={mongodblogo} alt="techIcons" className="tech-icons" />
              <img src={less_logo} alt="techIcons" className="tech-icons" />
              <img src={SassLogo} alt="techIcons" className="tech-icons" />
              <img src={bootstrap} alt="techIcons" className="tech-icons" />
              <img src={Cicon} alt="techIcons" className="tech-icons" />
            </div>
          </div>
          <div className="about-nb">
            <a className="back" href="#home">
              <MdArrowDropUp className="back-icon" />
            </a>
            <a className="next" href="#projects">
              <MdArrowDropDown className="next-icon" />
            </a>
          </div>
        </div>
        <div className="projects" id="projects">
          <h1 className="section-title">Projects</h1>
        </div>
        <div className="contact" id="contact">
          <h1 className="section-title">Contact</h1>
          <div className="next-back">
            <a className="next" href="#about">
              <MdArrowDropUp className="next-icon" />
            </a>
            <a className="home" href="#home">
              <MdHome className="home-icon" />
            </a>
          </div>
        </div>
        <footer>
          <MdCopyright />
          Justin Faulkenberry 2018
        </footer>
      </div>
    );
  }
}

export default App;
