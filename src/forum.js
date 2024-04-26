import React from "react";
import "./forum.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="main">
        <Link to="/">
          <button className="btn btn-secondary position-absolute my-3 mx-3">
            <b>&#8678; Back</b>
          </button>
        </Link>
        <header className="App-header">
          <h1 style={{ fontSize: "500%" }}>
            <b>ReferIT Forum</b>
          </h1>
          <p>Welcome to our community!</p>
        </header>
        <div className="container-fluid p-5">
          <h2>
            <b>Latest Topics</b>
          </h2>
          <div>
            <div className="p-3 bg-white shadow rounded mb-3 hov">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>Where can I find good CAO videos?</h3>
                </div>
                <div className="text-muted">
                  <h6>Posted 4 hours ago</h6>
                </div>
              </div>
              <hr></hr>
              <p>
                I want to know good videos or resources to study from please
              </p>
            </div>
            <div className="p-3 bg-white shadow rounded mb-3 hov">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>Anyone know any good python teachers?</h3>
                </div>
                <div className="text-muted">
                  <h6>Posted 1 day ago</h6>
                </div>
              </div>
              <hr></hr>
              <p>I got this teacher in FFCS can someone tell me how she is?</p>
            </div>
            <div className="p-3 bg-white shadow rounded mb-3 hov">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>Here are some good DSA playlists</h3>
                </div>
                <div className="text-muted">
                  <h6>Posted 5 days ago</h6>
                </div>
              </div>
              <hr></hr>
              <p>
                I found some amazing playlists when studying for my exams here
                are the links...
              </p>
            </div>
            <div className="p-3 bg-white shadow rounded mb-3 hov">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>Anyone wanna team up for a hackathon?</h3>
                </div>
                <div className="text-muted">
                  <h6>Posted a week ago</h6>
                </div>
              </div>
              <hr></hr>
              <p>
                I'm signing up for the Electra hackathon in Yantra and im
                looking for a frontend dev for my team
              </p>
            </div>
            <div className="p-3 bg-white shadow rounded mb-3 hov">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>
                    Anyone in B2 slot have extra DSA notes i can borrow after
                    your test?
                  </h3>
                </div>
                <div className="text-muted">
                  <h6>Posted 3 weeks ago</h6>
                </div>
              </div>
              <hr></hr>
              <p>I need a notebook for B2 slot</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
