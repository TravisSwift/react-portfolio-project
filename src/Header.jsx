import React, { useState } from "react";
import "./style.css";

export default function Header() {
  const [isAlternate, setIsAlternate] = useState(false);

  const togglePalette = () => {
    setIsAlternate(!isAlternate);
    document.documentElement.classList.toggle("alternate-palette");
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={togglePalette}>
          {isAlternate ? "Default Palette" : "Change Palette"}
        </button>
      </nav>
    </header>
  );
}
