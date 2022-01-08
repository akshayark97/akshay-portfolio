import React from "react";
import aboutMeImage from "../Images/about-me.png";
import "../index.css";

export default function About() {
  return (
    <section id="about-me" className="about-me-main">
      <div className="about-me">
        <img className="about-me-image" src={aboutMeImage} alt="about me" />
      </div>
      <div className="about-me-text">
        <h1>I'm a Fullstack developer working on Web and Mobile development.</h1>
        <h2 className="about-me-tech-list">Technology used</h2>
        <ol>
            <li className="about-me-list">React and React Native</li>
            <li className="about-me-list">Spring boot</li>
            <li className="about-me-list">Selenium</li>
            <li className="about-me-list">Jenkins</li>
            <li className="about-me-list">Splunk</li>
            <li className="about-me-list">Devops</li>
            <li className="about-me-list">Microservice</li>
            <li className="about-me-list">Python</li>
        </ol>
      </div>
    </section>
  );
}
