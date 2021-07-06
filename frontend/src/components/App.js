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
const AllLost = lazy(() => import('./AllLost'));
const AllFound = lazy(() => import('./AllFound'));
const AllAdopt = lazy(() => import('./AllAdopt'));
const AllReward = lazy(() => import('./AllReward'));
const AllPosts = lazy(() => import('./AllPosts'));
const AboutUs = lazy(() => import('./AboutUs'));

const Footer = lazy(() => import('./Footer'));






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

            <Route exact path="/all-lost" component={AllLost} />
            <Route exact path="/all-found" component={AllFound} />
            <Route exact path="/all-adopt" component={AllAdopt} />
            <Route exact path="/all-reward" component={AllReward} />
            <Route exact path="/all-posts" component={AllPosts} />
            <Route exact path="/about-us" component={AboutUs} />

            
            
          </Switch>
          <Footer/>
        </Router>

        </Suspense>
        
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
