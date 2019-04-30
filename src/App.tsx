import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            RayOS
          </a>
        </div>

        <div className="container">
          <p>
            <strong>alpha1.9 Changelog</strong>
          </p>
          <p>Feature: Beta Program</p>
          <p>Change: Temporarily removed programs feature.</p>
          <p>Feature: Signup/Login Screen</p>
          <h1>What is rayOS?</h1>
          <p>
            RayOS is an Operating System (OS)
          </p>
          <h2>Beta Program</h2>
          <p>This Is The Link To The Beta Progam where <strong>YOU</strong> Get To Try Out Pre-Release Versions!</p>
          <Link to="/signup">Join Beta Program</Link>
          <h3>What is an OS?</h3>
          <p>
            OS... Or Operating System... "Is software that controls the operation of a computer and directs the processing of programs (as by assigning storage space in memory and controlling input and output functions) Source: Merriam Webster
"
          </p>
          <h4>How many version are there?</h4>
          <p>
            There Are Three Being considered: rayOS Home+, rayOS Business+, And rayOS Mobile. Then There Are Two in development: rayOS Home, And rayOS Business.
          </p>
          <h5>When will Alpha1.0 released?</h5>
          <p>
            Maybe at the mid <strong>SUMMER 2019.</strong>
          </p>
          <h6>
            <strong>So... What is rayOS?</strong>
          </h6>
          <p>It's Just a few of the many Operating Systems.</p>
          <p>Alpha1.9</p>
        </div>
      </>
    );
  }
}

export default App;
