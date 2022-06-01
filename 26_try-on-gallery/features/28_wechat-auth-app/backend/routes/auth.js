const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL ="http://localhost:3000/"

//3
router.get("/login/failed", (req, res)=>{
    res.status(401).json({
        success: false,
        message:"failure",
    })
})

//4
//We will go to CLIENT_URL AND THEN USE A USEEFFECT IN REACT 
router.get("/login/success", (req, res)=>{
    if(req.user){
        res.status(200).json({
        success: true,
        message:"successful",
        user: req.user,
        // //if sending cookies 
        // cookies:req.cookies,

        // //if sending jwt
        // jwt: req.jwt
    })
    }
})

//5
router.get("/logout", (req,res)=>{
    req.logout();
    req.redirect(CLIENT_URL)
})

//1
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//2
router.get("/google/callback", passport.authenticate("google", {
    successRedirect:CLIENT_URL,
    failureRedirect: "/login/failed"
}))

module.exports = router