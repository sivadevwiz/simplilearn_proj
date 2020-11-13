import { Component, Fragment } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
export default App;
