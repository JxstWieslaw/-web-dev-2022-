const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//import route files
const signup = require("./signup/signuproute");
const login = require("./login/loginroute");
const home = require("./home/homeroute");

app.use("/signup", signup);
app.use("/login", login);
app.use("/home", home);

//connecting to database
mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to database")
);

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('../client/build'))
}
// creating a server
app.listen(port, () => console.log("server is started at port 5000"));
