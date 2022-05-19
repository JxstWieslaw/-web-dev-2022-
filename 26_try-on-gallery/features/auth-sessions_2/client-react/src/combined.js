import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "./App.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import Activate from "./screens/Activate.jsx";
import Private from "./screens/Private.jsx";
import Admin from "./screens/Admin.jsx";
import Configurator from "./components-configurator/home/Home";
import LandingPage from "./screens/LandingPage.jsx";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import ResetPassword from "./screens/ResetPassword.jsx";

import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import "react-toastify/dist/ReactToastify.css";

const Combined = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <LandingPage {...props} />} />
        <Route path="/features" exact render={(props) => <App {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route
          path="/register"
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/users/password/forget"
          exact
          render={(props) => <ForgetPassword {...props} />}
        />
        <Route
          path="/users/password/reset/:token"
          exact
          render={(props) => <ResetPassword {...props} />}
        />
        <Route
          path="/users/activate/:token"
          exact
          render={(props) => <Activate {...props} />}
        />
        <Route
          path="/configurator"
          exact
          render={(props) => <Configurator {...props} />}
        />
        <PrivateRoute path="/private" exact component={Private} />
        <AdminRoute path="/admin" exact component={Admin} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Combined;
