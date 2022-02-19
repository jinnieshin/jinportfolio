import React, { useEffect, useState } from "react";
import "./Post.css";
import { dbService } from "./FirebaseFunctions";
import { getDoc, doc } from "firebase/firestore";

function Post(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(async () => {
    const docRef = doc(dbService, "post", props.postId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const tempTitle = docSnap.data().title;
      const tempContent = docSnap.data().content;
      setTitle(docSnap.data().title);
      setContent(docSnap.data().content);
      console.log(tempTitle.toString());
      console.log(tempContent.toString());
    } else {
      console.log("No such document!");
    }
  }, []);

  return (
    <div className="postStructure">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Post;
