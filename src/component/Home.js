import React from "react";
import "./Home.css";

function Home() {
  const onClick = () => {
    window.location.href = "/profile";
  };
  return (
    <div className="container">
      <div className="homeName" onClick={onClick}>
        Jin
      </div>
      <div className="homeCircle"></div>
    </div>
  );
}

export default Home;
