import React, { Component } from "react";
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        Redirect
       } from "react-router-dom";
import { render } from "react-dom";

import Home from "./Home";
import ComposePost from "./ComposePost";
import PostDetail from "./PostDetail";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/posts/:id" component={PostDetail} />
            <Route exact path="/" component={Home} />
            <Route path="/create-post" component={ComposePost} />
            
            
          </Switch>
        </Router>
        
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
