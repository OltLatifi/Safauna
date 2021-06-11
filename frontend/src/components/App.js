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
import RecipeDetail from "./RecipeDetail";
import RecipeDelete from "./RecipeDelete";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/recipe/:id/delete" component={RecipeDelete} />
            <Route path="/recipe/:id" component={RecipeDetail} />
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
