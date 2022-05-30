const router = require("express").Router();
const Users = require("../models/SignUpModel");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  // const token = req.headers["x-access-token"];

  // try {
  //   const decoded = jwt.verify(token, "secret123");
  //   const email = decoded.email;
  //   const user = await Users.findOne({ email: email });

  //   return res.json({ status: "ok", quote: user.quote });
  // } catch (error) {
  //   console.log(error);
  //  
  // }
  console.log("GREAT")
  res.json({ status: "error", error: "invalid token" });
});

router.post("/", async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    await Users.updateOne(
      { email: email },
      { $set: { quote: req.body.quote } }
    );

    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ sattus: "ok", error: "invalid token" });
  }
});

module.exports = router;
