import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import Combined from "./combined.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="191635117542-cfncvg94338rjd3c7b90o8q3rjl2ghhr.apps.googleusercontent.com">
      <Combined />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
