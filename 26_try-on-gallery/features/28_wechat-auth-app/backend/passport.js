const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "968920880720-el32nfhr7b4758o71d69q6pnmssqtkft.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },

    function (accessToken, refreshToken, profile, done) {
       //since we won't be adding any database logic, the normal Logic is skipped and the callback done is called
      //   const user = {
      //       username: profile.displayName,
      //       avatar: profile.photos[0]
      //   };
      //   user.save()
      done(null, profile);
     
    }
  )
);

passport.deserializeUser((user, done) => {
  done(null, user);
});
