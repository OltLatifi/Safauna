import React, { Component, lazy, Suspense } from "react";
import {BrowserRouter as Router,
        Switch,
        Route,

       } from "react-router-dom";
import { render } from "react-dom";



const Home = lazy(() => import('./Home'));
const ComposePost = lazy(() => import('./ComposePost'));
const PostDetail = lazy(() => import('./PostDetail'));
const Filter = lazy(() => import('./Filter'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));
const Logout = lazy(() => import('./Logout'));
const Articles = lazy(() => import('./Articles'));
const ArticleDetail = lazy(() => import('./ArticleDetail'));
// const CircularProgress = lazy(() => import('@material-ui/core/CircularProgress'));




const renderLoader = () => <p>Loading...</p>;



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Suspense fallback={renderLoader()}>
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
        </Suspense>
        
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
