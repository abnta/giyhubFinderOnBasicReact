import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from './components/Pages/Home'
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import NotFound from './components/Pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = props => {

  return (
    <GithubState>
      <AlertState>
        <Router>
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  component = {Home}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound}/>
              </Switch>
            </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
