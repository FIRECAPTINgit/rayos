import React, { Component } from "react";

export default class Player extends Component {
  audio = document.createElement("audio");
  render() {
    return (
      <div className="App">
        <button type="button" data-file="musictest.wav" onClick={this.play}>
          music test 00:08
        </button>
        <button
          type="button"
          data-file="Alan Walker  Fade NCS Release.mp3"
          onClick={this.play}
        >
          Faded (NCS) 04:20
        </button>
        <button type="button" className="stop" onClick={this.stop}>
          <img src="Stopicon.png" />
        </button>
        <button type="button" className="pause" onClick={this.pause}>
          <img src="Pauseicon.png" />
        </button>
        <button type="button" className="play" onClick={this.play}>
          <img src="Playicon.png" />
        </button>
      </div>
    );
  }
  play = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.file) {
      this.audio.src = e.currentTarget.dataset.file || "";
    }
    this.audio.play();
  };
  stop = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
  };
  pause = () => {
    this.audio.pause();
  };
}
