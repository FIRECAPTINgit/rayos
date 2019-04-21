import React, { Component } from "react";

interface File {
  title: string;
  filename: string;
}

export default class Player extends Component {
  audio = document.createElement("audio");
  render() {
    const files: File[] = [
      { title: "music test 00:08", filename: "musictest.wav" },
      {
        title: "Faded (NCS) 04:20",
        filename: "Alan Walker  Fade NCS Release.mp3"
      },
      {
        title: "Mighty Power of God 01:58",
        filename: "00_001 - I Sing the Mighty Power of God.mp3"
      },
      {
        title: "Bright and Beatiful 02:54",
        filename: "00_002 - All Things Bright and Beautiful.mp3"
      }
    ];

    return (
      <div className="App">
        {files.map(this.renderFile)}

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

  private renderFile = (file: File) => {
    return (
      <button
        key={file.filename}
        type="button"
        data-file={file.filename}
        onClick={this.play}
      >
        {file.title}
      </button>
    );
  };
}
