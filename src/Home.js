import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  function popup(name, event) {
    event.preventDefault();
    Swal.fire({
      allowOutsideClick: true,
      showCancelButton: false,
      showCloseButton: true,
      showConfirmButton: false,
      icon: "question",
      title: "Which paper are you looking to download?",
      html:
        "<div class='content'><div class='paper-buttons'><a download href='miniproj/public/Papers/" +
        name +
        "-cat1_.zip'><button class='paper-button' >CAT 1</button></a><a download href='miniproj/public/Papers/" +
        name +
        "-cat2_.zip'><button class='paper-button' >CAT 2</button></a><a download href='miniproj/public/Papers/" +
        name +
        "-fat_.zip'><button class='paper-button'>FAT</button></a></div></div>",
    });
  }

  return (
    <div>
      <header className="header">
        <h1>ReferIT</h1>
        <p>Find all your necessary subjects' past papers here.</p>
      </header>

      <div className="content">
        <ul className="paper-list">
          <li onClick={(event) => popup("differential", event)}>
            Differential Equations and transforms 2023
          </li>
          <li onClick={(event) => popup("calculus", event)}>Calculus 2023</li>
          <li onClick={(event) => popup("discrete", event)}>
            Discrete maths and graph theory 2023
          </li>
          <li onClick={(event) => popup("dsd", event)}>
            Digital System and Design 2023
          </li>
          <li onClick={(event) => popup("chem", event)}>Chemistry 2022</li>
          <li onClick={(event) => popup("beee", event)}>
            Basic electrical and electronic engineering 2022
          </li>
          <li onClick={(event) => popup("dsa", event)}>
            Data structures and algorithms 2022
          </li>
          <li onClick={(event) => popup("daa", event)}>
            Design and analysis of algorithms 2023
          </li>
          <li onClick={(event) => popup("physics", event)}>Physics 2022</li>
        </ul>
      </div>

      <Link to="/login" className="back-button">
        Forum
      </Link>
    </div>
  );
}
