import React from "react";
import "./style.css";
import programmerImage from "./assets/programmer.png"; // Ensure correct import path

export default function Hero() {
  return (
<section id="home" className="hero">
  <div className="hero-content">
    <h1>Hi, I’m Travis</h1>
    <p>I'm a JavaScript-curious, front-end-leaning programmer, trying to function in the algorithmn. </p>
    <a href="#projects">
      <button className="cta-button">View My Work</button>
    </a>
  </div>
  <div className="hero-image">
    <img src={programmerImage} alt="Programmer" />
  </div>
</section>

  );
}

  