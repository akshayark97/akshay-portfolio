import React from "react";
import "../index.css";

export default function ContactMe() {
  return (
    <div className="wrapper">
    <form className="form-signin" action="mailTo:akshayark97.ar@gmail.com" method="post" encType="utf-8">       
      <h1 className="form-signin-heading">Contact Me</h1>
      <input type="text" className="form-control" name="username" placeholder="Enter your username" required="" autofocus="" /><br /><br />
      <input type="text" className="form-control" name="firstname" placeholder="Enter your firstname" required=""/><br /><br />
      <input type="text" className="form-control" name="lastname" placeholder="Enter your lastname" required=""/><br /><br />
      <input type="email" className="form-control" name="email" placeholder="Enter your email" required=""/><br /><br />
      <button className="form-button" type="submit">Submit</button>   
    </form>
  </div>
  );
}
