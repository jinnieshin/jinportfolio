import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../component/Home.js";
import NavBar from "../component/NavBar.js";
import Profile from "../component/Profile.js";
import PostsBoard from "../component/PostsBoard.js";
import Post from "../component/Post.js";
import Links from "../component/Links.js";

function RouterFunction() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route
          path="/posts/:postId"
          render={(routerProps) => (
            <Post postId={routerProps.match.params.postId} />
          )}
        />
        <Route path="/posts" component={PostsBoard} />
        <Route path="/links" component={Links} />
      </Switch>
    </Router>
  );
}

export default RouterFunction;
