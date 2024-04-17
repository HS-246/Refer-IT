import React from "react";
import "./index.css";

function App() {
  return (
    <div id="app">
      <header className="header">
        <h1>ReferIT</h1>
        <p>Find all your necessary subjects' past papers here.</p>
      </header>

      <div className="content">
        <ul className="paper-list">
          <li>
            <a href="Differential Equations and transforms.html">
              Differential Equations and transforms 2023
            </a>
          </li>
          <li>
            <a href="Calculus.html">Calculus 2023</a>
          </li>
          <li>
            <a href="Discrete maths and graph theory.html">
              Discrete maths and graph theory 2023
            </a>
          </li>
          <li>
            <a href="Digital System and Design.html">
              Digital System and Design 2023
            </a>
          </li>
          <li>
            <a href="Chemistry.html">Chemistry 2022</a>
          </li>
          <li>
            <a href="Basic electrical and electronic engineering.html">
              Basic electrical and electronic engineering 2022
            </a>
          </li>
          <li>
            <a href="Calculus.html">Calculus 2022</a>
          </li>
          <li>
            <a href="Data structures and Algorithms.html">
              Data structures and Algorithms 2022
            </a>
          </li>
          <li>
            <a href="Physics.html">Physics 2022</a>
          </li>
        </ul>
      </div>

      <a href="login.html" className="back-button">
        Forum
      </a>
    </div>
  );
}

export default App;
