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
// import UpdatePost from "./UpdatePost";
import PostDetail from "./PostDetail";
import Filter from "./Filter";

import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

import Articles from "./Articles";
import ArticleDetail from "./ArticleDetail";


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

            {/* <Route path="/posts/:id/update" component={UpdatePost} /> */}
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/create-post" component={ComposePost} />

            <Route path="/filter" component={Filter} />
            
            <Route exact path="/articles" component={Articles} />
            <Route path="/articles/:id" component={ArticleDetail} />
            
            
          </Switch>
        </Router>
        
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
