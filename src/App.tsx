import React, { Component } from "react";
import "./App.css";

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
          <h1>What is rayOS?</h1>
          <p>
            Well, it's an operating system scroll down to find the stock apps
            that <strong>I MADE MY SELF</strong> and use them before downloading
            along with some Questions and their Answers.
          </p>
          <h2>Ready Programs.</h2>
          <p>Ray Music! (Version Alpha 0.9)</p>
          <h3>What is an OS?</h3>
          <p>
            OS stands for Operating System which is what{" "}
            <strong>YOUR USING RIGHT NOW!</strong> If your on a computer you
            might be using windows or macOSX or linux (lin-uh ks) or solaris
            *GASPS*. If your on a laptop your probaly using macOSX or windows or
            ChromeOS. if your on a phone your probaly using IOS, Android, or
            KaiOS.
          </p>
          <h4>What version is rayOS in?</h4>
          <p>
            It hasn't been annouced yet. It isn't even in delevelopment yet.
            It's just an idea.
          </p>
          <h5>When will it be annouced?</h5>
          <p>
            Maybe at the end of <strong>SUMMER 2019.</strong>
          </p>
          <h6>
            <strong>So... What is rayOS?</strong>
          </h6>
          <p>It's just one of the many differant versions of linux.</p>
          <p>Website Version Alpha 0.8.9-Final</p>
        </div>
      </>
    );
  }
}

export default App;
