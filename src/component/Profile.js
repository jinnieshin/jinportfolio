import React from "react";
import "./Profile.css";
import "./img/profile.png";

function Profile() {
  return (
    <div className="profileLayout">
      <img
        className="profileImage"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bc9c3.appspot.com/o/profile.png?alt=media&token=e9541b6f-da98-48b9-a9f2-bd5e5a0f9ab6"
        alt="profile"
      ></img>
      <div className="profileTextBox">
        <p className="name">Shin Jin</p>
        <p className="birthday">01.11.2001</p>
        <p className="course">
          National University of Singapore
          <br />
          Computer Science with a second major in Statistics
        </p>
      </div>
    </div>
  );
}

export default Profile;
