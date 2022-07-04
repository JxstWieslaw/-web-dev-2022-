import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Buffer } from "buffer";
import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import Configurator from "./components/configurator"
import LandingPage from "./components/landing";
global.Buffer = Buffer;

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/landing"
            exact
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/"
            exact
            render={(props) => <Configurator {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
