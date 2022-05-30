const router = require("express").Router();
const Users = require("../models/SignUpModel");
const { loginvalidation } = require("../validation/loginvalidation");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
  //login validation
  const { error } = loginvalidation(req.body);

  if (error) return res.send(error.details[0].message);

  //check for existing email
  const usernameexist = await Users.findOne({ email: req.body.email });
  if (!usernameexist) return res.send("username does not exist");

  //getpassword from db
  const dbpassword = usernameexist.password;

  //check for password
  const validpassword = bcrypt.compareSync(req.body.password, dbpassword);

  if (!validpassword) return res.status(200).send("incorrect password");
  else {
    const token = jwt.sign(
      {
        username: usernameexist.username,
        email: usernameexist.email,
      },
      "secret123"
    );
    return res
      .status(200)
      .send({
        user: token,
        status: "login successful",
        valid: true,
      });
  }
});
module.exports = router;
