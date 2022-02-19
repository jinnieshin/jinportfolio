import React, { useState, useEffect } from "react";
import "./PostsBoard.css";
import { dbService } from "./FirebaseFunctions";
import { collection, getDocs } from "firebase/firestore";

function PostList() {
  const postRef = collection(dbService, "post");
  const [postTitles, setPostTitles] = useState([]);
  const [postTitlesList, setPostTitlesList] = useState([]);

  class tempData {
    constructor(id, title) {
      this.id = id;
      this.title = title;
    }
  }

  function onClickPost(props) {
    document.location.href = "/posts/" + props;
  }

  useEffect(() => {
    getDocs(postRef).then((snapshot) => {
      const temp = [];
      snapshot.docs.forEach((doc) => {
        temp.push(new tempData(doc.id, doc.data().title));
      });
      const tempTitle = [];
      const tempList = [];
      temp.forEach((e) => {
        tempTitle.push(e.title);
        tempList.push(
          <li className="postTitle" onClick={() => onClickPost(e.id)}>
            {e.title}
          </li>
        );
      });
      setPostTitlesList(tempList);
    });
  }, []);

  return (
    <div className="postListContainer">
      <ul>{postTitlesList}</ul>
    </div>
  );
}

function PostsBoard() {
  return (
    <div className="container">
      <div className="postList">
        <PostList />
      </div>
    </div>
  );
}

export default PostsBoard;
