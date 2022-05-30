const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//import route files
const signup = require("./signup/signuproute");
const login = require("./login/loginroute");
// const home = require("./home/homeroute");

app.use("/signup", signup);
app.use("/login", login);
// app.use("/home", home);

//connecting to database
mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to database")
);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// creating a server
app.listen(port, () => console.log("server is started at port 5000"));
