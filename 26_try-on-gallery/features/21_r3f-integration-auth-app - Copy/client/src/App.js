import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Buffer } from "buffer";
import React, { Component } from "react";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import Activate from "./screens/Activate.jsx";
import Private from "./screens/Private.jsx";
import Admin from "./screens/Admin.jsx";
import Configurator from "./components-configurator1/home/Home";
import LandingPage from "./components-landing";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import ResetPassword from "./screens/ResetPassword.jsx";
import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import "react-toastify/dist/ReactToastify.css";

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
      //React-Router-Dom V6
      // <Router>
      //   <Routes >
      //   <Route exact path='/' element={<Login/>}/>
      //   <Route exact path='/signup' element={<Signup/>}/>
      //   <Route exact path='/home' element={<Home/>}/>
      //   </Routes>
      // </Router>
      <BrowserRouter>
        <Switch>
          <Route
            path="/features"
            exact
            render={(props) => <App {...props} />}
          />
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
          <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} />}
          />
          <PrivateRoute path="/private" exact component={Private} />
          <AdminRoute path="/admin" exact component={Admin} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
