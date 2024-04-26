import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="header">
        <h1 id="title">Welcome</h1>
      </div>
      <div className="form-box">
        <form>
          <div className="input-field" id="nameField">
            <input type="name" placeholder="Name" id="name" />
          </div>
          <div className="input-field">
            <input type="email" placeholder="E-mail" id="email" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" id="password" />
          </div>

          <div className="btn-field">
            <Link to="/forum">
              <button type="button" id="signinBtn">
                Sign In
              </button>
            </Link>
          </div>
        </form>
        <Link to="/">
          <button className="back">Back</button>
        </Link>
      </div>
    </div>
  );
}
