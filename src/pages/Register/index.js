import React from "react";
import "./styles.scss";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="register-wrapper">
      <h2>About Page</h2>

      <Link href={"/login"}>Login</Link>
    </div>
  );
};

export default About;
