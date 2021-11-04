import React from "react";
import "./Download.scss";
import laptop from "../../images/laptop.svg";
import spotify from "../../files/spotify.txt";
const Download = () => {
  return (
    <div className="Download">
      <div className="content">
        <img src={laptop} alt="laptop" />
        <h1>Download Spotify</h1>
        <span>Play milions of songs on your device.</span>
        <div className="buttonBox">
          <button download={spotify}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Download;
