import React from "react";
import "./Links.css";

function Links() {
  function onClickGithub() {
    document.location.href = "https://github.com/jinnieshin";
  }
  function onClickInstagram() {
    document.location.href = "https://www.instagram.com/jin_shin_01/";
  }

  return (
    <div className="container">
      <div className="link" onClick={onClickGithub}>
        Github
      </div>
      <div className="link" onClick={onClickInstagram}>
        Instagram
      </div>
    </div>
  );
}

export default Links;
