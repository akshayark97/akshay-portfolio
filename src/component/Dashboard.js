import React from "react";
import Typewriter from "typewriter-effect";
import "../index.css";

export default function Dashboard(props) {
  return (
    <section id='dashboard'>
      <div className="dashboard-component">
        <div className="text-row">
          <table cellSpacing="10">
            <tr>
              <td>
                <h2 className="text">Hi! This is Akshay</h2>
              </td>
              <td className="typewriter">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome to My Website")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString()
                      .start();
                  }}
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="image-row">
          <img className="image" src={props.myPhoto} alt="my-photo" />
        </div>
      </div>
    </section>
  );
}
