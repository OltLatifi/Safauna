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
import UpdatePost from "./UpdatePost";
import PostDetail from "./PostDetail";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/posts/:id/update" component={UpdatePost} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/create-post" component={ComposePost} />
            
            
          </Switch>
        </Router>
        
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
