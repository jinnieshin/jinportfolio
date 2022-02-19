import React, { useEffect, useState } from "react";
import "./Profile.css";
import "./img/profile.png";
import { dbService } from "./FirebaseFunctions";
import { getDoc, doc } from "firebase/firestore";

function Profile() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");

  useEffect(async () => {
    const docRef = doc(dbService, "profile", "profileInfo");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setBirthday(docSnap.data().birthday);
      setEmail(docSnap.data().email);
      setSchool(docSnap.data().school);
      setCourse(docSnap.data().course);
    } else {
      console.log("No such document!");
    }
  }, []);

  return (
    <div className="profileLayout">
      <img
        className="profileImage"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-bc9c3.appspot.com/o/profile.png?alt=media&token=e9541b6f-da98-48b9-a9f2-bd5e5a0f9ab6"
        alt="profile"
      ></img>
      <div className="profileTextBox">
        <p className="name">{name}</p>
        <p className="birthday">{birthday}</p>
        <p className="email">{email}</p>
        <p className="course">
          {school}
          <br />
          {course}
        </p>
      </div>
    </div>
  );
}

export default Profile;
