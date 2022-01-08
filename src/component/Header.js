import React from "react";
import {Link} from "react-router-dom";
import "../index.css";

export default function Header(props) {
  return (
    <section id="header">
      <div className="my-logo">
        <img className="logo" src={props.logo} alt="logo" />
      </div>
        <nav className="header-nav">
          <Link itemRef="" className="header-link" to="/about">
            About
          </Link>
          <Link className="header-link" to="/project">
            Project
          </Link>
          <Link className="header-link" to="/contactme">
            Contact Me
          </Link>
        </nav>
    </section>
  );
}
