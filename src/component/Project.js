import React from "react";
import chatApp from "../Images/chatApp.png";
import userInputGetListOfData from "../Images/userInputGetListOfData.png";

export default function Project() {
  return (
    <section id="project" className="sub-section-alternative">
      <h2 className="project-title">Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img
            className="project-image"
            src={chatApp}
            alt="Project One Image"
          />
          <h3 className="project1">Project One</h3>
          <p className="subtext">
            This is the chat app where one send can send messages to other.
          </p>
          <hr />
          <p className="subtext">
            <a className="project-link" href="https://github.com/akshayark97/React-Udacity-Workspace-ChatApp">
              View here
            </a>
          </p>
        </div>
        <div className="project-card">
          <img
            className="project-image"
            src={userInputGetListOfData}
            alt="Project One Image"
          />
          <h3 className="project2">Project Two</h3>
          <p className="subtext">
            This is my project where one can put firstname, lastname and username and it will tell Number of games played.
          </p>
          <hr />
          <p className="subtext">
            <a className="project-link" href="https://github.com/akshayark97/React-Udacity-workspace-UserInput_And_GetTheListOfReacord">
              View here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
